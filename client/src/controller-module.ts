let dataModule = new DataModule()
let renderer: Renderer = new Renderer()


$('.show-team').on('click',async function () {
    const year:any= $('#year').val()
    const teamName:any = $('#team').val()
    const fillterBirthDay : boolean = $('.form-check-input').is(":checked")
    await dataModule.playersGeneratoer(year,teamName,fillterBirthDay)
    renderer.playersRender(dataModule.playersList)
})

$('.players-container').on('click','.dream-team-add',function(){
    const playerId = $(this).closest('.card').data().id
    dataModule.addToDreamTeam(playerId)

})

$('.players-container').on('mouseenter' ,'.show-stats', async function(){
    const playerId = $(this).closest('.card').data().id
    try{
        const stats:any = await dataModule.getStats(playerId)
        $(this).popover({title: "<h3><strong>Stats</strong><h3>", 
                        content: `<strong>Games Played:</strong> ${stats.games_played} <br>
                                <strong>Points Per Game:</strong> ${stats.points_per_game} <br>
                                <strong>Minutes Per Game:</strong> ${stats.minutes_per_game} <br>
                                <strong>Three Point Made Per Game:</strong> ${stats.three_point_made_per_game} <br>
                                <strong>Blocks Per Game:</strong> ${stats.blocks_per_game} <br>`,html:true})}
    catch(err:any){
                    $(this).popover({title: "<h3><strong>Stats</strong><h3>", 
                    content: `<strong>${err.status} ${err.statusText}</strong> <br>${err.responseJSON.detail}`,html:true})
    }

  });

$('.players-container').on('click','.dream-team-remove',async function(){
    const playerId = $(this).closest('.card').data().id
    dataModule.removeFromDreamTeam(playerId)
    await dataModule.getDreamTeam()
    renderer.dreamTeamRender(dataModule.dreamTeamList)
})

$('.show-dream-team').on('click',async function(){
    await dataModule.getDreamTeam()
    renderer.dreamTeamRender(dataModule.dreamTeamList)
})