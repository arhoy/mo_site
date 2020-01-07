import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import { getReviewForSlug } from '../../actions/review';
import OrderReview from './OrderReview';

const Div = styled.div`
  & select {
    padding: 1rem;
    border-radius: 0.5rem;
    margin: 1rem 0;
  }
`;

const SelectContainer = styled.div``;

const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// review dynamically generated by users who have ordered products
const OrderReviews = ({
  review: { reviews, loading, error },
  getReviewForSlug,
  slug,
}) => {
  useEffect(() => {
    getReviewForSlug(slug, '-createdAt');
  }, [getReviewForSlug]);

  // select dropdown options
  const sortOptions = [
    { label: 'Most Recent', value: '-createdAt' },
    { label: 'Rating (high to low)', value: '-rating' },
    { label: 'Rating (low to high)', value: 'rating' },
  ];

  const [sort, setSort] = useState(sortOptions[0].value);

  const selectSorHandler = e => {
    setSort(e.target.value);

    getReviewForSlug(slug, e.target.value);
  };

  // rendering

  if (loading) return <div> I am loading! </div>;

  return (
    <Div>
      {error && <div> {error}</div>}
      <SelectContainer>
        <select value={sort} onChange={e => selectSorHandler(e)}>
          {sortOptions.map(o => (
            <option key={o.label} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </SelectContainer>
      <ReviewsContainer>
        {reviews &&
          reviews.length > 0 &&
          reviews.map(review => (
            <OrderReview key={review._id} review={review} />
          ))}
      </ReviewsContainer>
    </Div>
  );
};

const mapStateToProps = state => ({
  review: state.review,
});

export default connect(
  mapStateToProps,
  { getReviewForSlug },
)(OrderReviews);
