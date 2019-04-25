function splitName(name) {
  const prenomNom = name.split(' ');
  const prenom = prenomNom[0]
  return prenom;
}

export default splitName;
