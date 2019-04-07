import React from 'react';

const DisplayProfile = ({ display_name, email }) => {
  return (
    <div className="DisplayProfil">
      <h1>Welcome {display_name}</h1>
      <p>Email : {email}</p>
    </div>
  );
};


export default DisplayProfile;