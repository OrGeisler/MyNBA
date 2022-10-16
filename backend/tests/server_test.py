
import requests

def test_get_all_players():
    response = requests.get(f'http://localhost:8000/getAllPlayers?teamName=lakers&year=2018')
    assert isinstance(response,requests.models.Response)==True
    assert response.status_code==200

def test_get_dream_team():
    response = requests.get(f'http://localhost:8000/dreamTeam/get')
    assert isinstance(response,requests.models.Response)==True
    assert response.status_code==200

def test_get_player_stats():
    response = requests.get(f'http://localhost:8000/getPlayerStats?firstName=lebron&lastName=james')
    assert isinstance(response,requests.models.Response)==True
    assert response.status_code==200

