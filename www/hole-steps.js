// hole-steps.js
function holeFail ( ) {
    alert('Incorrect');
    document.getElementById('hole-steps').style.color = 'red';
}

function holePass ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(holeSteps2, 1000);
}

function holeSteps () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >How do you start a hole?</span></div>" +
    "<button onclick='holePass()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Top Plane and click Sketch </button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on extrude</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>File new icon</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on rectangle</button>"
}