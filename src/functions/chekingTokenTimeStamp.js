function chekingTokenTimeStamp(timeStamp) {
  if (Date.now() - timeStamp > 3540000) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenTimeStamp');
    window.location.replace('https://accounts.spotify.com/authorize?client_id=136da030d9704f5e9314b475d1a79537&redirect_uri=http://localhost:3000&scope=user-read-private%20user-read-email%20user-read-birthdate&response_type=token&state=123');
  }
}

export default chekingTokenTimeStamp;
