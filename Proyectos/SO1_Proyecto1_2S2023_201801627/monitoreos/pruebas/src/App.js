import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState({
    total: 0,
    free: 0,
    used: 0,
  });

  useEffect(() => {
    // Realiza una solicitud GET utilizando fetch
    fetch('http://localhost:4000/ram')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json(); // Analiza el JSON de la respuesta
      })
      .then((json) => {
        setData(json); // Almacena los datos en el estado
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error.message);
      });
  }, []);

  return (
    <div>
      <h1>Información del JSON</h1>
      <div>
        <p><strong>Total:</strong> {data.total}</p>
        <p><strong>Free:</strong> {data.free}</p>
        <p><strong>Used:</strong> {data.used}</p>
      </div>
    </div>
  );
}

export default App;