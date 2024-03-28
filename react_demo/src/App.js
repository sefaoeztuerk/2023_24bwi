import React, { useState, useEffect } from 'react';
import Header from './Fussballwebseite/molecules/Header';
import Main from './Fussballwebseite/organismen/Main';
import '../src/styles/Fussball.css';
import UpGames from './Fussballwebseite/organismen/UpGames';

const App = () => {
    const [tableData, setTableData] = useState([]);


    useEffect(() => {
        loadData();
    });

    const loadData = () => {
        fetch(`https://api.openligadb.de/getbltable/bl1/2023`)
            .then((result) => result.json())
            .then((data) => setTableData(data));
    }

    return (
        <div className="App">
            <Header />
            <Main
                tableData={tableData} />
            <UpGames />
        </div>
    );
}

export default App;



