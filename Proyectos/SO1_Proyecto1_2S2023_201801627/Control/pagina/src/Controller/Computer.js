import React, { useEffect, useState } from 'react';
import './Style.css';

const Computers = (props) => {
    const params = props.miparametro;
    const [mensaje, setMensaje] = useState('');
    const [mess, setMessage] = useState('');

    useEffect(() => {
        fetch('/') // Realiza la solicitud al servidor
          .then((response) => response.json())
          .then((data) => {
            // Actualiza el estado con el mensaje del servidor
            setMessage(data.message);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }, []);

    const handleInputChange = (e) => {
        setMensaje(e.target.value);
    };

    const mostrarMensajeEnPantalla = () => {
        if (mensaje === ''){
            alert('Por favor, ingresa un PID')
        }else{
            alert('Mensaje: ' + mensaje)
            setMensaje('');
        }
    };

    const mostrarDiv = () => {
        if (params === 'opcion 1') {
            return(
                <div className='container'>
                    <div id='ram'>
                        <h1>Memoria RAM</h1>
                    </div>
                    <div id='cpu'>
                        <h1>CPU</h1>
                    </div>
                    <div id='pid'>
                        <label htmlFor="mensaje" id='title-pid'>PID</label>
                        <input
                            type="text"
                            id="mensaje"
                            className='txt-box'
                            value={mensaje}
                            onChange={handleInputChange}
                        />
                        <button id='btn-kill' onClick={mostrarMensajeEnPantalla}>Mimir proceso</button>
                    </div>
                    <div id='stats'>

                    </div>
                </div>
            );
        } else if (params === 'opcion 2') {
            return(
                <div className='container'>
                    <div id='ram'>
                        <h1>Memoria RAM</h1>
                    </div>
                    <div id='cpu'>
                        <h1>CPU</h1>
                    </div>
                    <div id='pid'>
                        <label htmlFor="mensaje" id='title-pid'>PID</label>
                        <input
                            type="text"
                            id="mensaje"
                            className='txt-box'
                            value={mensaje}
                            onChange={handleInputChange}
                        />
                        <button id='btn-kill' onClick={mostrarMensajeEnPantalla}>Mimir proceso</button>
                    </div>
                    <div id='stats'>

                    </div>
                </div>
            );
        }else if (params === 'opcion 3') {
            return(
                <div className='container'>
                    <div id='ram'>
                        <h1>Memoria RAM</h1>
                    </div>
                    <div id='cpu'>
                        <h1>CPU</h1>
                    </div>
                    <div id='pid'>
                        <label htmlFor="mensaje" id='title-pid'>PID</label>
                        <input
                            type="text"
                            id="mensaje"
                            className='txt-box'
                            value={mensaje}
                            onChange={handleInputChange}
                        />
                        <button id='btn-kill' onClick={mostrarMensajeEnPantalla}>Mimir proceso</button>
                    </div>
                    <div id='stats'>

                    </div>
                </div>
            );
        }else if (params === 'opcion 4') {
            return(
                <div className='container'>
                    <div id='ram'>
                        <h1>Memoria RAM</h1>
                    </div>
                    <div id='cpu'>
                        <h1>CPU</h1>
                    </div>
                    <div id='pid'>
                        <label htmlFor="mensaje" id='title-pid'>PID</label>
                        <input
                            type="text"
                            id="mensaje"
                            className='txt-box'
                            value={mensaje}
                            onChange={handleInputChange}
                        />
                        <button id='btn-kill' onClick={mostrarMensajeEnPantalla}>Mimir proceso</button>
                    </div>
                    <div id='stats'>

                    </div>
                </div>
            );
        } else {
            return(
                <div className='empty-section'>
                    <p>{mess}</p>
                    <p>Hola</p>
                </div>
            );
        }
    };

    return (
        <div>
            {mostrarDiv()}
        </div>
    );
};

export default Computers