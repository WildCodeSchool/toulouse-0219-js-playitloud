const albums = spotifyResults.albums.items.map(item => {
  const name = item.name;
  const id = item.id;
  const image = item.images[0].url;
  const artist = item.artists[0].name;
  return {
    name, id, image, artist
  };
});
