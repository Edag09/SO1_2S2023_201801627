import React, { useEffect, useState } from 'react';
import './Style.css';
import {Chart} from 'primereact/chart'

const Computers = (props) => {
    const params = props.miparametro;
    const [mensaje, setMensaje] = useState('');
    const [mess, setMessage] = useState('');
    const [ram, setRam] = useState('');
    const [cpu, setCpu] = useState('');

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

    useEffect(() => {
    fetch('http://localhost:4000/ram')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then((json) => {
        setRam(json);
        console.log(json)
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error.message);
      });
    
    fetch('http://localhost:4000/cpu')
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then((json) => {
        setCpu(json);
        console.log(json)
      })
      .catch((error) => {
        console.error('Error al realizar la solicitud:', error.message);
      });

  }, []);

    const espacioUtilizado = ram.total - ram.free;
    const porcentajeLibre = (ram.free / ram.total) * 100;
    const porcentajeUtilizado = (espacioUtilizado / ram.total) * 100;

    const uso = cpu.cpu_usage;
    const libre = 100-cpu.cpu_usage;

    const data={
        labels: ['Porcentaje de Uso '+porcentajeUtilizado.toFixed(2)+' %' , 'Porcentaje Libre '+porcentajeLibre.toFixed(2)+' %'],
        datasets: [{
        data: [porcentajeUtilizado, porcentajeLibre],
        backgroundColor: ['#FF5733', '#FFC300'],
        },
    ],
    };

    const cpu_use={
        labels: ['Uso del CPU', 'Libre'],
        datasets: [{
            data: [uso, libre],
            backgroundColor: ['#54A3F8', '#E1E9F2'],
        },
    ],
    };

    const mostrarDiv = () => {
        if (params === 'opcion 1') {
            return(
                <div className='container'>
                    <div id='ram'>
                        <h1>Memoria RAM</h1>
                        <Chart id='graph-pie' type='pie' data={data}/>
                    </div>
                    <div id='cpu'>
                        <h1>CPU</h1>
                        <Chart id='graph-pie' type='pie' data={cpu_use}/>
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