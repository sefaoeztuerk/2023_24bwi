import React from 'react'
import UpGamesHeader from '../molecules/UpGamesHeader'
import UpGameTable from '../molecules/UpGameTable'

const UpGames = ({ gamesData, currentSpieltag, loadNextMatchday, loadPreviousMatchday }) => {
    return (
        <div className='p-8'>
            <UpGamesHeader
                currentSpieltag={currentSpieltag}
                loadNextMatchday={loadNextMatchday}
                loadPreviousMatchday={loadPreviousMatchday} />
            <UpGameTable gamesData={gamesData}
                currentSpieltag={currentSpieltag}
            />
        </div>
    );
}

export default UpGames;
