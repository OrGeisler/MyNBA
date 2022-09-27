class Renderer {
    playersRender(players:DataModule){
        const playersEle = $(".row")
        var scource = $("#players-template").html();
        var template = Handlebars.compile(scource);
        var newHTML = template({ players : players.playersList} );
        playersEle.empty().append(newHTML)
    }
}
