from fastapi import APIRouter
import requests
from . import dream_team_utils
from fastapi import Request, Response

dreamTeamRoute = APIRouter()

@dreamTeamRoute.get('/dreamTeam/get')
def root():
    return dream_team_utils.dream_team

@dreamTeamRoute.post('/dreamTeam/add')
async def root(request: Request):
    req = await request.json()
    dream_team_utils.addPlayerToDreamTeam(req)
    print(dream_team_utils.dream_team)

@dreamTeamRoute.delete('/getDreamTeam/remove/{id}')
def root(id):
    dream_team_utils.removePlayerFromDreamTream(id)
    print(dream_team_utils.dream_team)