// hole-steps.js
function goPass2 ( ) {
    alert('Correct');
    document.getElementById('box-steps').style.color = 'lightgreen';
    setTimeout(boxSteps3, 1000);
}

// document.getElementById('box-steps3').addEventListener('click',  boxSteps3);

function boxSteps2 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='box-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >How do you constrain your sketch?</span></div>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Exit sketch</button>" + 
    "<button onclick='goPass2()' id='box-steps3' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Smart Dimiension</button>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Save part</button>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Close solidworks</button>"
}