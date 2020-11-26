// hole-steps.js
function holePass3 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(holeSteps4, 1000);
}

function holeSteps3 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >You need to constrain your sketch.</span></div>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select rectangle and extrude cut</button>" + 
    "<button onclick='holePass3()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click circle and Smart Dimension</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>File new icon</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on rectangle</button>"
}