from fastapi import APIRouter
import requests
from . import players_utils
from datetime import date


playersRoute = APIRouter()


@playersRoute.get('/getAllPlayers')
def root(teamName,year):
    players_data= requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json').json()['league']
    players_list = []
    for i in players_data:
        players = list(filter(lambda player:player['teamId'] == players_utils.teams_id[teamName], players_data[i]))
        players_list.extend(players)
    return players_list

@playersRoute.get('/getBirthDayPlayers')
def root(teamName,year):
    players_data= requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json').json()['league']
    players_list = []
    for i in players_data:
        players = list(filter(lambda player:player['teamId'] == players_utils.teams_id[teamName]
        and player['dateOfBirthUTC'] != ""
        and player['dateOfBirthUTC'].split("-")[1] == '{:02d}'.format(date.today().month)
        and player['dateOfBirthUTC'].split("-")[2] == '{:02d}'.format(date.today().day)
        , players_data[i]))
        players_list.extend(players)
    return players_list
