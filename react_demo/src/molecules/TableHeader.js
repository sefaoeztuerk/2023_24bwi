import React from 'react';

const TableHeader = () => {
    return (
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
    );
}

export default TableHeader;
