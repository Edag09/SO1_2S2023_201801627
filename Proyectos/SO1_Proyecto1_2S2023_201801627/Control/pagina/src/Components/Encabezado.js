import React, { useState } from 'react';
import ballenita from '../Images/docker.png'
import { Link, Outlet } from "react-router-dom";
import Computers from '../Controller/Computer';
import './Style.css';

function Encabezado(){
    const [selectedOption, setSelectedOption] = useState('opcion 0');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <div>
            <div className="header">
                <div className="title-images">
                    <img src={ballenita} alt='ballenita' id='images-home'></img>
                    <h1 id='name-title'>SO1</h1>
                </div>
                <div className="title">
                    <h1 id='modules-kernel'>Modulos del Kernel</h1>
                </div>
                <div className='options'>
                    <Link to="/time" id='real-time'>Tiempo Real</Link>
                    <Link to="/historial" id='historial'>Historial</Link>
                </div>
                <Outlet/>
            </div>
            <div className="select-computer">
                <label htmlFor="dropdown" className="dropdown-label">

                </label>
                <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className="dropdown-select">
                    <option>Selecciona el nombre de una computadora</option>
                    <option value="opcion 1">Computadora 1</option>
                    <option value="opcion 2">Computadora 2</option>
                    <option value="opcion 3">Computadora 3</option>
                    <option value="opcion 4">Computadora 4</option>
                </select>
                {<Computers miparametro={selectedOption}/>}
            </div>
        </div>
    );
}

export default Encabezado;