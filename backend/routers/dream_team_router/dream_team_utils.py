from dataclasses import dataclass

dream_team =[]

@dataclass
class Player():
    id:str
    firstName:str
    lastName:str
    picture:str
    position:str


def addPlayerToDreamTeam(player):
    new_player = Player(player["id"],player['firstName'],
                player['lastName'],player['picture'],player['position'])
    if new_player not in dream_team:
        dream_team.append(new_player)
        
def removePlayerFromDreamTream(id):
    player_to_delete = [player for player in dream_team if player.id == id][0]
    dream_team.remove(player_to_delete)
    
