function homeRoot () {
    document.getElementById('root').innerHTML = 
    
    "<div class='mdl-grid'>" +
    "<div class='mdl-layout-title mdl-cell mdl-cell--4-col' >" +
    '<div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__title mdl-card--expand"><h2 class="mdl-card__title-text"></h2></div><div class="mdl-card__supporting-text">Box Extrude</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="boxSteps()" >Start</a></div></div></div>' + 
    "<div class='mdl-layout-title mdl-cell mdl-cell--4-col' >" +
    '<div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__title_box mdl-card--expand"><h2 class="mdl-card__title-text"></h2></div><div class="mdl-card__supporting-text">Holes Extrude</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="holeSteps()" >Start</a></div></div></div>' +
    '</div>' +
    // 2nd row allen key
    "<div class='mdl-grid'>" +
    "<div class='mdl-layout-title mdl-cell mdl-cell--4-col' >" +
    '<div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__title_allen mdl-card--expand"><h2 class="mdl-card__title-text"></h2></div><div class="mdl-card__supporting-text">Allen Key</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="allenKey()" >Start</a></div></div></div>' + 
    "<div class='mdl-layout-title mdl-cell mdl-cell--4-col' >" +
    '<div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__title_sheetmetal mdl-card--expand"><h2 class="mdl-card__title-text"></h2></div><div class="mdl-card__supporting-text">Sheetmetal Tool</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="sheetMetal()" >Start</a></div></div></div>' +
    '</div>'
}

homeRoot();