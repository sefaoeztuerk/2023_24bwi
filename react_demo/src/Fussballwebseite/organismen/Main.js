import React, { useState, useEffect } from 'react';
import Table from './Table';
import UpGames from './UpGames';



const Main = ({ tableData, gamesData, currentSpieltag, loadNextMatchday, loadPreviousMatchday }) => {
    return (
        <div className="main">
            <Table tableData={tableData} />

            <UpGames gamesData={gamesData}
                currentSpieltag={currentSpieltag}
                loadNextMatchday={loadNextMatchday}
                loadPreviousMatchday={loadPreviousMatchday}
            />
        </div>
    );
}

export default Main;
