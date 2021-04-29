import React, { useState, useEffect } from 'react'
import firebase from '../../../../firebase'


function useEvents () {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const unsibscribe = firebase
            .firestore()
            .collection('events')
            .onSnapshot((snapshot) => {
                const newEvents = snapshot.docs.map((doc) =>({
                    id: doc.id,
                    ...doc.data()
                }))

                setEvents(newEvents)
            })
        return () => unsibscribe()    
    }, [])

    return events
}

const EventList = () => {

    const events = useEvents()

    return(
        <div>
            <table className="eventList">
                <thead>
                    <tr>
                        <th className="green">Event Name</th>
                        <th className="green">Organizer</th>
                        <th className="green">Event Date</th>
                        <th className="green">Action</th>
                    </tr>
                </thead>
                {events.map((events) =>
                <tbody key={events.id}>
                    <tr className="eventListRow">
                        <th className="white">{events.name}</th>
                        <th className="white">{events.organizer}</th>
                        <th className="white">{new Date(events.date.seconds * 1000).toLocaleDateString()}</th>
                        <th className="white"><button>DELETE</button></th>
                    </tr>
                </tbody>
                )}
            </table>
        </div>
    )
}

export default EventList;