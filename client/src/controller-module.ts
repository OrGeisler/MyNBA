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
    console.log(playerId)
    dataModule.addToDreamTeam(playerId)

})

$('.players-container').on('click','.dream-team-remove',async function(){
    const playerId = $(this).closest('.card').data().id
    console.log(playerId)
    dataModule.removeFromDreamTeam(playerId)
    await dataModule.getDreamTeam()
    renderer.dreamTeamRender(dataModule.dreamTeamList)
})


$('.show-dream-team').on('click',async function(){
    await dataModule.getDreamTeam()
    renderer.dreamTeamRender(dataModule.dreamTeamList)
})