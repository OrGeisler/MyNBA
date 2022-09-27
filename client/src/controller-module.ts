let dataModule = new DataModule()
let renderer: Renderer = new Renderer()


// $('.btn-default').on('click',function () {
//     const year = $('#year').val()
//     console.log(year)
// })

async function controller() {
    // const year = $('#year').val()
    // const team = $('#team').val()
    const year = '2020'
    const team = 'lakers'
    await dataModule.playersGeneratoer(year,team)
    renderer.playersRender(dataModule)
}

controller()