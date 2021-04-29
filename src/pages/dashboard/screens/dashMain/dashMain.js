import React from "react";
import '../dashMain/dashMain.css';
import TimeList from '../../../../components/data'
import AddTimeEntryForm from '../../../../components/add-new-entry-time'



function dashMain () {
    return (
        <div className='dashMain' id="dashMain">
            <TimeList />,
            <AddTimeEntryForm />
        </div>
    )}

export default dashMain;