import React, { useState, useEffect } from 'react';
import Header from './Fussballwebseite/molecules/Header';
import Main from './Fussballwebseite/organismen/Main';
import '../src/styles/Fussball.css';


const App = () => {
    const [tableData, setTableData] = useState([]);
    const [gamesData, setGamesData] = useState([]);
    const [currentSpieltag, setCurrentSpieltag] = useState(1);

    useEffect(() => {
        loadTableData();
        loadGamesData();
    }, []);

    useEffect(() => {
        const currentDate = new Date();


        let currentSpieltag = 1;

        for (let i = 0; i < gamesData.length; i++) {
            const matchDate = new Date(gamesData[i].matchDateTime);
            const endDate = new Date(matchDate);
            endDate.setDate(matchDate.getDate() + 2);


            if (currentDate >= matchDate && currentDate <= endDate) {

                currentSpieltag = gamesData[i].group.groupOrderID;
                break;
            }
        }

        setCurrentSpieltag(currentSpieltag);
    }, [gamesData]);


    const loadTableData = () => {
        fetch(`https://api.openligadb.de/getbltable/bl1/2023`)
            .then((result) => result.json())
            .then((data) => setTableData(data));
    }

    const loadGamesData = () => {
        fetch(`https://api.openligadb.de/getmatchdata/bl1/2023`)
            .then((result) => result.json())
            .then((data) => setGamesData(data));
    }

    const loadPreviousMatchday = () => {
        if (currentSpieltag > 1) {
            setCurrentSpieltag(currentSpieltag - 1);
        }
    };

    const loadNextMatchday = () => {
        if (currentSpieltag < 36) {
            setCurrentSpieltag(currentSpieltag + 1);
        }
    };

    return (
        <div className="App">
            <Header />
            <Main tableData={tableData}
                gamesData={gamesData}
                currentSpieltag={currentSpieltag}
                loadNextMatchday={loadNextMatchday}
                loadPreviousMatchday={loadPreviousMatchday}
            />

        </div>
    );
}

export default App;



