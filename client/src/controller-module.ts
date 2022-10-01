let dataModule = new DataModule()
let renderer: Renderer = new Renderer()


$('.btn-primary').on('click',async function () {
    const year:any= $('#year').val()
    const teamName:any = $('#team').val()
    const fillterBirthDay : boolean = $('.form-check-input').is(":checked")
    await dataModule.playersGeneratoer(year,teamName,fillterBirthDay)
    renderer.playersRender(dataModule)
})