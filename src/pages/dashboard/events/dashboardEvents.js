import React from "react";
import DashNav from '../screens/dasNav/dashNav'
import EventsTitle from './screens/title'
import EventList from './screens/eventList'
import './screens/events.css'


function dashboardEvent (){
    return (
        <div className="Container-dash">
            <DashNav />
            <div className='dashMain' id="dashMain">
            <EventsTitle />
            <EventList />
            </div>
            
        </div>
    )
}



export default dashboardEvent;