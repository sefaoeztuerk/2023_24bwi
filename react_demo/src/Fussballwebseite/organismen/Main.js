import React, { useState, useEffect } from 'react';
import Table from './Table';
import UpcomingGames from './UpcomingGames';
import WeekSelector from '../molecules/WeekSelector';

const Main = ({ tableData, upcomingGames, currentSpieltag, handleLeftButtonClick, handleRightButtonClick }) => {
    return (
        <div className="main">
            <Table tableData={tableData} />
            <WeekSelector
                spieltag={currentSpieltag} // Übergeben des aktuellen Spieltags an WeekSelector
                handleLeftButtonClick={handleLeftButtonClick}
                handleRightButtonClick={handleRightButtonClick}
            />
            <UpcomingGames
                upcomingGames={upcomingGames}
                handleLeftButtonClick={handleLeftButtonClick}
                handleRightButtonClick={handleRightButtonClick}
            />
        </div>
    );
}

export default Main;
