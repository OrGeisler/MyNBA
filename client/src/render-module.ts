class Renderer {
    playersRender(players:Player[]){
        const playersEle = $(".players-container")
        var scource = $("#players-template").html();
        var template = Handlebars.compile(scource);
        var newHTML = template({ players : players} );
        playersEle.empty().append(newHTML)
    }
    dreamTeamRender(players:Player[]){
        const dreamTeamEle = $(".players-container")
        var scource = $("#dreamteam-template").html();
        var template = Handlebars.compile(scource);
        var newHTML = template({ players : players} );
        dreamTeamEle.empty().append(newHTML)
    }
}
