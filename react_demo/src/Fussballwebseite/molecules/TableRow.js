import React from 'react';

const TableRow = ({ data, index }) => {
    return (
        <div key={index} className="tableRow">
            <div className="leftPart">
                <div className="placement">{index + 1}</div>
                <div className="clubLogo">
                    {data && data.teamIconUrl && (
                        <img src={data.teamIconUrl} alt={data.teamName} />
                    )}
                </div>
                <div className="clubName">{data && data.teamName}</div>
            </div>
            <div className="middlePart">
                {data && (
                    <>
                        <div className="matchPlayed">{data.matches}</div>
                        <div className="win">{data.won}</div>
                        <div className="draw">{data.draw}</div>
                        <div className="lose">{data.lost}</div>
                        <div className="goalFor">{data.goals}</div>
                        <div className="goalAgainst">{data.opponentGoals}</div>
                        <div className="goalDif">{data.goalDiff}</div>
                    </>
                )}
            </div>
            <div className="rightPart">
                {data && <div className="points">{data.points}</div>}
            </div>
        </div>
    );
}

export default TableRow;

