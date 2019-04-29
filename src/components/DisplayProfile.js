import React from 'react';
import convertDate from '../functions/convertDate';

const DisplayProfile = ({ profile }) => {
  const prenomNom = profile.display_name.split(' ');
  return (
    <div className="DisplayProfil">
      <h1>PLAY IT LOUD</h1>
      <br />
      <br />
      <h2>Bienvenue {prenomNom[0]}</h2>


      <h3>Vos informations de compte</h3>
      <br />
      <p>Email : {profile.email}</p>
      <p>Pays : {profile.country}</p>
      <p>Numéro ID : {profile.id}</p>
      <p>Date de naissance : {convertDate(profile.birthdate)}</p>

    </div >
  );
};


export default DisplayProfile;
