import React from "react";
import DashNav from './screens/dasNav/dashNav'
import DashMain from './screens/dashMain/dashMain'
import './dash.css'

function dashboardParticipants (){
    return (
        <div className="Container-dash">
            <DashNav />
            <DashMain />
        </div>
    )
}



export default dashboardParticipants;