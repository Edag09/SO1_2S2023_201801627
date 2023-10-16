import React, { useEffect, useState } from 'react';
import socket from './sockets/Sockets';

function App() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    socket.on('artist', (data) => {
      setAlbums((prevAlbums) => [...prevAlbums, data]);
      console.log(albums);
    });

    return () => {
      socket.disconnect(); // Desconecta el socket cuando el componente se desmonta
    };
  }, []);

  return (
    <div>
      <h1>Álbumes de Música en Tiempo Real</h1>
      <ul>
        {albums.map((album, index) => (
          <li key={index}>
            {album.album} - {album.artist} ({album.year})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;