// hole-steps.js
function holePass4 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(homeRoot, 1000);
}

function holeSteps4 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >Make a through hole?</span></div>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select rectangle and extrude cut</button>" + 
    "<button onclick='holePass4()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select sketch and extrude cut</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>File new icon</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on rectangle</button>"
}