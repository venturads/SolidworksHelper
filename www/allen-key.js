// hole-steps.js
// function holeFail ( ) {
//     alert('Incorrect');
//     document.getElementById('hole-steps').style.color = 'red';
// }

function allenPass ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(allenKey2, 1000);
}

function allenKey () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >How to start a Allen Key?</span></div>" +
    "<button onclick='allenPass()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Top Plane and click Sketch </button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on extrude</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>File new icon</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on rectangle</button>"
}

function allenPass2 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(allenKey3, 1000);
}

function allenKey2 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >First shape to make Allen key?</span></div>" +
    "<button onclick='allenPass2()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select Top Plane and sketch a 'L' shape</button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on 'L' shape feature extrude</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Load Allen key file</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Tool menu bar</button>"
}

function allenPass3 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(allenKey4, 1000);
}

function allenKey3 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >Second Allen key shape?</span></div>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on Top Plane and click Sketch </button>" + 
    "<button onclick='allenPass3()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select Front Plane and sketch polygon at origin</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select second allen key shape</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>click on sketch and close part</button>"
}

function allenPass4 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(allenKey5, 1000);
}

function allenKey4 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >How to Constrain your sketch?</span></div>" +
    "<button onclick='allenPass4()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select sketch and click on smart dimension</button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on extrude</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>File new icon</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on rectangle</button>"
}

function allenPass5 ( ) {
    alert('Correct');
    document.getElementById('hole-steps').style.color = 'lightgreen';
    setTimeout(homeRoot, 1000);
}

function allenKey5 () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='hole-steps' class='mdl-layout-title mdl-cell mdl-cell--12-col' >Completing Allen key with both sketches?</span></div>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Select sketch and click complete Allen key feature</button>" + 
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Click on extrude</button>" +
    "<button onclick='holeFail()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Features swept boss select sketch2 for profile and sketch1 for path</button>" +
    "<button onclick='allenPass5()' class='mdl-cell mdl-cell--12-col mdl-button mdl-js-button mdl-button--raised'>Features swept boss select sketch1 for profile and sketch2 for path</button>"
}