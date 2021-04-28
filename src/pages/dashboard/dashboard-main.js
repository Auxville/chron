import React from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashNav from './screens/dasNav/dashNav'
import DashMain from './screens/dashMain/dashMain'
import './dash.css'
import dashboardReview from './dashboarReview'
import dashboardParticipants from './dasboardParticipants'


function dashboard (){
    return (
        <Router>
        <Switch>
          <Route path="/dashboard" exact component={dashboardReview}>
          </Route>
          <Route path="/dashboard/participants" exact component={dashboardParticipants}>
          </Route>
        </Switch>
    </Router>
    )
}



export default dashboard;