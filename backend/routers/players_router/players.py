from fastapi import APIRouter
import requests
from . import players_utils


playersRoute = APIRouter()


@playersRoute.get('/getAllPlayers')
def root(teamName,year):
    players_data= requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json').json()['league']
    players_list = players_utils.fillterByteam(players_data,teamName)
    return players_list

@playersRoute.get('/getBirthDayPlayers')
def root(teamName,year):
    players_data= requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json').json()['league']
    players_list = players_utils.fillterByTeamNBday(players_data,teamName)
    return players_list
