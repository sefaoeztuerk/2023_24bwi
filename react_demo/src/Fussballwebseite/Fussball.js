import React, { useState, useEffect } from 'react';
import '../styles/Fussball.css';

const Fussball = () => {
    const [spieltag, setSpieltag] = useState("1. Spieltag");
    const [tableData, setTableData] = useState([]);
    const [upcomingGames, setUpcomingGames] = useState([]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = () => {
        fetch("https://api.openligadb.de/getbltable/bl1/2023")
            .then((result) => result.json())
            .then((data) => setTableData(data));

        fetch("https://api.openligadb.de/getmatchdata/bl1/2023")
            .then((result) => result.json())
            .then((data) => fillUpGames(data));
    };

    const fetchUpGames = () => {
        fetch("https://api.openligadb.de/getmatchdata/bl1/2023")
            .then((result) => result.json())
            .then((data) => fillUpGames(data));
    };

    const fillUpGames = (data) => {
        const upcomingGamesData = data.filter(
            (element) => element.group.groupName === spieltag
        );

        setUpcomingGames(upcomingGamesData);
    };


}

export default Fussball;
