import { useEffect, useState } from 'react';
import AlbumThumbnail from './AlbumThumbnail';
import './style.css';

function User({ user }) {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
      .then((response) => response.json())
      .then(setAlbums);
  }, []);

  return (
    <div className="user">
      <h5>{user.name}</h5>
      {albums.map((album) => (
        <AlbumThumbnail key={album.id} album={album} />
      ))}
    </div>
  );
}

export default User;
