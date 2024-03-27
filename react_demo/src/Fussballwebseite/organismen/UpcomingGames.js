import React, { useEffect, useState } from 'react';
import WeekSelector from '../molecules/WeekSelector';
import UpcomingGameItem from '../molecules/UpcomingGameItem';
import UpcominggamesHead from '../molecules/UpcominggamesHead';

const Games = ({ upcomingGames, spieltag, handleLeftButtonClick, handleRightButtonClick }) => {
    return (
        <div className="UpgamesHead">
            <UpcominggamesHead spieltag={spieltag} handleLeftButtonClick={handleLeftButtonClick} handleRightButtonClick={handleRightButtonClick} />
            <div className="upGamesMainPart" id="upGamesMainPart">
                <WeekSelector spieltag={spieltag} handleLeftButtonClick={handleLeftButtonClick} handleRightButtonClick={handleRightButtonClick} />
                {upcomingGames.map((game, index) => (
                    <UpcomingGameItem key={index} game={game} />
                ))}
            </div>
        </div>
    );
}

export default Games;



