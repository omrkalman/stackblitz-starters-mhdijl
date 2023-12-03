import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Album() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(response => response.json())
      .then(setPhotos)
  }, [])
  return (
    <div className="album">
      {photos.map(photo => (
        <article className="photo">
          <img className="photoImg" src={photo.url} alt={`photo ${photo.id}`} />
          <p className="photoTitle">{photo.title}</p>
        </article>
      ))}
      
    </div>
  );
}

export default Album;
