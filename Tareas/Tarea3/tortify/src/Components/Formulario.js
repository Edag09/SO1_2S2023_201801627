import React, { useState } from 'react';

function Formulario({ onAgregar }) {
  const [nombre, setNombre] = useState('');
  const [artista, setArtista] = useState('');
  const [genero, setGenero] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const nuevoDato = { nombre, genero, fecha, artista };
    onAgregar(nuevoDato);
    setNombre('');
    setGenero('');
    setFecha('');
    setArtista('');
  };

  return (
    <div className='conteiner-forms'>
        <div className='conteiner-dataf'>
            <form onSubmit={handleSubmit} className='form-data'>
                <h1>Ingreso de Cancion</h1>
                <div>
                    <label>Nombre:</label>
                    <input
                    type="text"
                    value={nombre}
                    placeholder='See the way'
                    onChange={(event) => setNombre(event.target.value)} required
                    />
                </div>
                <br></br>
                <div>
                    <label>Artista:</label>
                    <input
                    type="text"
                    value={artista}
                    placeholder='The Chainsmokers'
                    onChange={(event) => setArtista(event.target.value)} required
                    />
                </div>
                <br></br>
                <div>
                    <label>Genero:</label>
                    <input
                    type="text"
                    value={genero}
                    placeholder='Electronica'
                    onChange={(event) => setGenero(event.target.value)} required
                    />
                </div>
                <div>
                    <label>Fecha de Lanzamiento: </label>
                    <input 
                    type='date' 
                    value={fecha} 
                    onChange={(event) => setFecha(event.target.value)} required
                    />
                </div>
                <br></br>
                <button type="submit">Agregar Cancion</button>
            </form>
        </div>
    </div>
    
  );
}

export default Formulario;