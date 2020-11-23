function homeRoot () {
    document.getElementById('root').innerHTML = 
    "<div class='mdl-grid'><span id='box-steps' class='mdl-layout-title mdl-cell mdl-cell--4-col' ></span></div>" +
    "<button onclick='boxSteps()' class='mdl-cell mdl-cell--4-col mdl-button mdl-js-button mdl-button--raised'>Create Box</button>" + 
    "<button onclick='holeSteps()' class='mdl-cell mdl-cell--4-col mdl-button mdl-js-button mdl-button--raised'>Extrude Holes</button>" +
    "<button onclick='goPass()' class='mdl-cell mdl-cell--4-col mdl-button mdl-js-button mdl-button--raised'>Sheet Metal</button>" +
    "<button onclick='goFail()' class='mdl-cell mdl-cell--4-col mdl-button mdl-js-button mdl-button--raised'>Allen Key</button>"
}

homeRoot();