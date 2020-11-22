// hole-steps.js
function goFail ( ) {
    alert('fail');
}

function goPass ( ) {
    alert('pass');
}

function holeSteps () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span class='mdl-layout-title mdl-cell mdl-cell--12-col' >How do you start a hole?</span></div>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>file new icon</button>" + 
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on extrude</button>" +
    "<button onclick='goPass()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Top Plane and click Sketch</button>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on rectangle</button>"
}