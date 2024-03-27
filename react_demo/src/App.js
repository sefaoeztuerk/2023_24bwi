import React, { useState, useEffect } from 'react';
import Header from './molecules/Header';
import Main from './organismen/Main';
import '../src/styles/Fussball.css';

const App = () => {
    const [tableData, setTableData] = useState([]);
    const [upcomingGames, setUpcomingGames] = useState([]);
    const [currentSpieltag, setCurrentSpieltag] = useState(1);

    useEffect(() => {
        loadData();
    }, [currentSpieltag]);

    const loadData = () => {
        fetch(`https://api.openligadb.de/getbltable/bl1/2023`)
            .then((result) => result.json())
            .then((data) => setTableData(data));

        fetch(`https://api.openligadb.de/getmatchdata/bl1/2023`)
            .then((result) => result.json())
            .then((data) => setUpcomingGames(data));
    }

    const handleLeftButtonClick = () => {
        if (currentSpieltag > 1) {
            setCurrentSpieltag(currentSpieltag - 1);
        }
    };

    const handleRightButtonClick = () => {
        if (currentSpieltag < 36) {
            setCurrentSpieltag(currentSpieltag + 1);
        }
    };

    return (
        <div className="App">
            <Header />
            <Main
                tableData={tableData}
                upcomingGames={upcomingGames}
                currentSpieltag={currentSpieltag}
                handleLeftButtonClick={handleLeftButtonClick}
                handleRightButtonClick={handleRightButtonClick}
            />
        </div>
    );
}

export default App;



