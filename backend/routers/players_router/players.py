from fastapi import APIRouter,HTTPException
import requests
from . import players_utils

playersRoute = APIRouter()


@playersRoute.get('/getAllPlayers')
def root(teamName,year):
    try:
        players_data= requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json').json()['league']
        players_list = players_utils.fillterByteam(players_data,teamName)
        return players_list
    except:
        raise HTTPException(status_code=404, detail="Team stats does not exist")

@playersRoute.get('/getBirthDayPlayers')
def root(teamName,year):
    players_data= requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json').json()['league']
    players_list = players_utils.fillterByTeamNBday(players_data,teamName)
    return players_list

@playersRoute.get('/getPlayerStats')
def root(firstName,lastName):
    try:
        players_stats= requests.get(f'https://nba-players.herokuapp.com/players-stats/{lastName}/{firstName}')
        players_filltered_stats = players_utils.fillterStats(players_stats.json())
        return players_filltered_stats
    except:
        raise HTTPException(status_code=404, detail="Player stats does not exist")
