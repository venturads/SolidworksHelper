// hole-steps.js
// function holeFail ( ) {
//     alert('Incorrect');
//     document.getElementById('hole-steps').style.color = 'red';
// }

function sheetmetalPass ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(sheetMetal2, 1000);
}

function sheetMetal () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >First step to making a Sheetmetal part?</span></div>" +
    "<button onclick='sheetmetalPass()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on front Plane and click Sketch</button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on extrude</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>File new icon</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on rectangle</button>"
}

function sheetmetalPass2 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(sheetMetal3, 1000);
}

function sheetMetal2 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >First shape to start sheetmetal?</span></div>" +
    "<button onclick='sheetmetalPass2()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select Top Plane and sketch a 'L' shape</button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on 'L' shape feature extrude</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Load Allen key file</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select sketch and draw a 'L' shape</button>"
}

function sheetmetalPass3 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(sheetMetal4, 1000);
}

function sheetMetal3 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >Make sketch to sheetmetal part</span></div>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Top Plane and click Sketch </button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select Front Plane and sketch polygon at origin</button>" +
    "<button onclick='sheetmetalPass3()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>select sketch and click Sheetmetal Insert Bends</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>click on sketch and close part</button>"
}

function sheetmetalPass4 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(homeRoot, 1000);
}

function sheetMetal4 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >Flatten your sheetmetal part?</span></div>" +
    "<button onclick='sheetmetalPass4()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>click Sheetmetal Flatten</button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on extrude</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>File new icon</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on rectangle</button>"
}

function sheetmetalPass5 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(homeRoot, 1000);
}

function sheetMetal5 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >Completing Allen key with both sketches?</span></div>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select sketch and click complete Allen key feature</button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on extrude</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Features swept boss select sketch2 for profile and sketch1 for path</button>" +
    "<button onclick='sheetmetalPass5()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Features swept boss select sketch1 for profile and sketch2 for path</button>"
}