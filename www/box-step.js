// box-steps.js
function goFail ( ) {
    alert('fail');
    document.getElementById('box-steps').style.color = 'red';
}

function goPass ( ) {
    alert('pass');
    document.getElementById('box-steps').style.color = 'lightgreen';
    setTimeout(holeSteps, 1000);
    
}

function img () {

}

function boxSteps () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='box-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >How do you start a sketch?</span></div>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>file new icon</button>" + 
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on extrude</button>" +
    "<button onclick='goPass()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Top Plane and click Sketch</button>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on rectangle</button>"
}