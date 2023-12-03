import { Link } from 'react-router-dom';

function AlbumThumbnail({ album }) {
  return (
    <div className="albumThumbnail">
      <h6>{album.title}</h6>
      <Link to={`/album/${album.id}`}>View</Link>
    </div>
  );
}

export default AlbumThumbnail;
