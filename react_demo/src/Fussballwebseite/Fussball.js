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

    const handleLeftButtonClick = () => {
        let spieltagNumber = extractNumberFromString(spieltag);

        if (spieltagNumber > 1) {
            spieltagNumber--;
            setSpieltag(`${spieltagNumber}. Spieltag`);
            fetchUpGames();
        } else {
            alert("Erster Spieltag ist schon gewählt");
        }
    };

    const handleRightButtonClick = () => {
        let spieltagNumber = extractNumberFromString(spieltag);

        if (spieltagNumber >= 1 && spieltagNumber < 38) {
            spieltagNumber++;
            setSpieltag(`${spieltagNumber}. Spieltag`);
            fetchUpGames();
        } else {
            alert("Letzter Spieltag ist schon gewählt");
        }
    };

    const extractNumberFromString = (str) => {
        const number = parseInt(str.match(/\d+/)[0]);
        return number;
    };


    return (
        <div>
            <header className="header">
                <div className="headline">Season 2023/24</div>
                <div className="logo">
                    <img src="bl1.png" alt="" />
                </div>
            </header>

            <main>
                <div className="main">
                    <div className="table">
                        <div className="tableHeader">
                            <div className="leftPart">
                                <div className="club">Club</div>
                            </div>
                            <div className="middlePart">
                                <div className="matchPlayed">mp</div>
                                <div className="win">w</div>
                                <div className="draw">d</div>
                                <div className="lose">l</div>
                                <div className="goalFor">gf</div>
                                <div className="goalAgainst">ga</div>
                                <div className="goalDif">gd</div>
                            </div>
                            <div className="rightPart">
                                <div className="points">Pts</div>
                            </div>
                        </div>

                        {tableData.map((element, index) => (
                            <div key={index} className="tableRow">
                                <div className="leftPart">
                                    <div className="placement">{index + 1}</div>
                                    <div className="clubLogo">
                                        <img src={element.teamIconUrl} alt={element.teamName} />
                                    </div>
                                    <div className="clubName">{element.teamName}</div>
                                </div>
                                <div className="middlePart">
                                    <div className="matchPlayed">{element.matches}</div>
                                    <div className="win">{element.won}</div>
                                    <div className="draw">{element.draw}</div>
                                    <div className="lose">{element.lost}</div>
                                    <div className="goalFor">{element.goals}</div>
                                    <div className="goalAgainst">{element.opponentGoals}</div>
                                    <div className="goalDif">{element.goalDiff}</div>
                                </div>
                                <div className="rightPart">
                                    <div className="points">{element.points}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="upcommingGames">
                        <div className="upGamesTopPart">
                            <div className="titel">Spiele</div>
                            <div className="week">
                                <div className="currentWeek" id="currentWeek">
                                    {spieltag}
                                </div>
                                <svg
                                    className="left"
                                    id="left"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="white"
                                    width="20px"
                                    onClick={handleLeftButtonClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                                <svg
                                    className="right"
                                    id="right"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="white"
                                    width="20px"
                                    onClick={handleRightButtonClick}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>

                        <div className="upGamesMainPart">
                            {upcomingGames.map((element, index) => (
                                <div key={index} className="mainPartItems">
                                    <div className="itemleftPart">
                                        {console.log(element)}
                                        <div className="date">{element.date}</div>
                                        <div className="time">{element.time}</div>
                                    </div>
                                    <div className="itemMidPart">
                                        <div className="team1">{element.team1.shortName}</div>
                                        <div className="team2">{element.team2.shortName}</div>
                                    </div>
                                    <div className="itemRightPart">
                                        {element.matchResults && element.matchResults.length > 0 && (
                                            <>
                                                <div className="team1Result">{element.matchResults[0].points}</div>
                                                <div className="team2Result">{element.matchResults[1].points}</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Fussball;

