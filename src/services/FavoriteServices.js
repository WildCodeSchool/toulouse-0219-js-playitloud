const BASE_SPOTIFY_URL = 'https://api.spotify.com/v1/';

function addToFavorite(id) {
  return fetch(`${BASE_SPOTIFY_URL}me/albums?ids=${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'PUT'
  })
    .then(response => response.text());
}

function removeFromFavorite(id) {
  return fetch(`${BASE_SPOTIFY_URL}me/albums?ids=${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    },
    method: 'DELETE'
  })
    .then(response => response.text());
}

function getFavorite() {
  return fetch(`${BASE_SPOTIFY_URL}me/albums`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(response => response.json());
}

function getFavoritePlaylist() {
  return fetch(`${BASE_SPOTIFY_URL}me/playlists`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  })
    .then(response => response.json());
}

export { addToFavorite, removeFromFavorite, getFavorite, getFavoritePlaylist };
