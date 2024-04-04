import React from 'react'
import UpGameContainer from '../atoms/UpGameContainer'

const UpGameTable = ({ gamesData, currentSpieltag }) => {

    const filteredGames = gamesData.filter(game => {
        return game.group.groupOrderID === currentSpieltag;
    });

    return (
        <div className='grid grid-cols-4 gap-4 w-4/5 bg-gray-400 p-4 rounded-b-xl'>
            {filteredGames && filteredGames.length > 0 ? (
                filteredGames.map((game, index) => (
                    <UpGameContainer
                        key={index}
                        date={new Date(game.matchDateTime).toLocaleDateString()}
                        time={new Date(game.matchDateTime).toLocaleTimeString()}
                        team1={game.team1.shortName}
                        team2={game.team2.shortName}
                        team1Result={game.matchResults[0]?.pointsTeam1}
                        team2Result={game.matchResults[0]?.pointsTeam2}
                    />
                ))
            ) : (
                <div>Keine Spiele verfügbar für Spieltag {currentSpieltag}</div>
            )}
        </div>
    );
}

export default UpGameTable;
