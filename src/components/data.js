import info from '../albums.json';

const data = info.albums.items.map(item => {
  const name = item.name;
  const id = item.id;
  const image = item.images[1].url;
  const artist = item.artists[0].name;
  return { name, id, image, artist }
})

export default data;