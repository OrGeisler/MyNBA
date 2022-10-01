class DataModule {
    playersList:Player[]
    
    constructor(){
        // this.playersList = {} as Player[];
        this.playersList = [] as Player[]
    }


    fillterUniqePlayers(){
        const uniuqeNames:string[] = []

        this.playersList = this.playersList.filter(player =>{
            const isDuplicate = uniuqeNames.includes(`${player.firstName}${player.lastName}`)

            if(!isDuplicate){
                uniuqeNames.push(`${player.firstName}${player.lastName}`)

                return true
            }

            return false
        })
    }

    async playersGeneratoer(year:string,teamName:string ,fillterBirthDay:boolean) {
        let response
        if (!fillterBirthDay) {
            response = await $.get(`/getAllPlayers?teamName=${teamName}&year=${year}`) 
        }
        else{
            response = await $.get(`/getBirthDayPlayers?teamName=${teamName}&year=${year}`)
        }
        this.playersList = response.map((value:any) => {
            let player : Player = new Player(
                value.firstName,
                value.lastName,
                `https://nba-players.herokuapp.com/players/${value.lastName}/${value.firstName}`,
                value.pos,
                value.jersey
            )
            return player
        })
        this.fillterUniqePlayers()
    }
}