import React from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import mainPage from './pages/main/main'
import aboutPage from './pages/about/aboutPage'
import dashboard from './pages/dashboard/dashboard-main'
import dashboardParticipants from './pages/dashboard/dasboardParticipants'
import Helmet from 'react-helmet'

function App() {
  return (
    <Router>
       <Helmet>
      <title>Chron - хронометражная система для вашего старта</title>
      <script src="https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.4.2/firebase-firestore.js"></script>
    </Helmet>
        <Switch>
          <Route path="/" exact component={mainPage}>
          </Route>
          <Route path="/about" exact component={aboutPage}>
          </Route>
          <Route path="/dashboard" exact component={dashboard}>
          </Route>
          <Route path="/dashboard/participants" exact component={dashboardParticipants}>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
