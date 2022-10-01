class DataModule {
    playersList:Player[]
    dreamTeamList:Player[]
    
    constructor(){
        this.playersList = [] as Player[],
        this.dreamTeamList = [] as Player[]
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

    findPlayerById(id:string){
        const player = this.playersList.find(player => player.id == id)
        console.log(player)
        return player
    }

    addToDreamTeam(id:string){
        const player = this.findPlayerById(id)
        $.post('/dreamTeam/add',JSON.stringify(player))
    }

    removeFromDreamTeam(id:string){
        $.ajax({
            url: `/getDreamTeam/remove/${id}`,
            type: 'DELETE'
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
                value.personId,
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

    async  getDreamTeam() {
        const response = await $.get('/dreamTeam/get')
        this.dreamTeamList = response.map((value:any) => {
            let player : Player = new Player(
                value.id,
                value.firstName,
                value.lastName,
                `https://nba-players.herokuapp.com/players/${value.lastName}/${value.firstName}`,
                value.pos,
                value.jersey
            )
            return player
        }   
        )
    
    }
        
}