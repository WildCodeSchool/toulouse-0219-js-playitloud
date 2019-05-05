import { host, clientId } from '../config';
function chekingTokenTimeStamp(timeStamp) {
  if (Date.now() - timeStamp > 3540000) {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenTimeStamp');
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${host}&scope=user-read-private%20user-read-email%20user-read-birthdate%20user-library-modify%20user-library-read%20playlist-read-private%20user-library-modify%20playlist-modify-private%20playlist-modify-public&response_type=token&state=123`);
  }
}

export default chekingTokenTimeStamp;
