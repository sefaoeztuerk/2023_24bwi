import React from 'react';
import Button from '../Fussballwebseite/atoms/Button';

const WeekSelector = ({ spieltag, handleLeftButtonClick, handleRightButtonClick }) => {
    return (
        <div className="week">
            <div className="currentWeek" id="currentWeek">
                {spieltag}
            </div>
            <Button onClick={handleLeftButtonClick}>{"<"}</Button>
            <Button onClick={handleRightButtonClick}>{">"}</Button>
        </div>
    );
}

export default WeekSelector;

