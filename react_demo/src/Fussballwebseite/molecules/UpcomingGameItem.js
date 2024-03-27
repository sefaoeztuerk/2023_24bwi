import React from 'react';

const UpcomingGameItem = ({ game }) => {
    const { Team1, Team2, MatchDateTime, MatchResults } = game;

    if (!Team1 || !Team2 || !MatchResults || MatchResults.length === 0 || !MatchResults[0]) {
        return null;
    }

    return (
        <div className="mainPartItems">
            <div className="itemleftPart">
                <div className="date">{new Date(MatchDateTime).toLocaleDateString()}</div>
                <div className="time">{new Date(MatchDateTime).toLocaleTimeString()}</div>
            </div>
            <div className="itemMidPart">
                <div className="team1">{Team1.TeamName}</div>
                <div className="team2">{Team2.TeamName}</div>
            </div>
            <div className="itemRightPart">
                <div className="team1Result">{MatchResults[0].PointsTeam1}</div>
                <div className="team2Result">{MatchResults[0].PointsTeam2}</div>
            </div>
        </div>
    );
}

export default UpcomingGameItem;



