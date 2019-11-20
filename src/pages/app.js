import React from 'react';
import { Router } from '@reach/router';
import Register from '../components/auth/Register';
import Layout5 from '../components/layouts/Layout5';
import Navbar from '../components/dashboard/Layout/Navbar';
import Dashboard from '../components/dashboard/Dashboard';
import Login from '../components/auth/Login';

// REDUX
// import { Provider } from 'react-redux';
// import store from '../store';
import PopupAlerts from '../components/reusableStyles/alerts/PopupAlerts';
// import setAuthToken from '../utils/setAuthToken';

import AppLanding from '../components/dashboard/AppLanding';
import PrivateRoute from '../components/routing/PrivateRoute';

const app = () => {
  return (
    // <Provider store={store}>
    <Layout5>
      <Navbar />
      <Router>
        <AppLanding exact path="/app" />
        <PrivateRoute path="/app/dashboard" component={Dashboard} />
        <Register exact path="/app/register" />
        <Login exact path="/app/login" />
      </Router>
      <PopupAlerts />
    </Layout5>
    // </Provider>
  );
};

export default app;
