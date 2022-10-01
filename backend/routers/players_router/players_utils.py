from datetime import date


teams_id = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756",
    "indiana" : "1610612754"
}

def fillterByteam (players_data,teamName):
    players_list = []
    for i in players_data:
        players = list(filter(lambda player:player['teamId'] == teams_id[teamName], players_data[i]))
        players_list.extend(players)
    return players_list

def fillterByTeamNBday(players_data,teamName):
    players_list = []
    for i in players_data:
        players = list(filter(lambda player:player['teamId'] == teams_id[teamName]
        and player['dateOfBirthUTC'] != ""
        and player['dateOfBirthUTC'].split("-")[1] == '{:02d}'.format(date.today().month)
        and player['dateOfBirthUTC'].split("-")[2] == '{:02d}'.format(date.today().day)
        , players_data[i]))
        players_list.extend(players)
    return players_list