import React from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DashNav from './screens/dasNav/dashNav'
import DashMain from './screens/dashMain/dashMain'
import './dash.css'


function dashboardReview (){
    return (
        <div className="Container-dash">
            <DashNav />
            <DashMain />
        </div>
    )
}



export default dashboardReview;