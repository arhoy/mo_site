import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteProfile } from '../../actions/profile';
import CreateProfile from './CreateProfile';
import { Profile } from './Profile';
import { Section, SectionGrey } from '../reusableStyles/sections/Sections';
import { H2 } from '../reusableStyles/typography/Typography';

const Dashboard = ({
  user: {
    user: { data },
  },
  getCurrentProfile,
  deleteProfile,
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  if (loading) return <div>Loading...</div>;

  // set user data object to user variable
  const user = data;
  return (
    <>
      <Section>
        <H2>Hello {user && user.name} </H2>
        <p>Your role is: {user.role} </p>
        <p>Email: {user.email} </p>
        <br />
        <p>
          Thank you for being a member since:{' '}
          <Moment format="MMM Do YYYY">
            {(user && user.createdAt) || 'Unknown'}
          </Moment>
        </p>
        This is your private dashboard
      </Section>

      <SectionGrey>
        <H2>Your Profile</H2>
        {profile ? (
          <>
            <Profile profile={profile} />
            <button onClick={() => deleteProfile()}>
              {' '}
              Delete Profile{' '}
            </button>{' '}
          </>
        ) : (
          <CreateProfile />
        )}
      </SectionGrey>
    </>
  );
};

const mapStateToProps = state => ({
  profile: state.profile,
});

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteProfile },
)(Dashboard);
