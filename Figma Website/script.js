const showStandings = () => {
    window.location.href = 'standings.html';
}


const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data)
            buttonClicked(data)
        });
    });
};

const fillTable = (data) => {
    let html ="";
    let count =0;
    let teamID = 1;

    data.forEach((element) => {
        if (count % 2 === 0){
            html += "<button class='darkerBack' id='teamID'>" + element.teamName + "</button>";
            count++;
            teamID++;
        } else {
            html += "<button class='lighterBack' id='teamID'>" + element.teamName + "</button>";
            count++;
            teamID++;
        }
    });
    document.getElementById("teams").innerHTML = html;
}

loadData();