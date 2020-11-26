// hole-steps.js
function holePass2 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(holeSteps3, 1000);
}

// document.getElementById('box-steps3').addEventListener('click',  boxSteps3);

function holeSteps2 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >How do you constrain your sketch?</span></div>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Exit sketch</button>" + 
    "<button onclick='holePass2()' id='hole-steps3' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Smart Dimiension</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Save part</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Close solidworks</button>"
}