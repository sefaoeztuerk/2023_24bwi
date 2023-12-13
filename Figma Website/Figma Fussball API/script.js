var spieltag = "1. Spieltag";
const currentWeek = document.getElementById("currentWeek").innerHTML = spieltag;

const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        });
    });

    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillUpGames(data);
        });
    });
};

const fetchUpGames = () => {
    fetch("https://api.openligadb.de/getmatchdata/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillUpGames(data);
        });
    });
};

const fillTable = (data) => {
    let html = "";
    let placement = 1;

    data.forEach(element => {
        
        html += "<div class='tableRow'> \n" +
                    "<div class='leftPart'> \n" +
                        "<div class='placement'>" + placement + "</div> \n" +
                        "<div class='clubLogo'><img src='"+ element.teamIconUrl +"'></div> \n" +
                        "<div class='clubName'>" + element.teamName + "</div> \n" +
                    "</div> \n" +
                    
                    "<div class='middlePart'> \n" +
                        "<div class='matchPlayed'>" + element.matches + "</div> \n" +
                        "<div class='win'>" + element.won + "</div> \n" +
                        "<div class='draw'>" + element.draw + "</div> \n" +
                        "<div class='lose'>" + element.lost + "</div> \n" +
                        "<div class='goalFor'>" + element.goals + "</div> \n" +
                        "<div class='goalAgainst'>" + element.opponentGoals + "</div> \n" +
                        "<div class='goalDif'>" + element.goalDiff + "</div> \n" +
                    "</div> \n" +

                    "<div class='rightPart'> \n" +
                        "<div class='points'>" + element.points + "</div> \n" +
                    "</div> \n" +
                "</div>";
                
        placement ++;
    });

    document.getElementById("table").innerHTML += html;
};


const fillUpGames = (data) => {
    let html = "";
    document.getElementById("upGamesMainPart").innerHTML = html;

    data.forEach(element =>{
        if(element.group.groupName === spieltag){
            html += "<div class='mainPartItems'> \n" +
                        "<div class='itemleftPart'> \n" +
                            "<div class='date'>11.12.2023</div> \n" +
                            "<div class='time'>19:00</div> \n" +
                        "</div> \n" +
                        "<div class='itemMidPart'> \n" +
                            "<div class='team1'>" + element.team1.shortName + "</div> \n" +
                            "<div class='team2'>" + element.team2.shortName + "</div> \n" +
                        "</div> \n" +
                        "<div class='itemRightPart'> \n" +
                            "<div class='team1Result'>" + element.matchResults[1].pointsTeam1 + "</div> \n" +
                            "<div class='team2Result'>" + element.matchResults[1].pointsTeam2 + "</div> \n" +
                        "</div> \n" +
                    "</div>";
        }
    });

    document.getElementById("upGamesMainPart").innerHTML += html;
};


loadData();

document.getElementById("left").addEventListener("click", function(){
    let spieltagNumber = extractNumberFromString(spieltag);

    if(spieltagNumber > 1) {
        spieltagNumber--;
        spieltag = spieltagNumber + ". Spieltag";
        document.getElementById("currentWeek").innerHTML = spieltag;
        fetchUpGames();
    } else {
        alert("erster Spieltag ist schon gewählt");
    }
});

document.getElementById("right").addEventListener("click", function(){
    let spieltagNumber = extractNumberFromString(spieltag);

    if(spieltagNumber >= 1 && spieltagNumber < 38) {
        spieltagNumber++;
        spieltag = spieltagNumber + ". Spieltag";
        document.getElementById("currentWeek").innerHTML = spieltag;
        fetchUpGames();
    } else {
        alert("letzter Spieltag ist schon gewählt");
    }
});

function extractNumberFromString(str) {
    const number = parseInt(str.match(/\d+/)[0]);
    return number;
}
