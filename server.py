from fastapi import FastAPI
from fastapi import Request , Response , status
import uvicorn
import requests
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app = FastAPI()
app.mount("/static", StaticFiles(directory="./static"), name="static")

teams_id = {
    "lakers": "1610612747",
    "warriors": "1610612744",
    "heat": "1610612748",
    "suns": "1610612756"
}

@app.get('/sanity')
def root():
    return {"message":"Server is up and running"}


@app.get('/')
def root():
    return FileResponse('./static/index.html')

@app.get('/{teamName}/{year}')
def root(teamName,year):
    players_data= requests.get(f'http://data.nba.net/10s/prod/v1/{year}/players.json').json()['league']
    players_list = []
    for i in players_data:
        players = list(filter(lambda player:player['teamId'] == teams_id[teamName], players_data[i]))
        players_list.extend(players)
    return players_list


if __name__ == "__main__":
    uvicorn.run("server:app", port=8000,reload=True)