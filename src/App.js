import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import mainPage from './pages/main/main'
import aboutPage from './pages/about/aboutPage'
import {Helmet} from 'react-helmet'
import dashboardReview from './pages/dashboard/dashboarReview'
import dashboardParticipants from './pages/dashboard/dasboardParticipants'

function App() {
  return (
    <Router>
       <Helmet>
      <title>Chron - хронометражная система для вашего старта</title>
      <script src="https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.4.2/firebase-firestore.js"></script>
    </Helmet>
        <Switch>
          <Route exact path="/" exact component={mainPage}>
          </Route>
          <Route exact path="/about" exact component={aboutPage}>
          </Route>
          <Route exact path="/dashboard" component={dashboardReview}>
          </Route>
          <Route exact path="/dashboard/participants" component={dashboardParticipants}>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
