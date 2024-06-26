import React from 'react'
import Weekday from '../atoms/Weekday.js'

const UpGamesHeader = ({ currentSpieltag, loadNextMatchday, loadPreviousMatchday }) => {
    const formattedSpieltag = `${currentSpieltag}.Spieltag`;

    return (
        <div className='flex justify-between w-4/5 text-white bg-gray-400 p-3 pt-5 rounded-t-xl '>
            <div className='text-lg font-bold text-3xl'>Spiele </div>
            <Weekday
                formattedSpieltag={formattedSpieltag}
                loadNextMatchday={loadNextMatchday}
                loadPreviousMatchday={loadPreviousMatchday}
            />

        </div>
    );
}

export default UpGamesHeader;

