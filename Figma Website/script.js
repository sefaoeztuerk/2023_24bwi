const loadData = () => {
    fetch("https://api.openligadb.de/getbltable/bl1/2023").then((result) => {
        result.json().then((data) => {
            console.log(data);
            fillTable(data);
        });
    });
};

const fillTable = (data) => {
    let html = "<div class='heading'></div>"; // Clear the heading div
    data.forEach((element, index) => {
        const bgColorClass = index % 2 === 0 ? 'darkerBack' : 'lighterBack';
        html += `
            <div class="clubs-content ${bgColorClass}">
                <div class="placement">${index + 1}</div>
                <div class="club-info">
                    <img src="${element.teamLogo}" alt="${element.teamName} Logo">
       
                 <div class="name">${element.teamName}</div>
                </div>
            </div>
            <div class="points-content ${bgColorClass}">
                <div class="points-content-item">${element.matches}</div>
                <div class="points-content-item">${element.wins}</div>
                <div class="points-content-item">${element.draws}</div>
                <div class="points-content-item">${element.losses}</div>
                <div class="points-content-item">${element.goalsFor}</div>
                <div class="points-content-item">${element.goalsAgainst}</div>
                <div class="points-content-item">${element.goalDifference}</div>
                <div class="points-content-item">${element.points}</div>
            </div>
        `;
    });
    document.getElementById("teams-container").innerHTML = html;
};

loadData();



