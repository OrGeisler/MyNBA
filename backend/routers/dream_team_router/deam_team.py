from fastapi import APIRouter,status
import requests
from . import dream_team_utils
from fastapi import Request, Response

dreamTeamRoute = APIRouter()

@dreamTeamRoute.get('/dreamTeam/get')
def root():
    return dream_team_utils.dream_team

@dreamTeamRoute.post('/dreamTeam/add' , status_code=status.HTTP_201_CREATED)
async def root(request: Request):
    req = await request.json()
    dream_team_utils.addPlayerToDreamTeam(req)

@dreamTeamRoute.delete('/getDreamTeam/remove/{id}' , status_code=status.HTTP_204_NO_CONTENT)
def root(id):
    dream_team_utils.removePlayerFromDreamTream(id)
