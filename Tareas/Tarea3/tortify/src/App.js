import Formulario from './Components/Formulario';
import Encabezado from './Components/Titulo';
import Tabla from './Components/Tables';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [datos, setDatos] = useState([]);

  const agregarDato = (nuevoDato) => {
    setDatos([...datos, nuevoDato]);
  };

  return (
    <div className='conteiner'>
      <div className='title-sections'>
        <Encabezado />
      </div>
      <div className='data-sections'>
        <Formulario onAgregar={agregarDato} />
      </div>
      <div className='table-sections'>
        <Tabla datos={datos} />
      </div>
    </div>
  );
}

export default App;
