import react from 'react';
import Button from '../Fussballwebseite/atoms/Button';

const UpcominggamesHead = ({ spieltag, handleLeftButtonClick, handleRightButtonClick }) => {
    return (
        <div className="upcommingGames">
            <div className="upGamesTopPart">
                <div className="titel">Spiele</div>
                <div className="week">
                    <Button onClick={handleLeftButtonClick}>{"<"}</Button>
                    <div className="currentWeek" id="currentWeek">
                        {spieltag}
                    </div>
                    <Button onClick={handleRightButtonClick}>{">"}</Button>
                </div>
            </div>
        </div>
    );
}

export default UpcominggamesHead;