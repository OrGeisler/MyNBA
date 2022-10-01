from fastapi import FastAPI
import uvicorn
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from routers.players_router.players import playersRoute
from routers.dream_team_router.deam_team import dreamTeamRoute



app = FastAPI()

app.mount("/client/build", StaticFiles(directory="./client/build"), name="build")
app.include_router(playersRoute)
app.include_router(dreamTeamRoute)


@app.get('/sanity')
def root():
    return {"message":"Server is up and running"}


@app.get('/')
def root():
    return FileResponse('./client/build/index.html')

if __name__ == "__main__":
    uvicorn.run("server:app",host="0.0.0.0", port=8000,reload=True)