class DataModule {
    playersList:Player[]
    
    constructor(){
        // this.playersList = {} as Player[];
        this.playersList = [] as Player[]
    }

    async playersGeneratoer(year:string,team:string) {
        const response = await $.get(`/${team}/${year}`) 
        this.playersList = response.map((value:any) => {
            let player : Player = new Player(
                value.firstName,
                value.lastName,
                `https://nba-players.herokuapp.com/players/${value.lastName}/${value.firstName}`,
                value.pos,
                value.jersey
            )
            return player
        })}
    }


// const test1 : DataModule = new DataModule()
// test1.playersGeneratoer().then(() =>{
//     console.log(test1.playersList)
// })
