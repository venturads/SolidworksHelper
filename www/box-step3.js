// hole-steps.js
function goPass3 ( ) {
    alert('Correct');
    document.getElementById('box-steps').style.color = 'lightgreen';
    setTimeout(homeRoot, 1000);
}

function boxSteps3 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='box-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >How do you finish your box?</span></div>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Exit sketch</button>" + 
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Sketch and close part</button>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Swept Boss/Base</button>" +
    "<button onclick='goPass3()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>While selecting sketch, click features extrude boss/base</button>"
}