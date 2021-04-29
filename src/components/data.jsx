import React, { useState, useEffect} from 'react'
import firebase from '../firebase'


const SORT_OPTION = {
    'TIME_ASC': {column: 'time_seconds', direction: 'asc'},
    'TIME_DESC': {column: 'time_seconds', direction: 'desc'},

    'TITLE_ASC': {column: 'title', direction: 'asc'},
    'TITLE_DESC': {column: 'title', direction: 'desc'}
}

function useTimes (sortBy = 'TIME_ASC') {
    const [times, setTimes] = useState([])

    useEffect(() => {
        const unsibscribe = firebase
            .firestore()
            .collection('times')
            .orderBy(SORT_OPTION[sortBy].column, SORT_OPTION[sortBy].direction)
            .onSnapshot((snapshot) => {
                const newTimes = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setTimes(newTimes)
            })
        return () => unsibscribe()    
    }, [sortBy])

    return times
}

const TimeList = () => {
    const [sortBy, setSortBy] = useState('TIME_ASC')
    const times = useTimes(sortBy)

    return(
        <div>
            <h2>Times list</h2>
            <div>
                <label>Sort by:</label>{' '}
                <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option value='TIME_ASC'>Fastest</option>
                    <option value='TIME_DESC'>Slowest</option>
                    <option disabled>----</option>
                    <option value='TITLE_ASC'>A-Z</option>
                    <option value='TITLE_DESC'>Z-A</option>
                </select>
            </div>
            <ol>
                {times.map((time) => 
                <li key={time.id}>
                    <div className="time-entry">
                        {time.title}
                        <code className="time">{time.time_seconds} seconds</code>
                    </div>
                </li>
                )}
            </ol>
        </div>
    )
}

export default TimeList;