import React from 'react'

const UpGameContainer = ({ date, time, team1, team2, team1Result, team2Result }) => {
    return (
        <div className='flex justify-between bg-red-100 text-black font-semibold p-3'>
            <div>
                <div>{date}</div>
                <div>{time}</div>
            </div>
            <div>
                <div>{team1}</div>
                <div>{team2}</div>
            </div>
            <div>
                <div>{team1Result}</div>
                <div>{team2Result}</div>
            </div>
        </div>
    );
}

export default UpGameContainer;
