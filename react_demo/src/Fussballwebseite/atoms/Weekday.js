import React from 'react'

const Weekday = ({ formattedSpieltag, loadNextMatchday, loadPreviousMatchday }) => {
    return (
        <div className='flex justify-between space-x-2 text-3xl font-bold text-white'>
            <button onClick={loadPreviousMatchday}>&lt;</button>
            <div>{formattedSpieltag}</div>
            <button onClick={loadNextMatchday}>&gt;</button>
        </div>
    );
}

export default Weekday;
