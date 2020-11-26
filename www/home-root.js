function homeRoot () {
    document.getElementById('root').innerHTML = 
    
    "<div class='mdl-grid'><div class='mdl-layout-title mdl-cell mdl-cell--4-col' >" +

    '<div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__title mdl-card--expand"><h2 class="mdl-card__title-text">Box lesson</h2></div><div class="mdl-card__supporting-text">Create a solid box.</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="boxSteps()" >Start</a></div></div></div>' + 

    "<div class='mdl-layout-title mdl-cell mdl-cell--4-col' >" +
    
    '<div class="demo-card-square mdl-card mdl-shadow--2dp"><div class="mdl-card__title_box mdl-card--expand"><h2 class="mdl-card__title-text">Holes lesson</h2></div><div class="mdl-card__supporting-text">Extrud holes.</div><div class="mdl-card__actions mdl-card--border"><a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onclick="holeSteps()" >Start</a></div></div></div></div>' 
}

homeRoot();