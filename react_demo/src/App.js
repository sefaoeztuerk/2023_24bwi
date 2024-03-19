import React, { useState, useEffect } from 'react';
import Header from './molecules/Header';
import Main from './organismen/Main';
import '../src/styles/Fussball.css';

const App = () => {
    const [spieltag, setSpieltag] = useState("1. Spieltag");
    const [tableData, formatTableData] = useState([]);
    const [upcomingGames, setUpcomingGames] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then((result) => result.json())
            .then((data) => formatTableData(data));


    };

    return (
        <div className="App">
            <Header />
            <Main
                tableData={tableData}

            />
        </div>
    );
}

export default App;



