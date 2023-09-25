import React, { useEffect, useState } from 'react';

function App() {
  const [ram, setRam] = useState({});
  const [cpu, setCpu] = useState({});

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
        setRam(JSON.parse(json)); // Almacena los datos en el estado
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error.message);
      });
  }, []);


  useEffect(() => {
    // Realiza una solicitud GET utilizando fetch
    fetch('http://localhost:4000/cpu')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json(); // Analiza el JSON de la respuesta
      })
      .then((json) => {
        setCpu(JSON.parse(json)); // Parceamos los datos en el estado
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error.message);
      });
  }, []);


  return (
    <div>
      <h1>Datos de RAM</h1>
      <p>Total: {ram.total}</p>
      <p>Free: {ram.free}</p>
      <p>Used: {ram.used}</p>

      <h1>Datos de CPU</h1>
      
    </div>
  );
}

export default App;

