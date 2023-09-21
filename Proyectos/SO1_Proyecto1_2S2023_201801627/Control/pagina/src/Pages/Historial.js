import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Style.css';

function Historial(){
    return(
        <div >
            <div className="header">
                <div className="title-images">
                    <h1 id='name-title'>SO1</h1>
                </div>
                <div className="title">
                    <h1 id='modules-kernel'>Historial de los modulos del kernel</h1>
                </div>
                <div className='options'>
                    <Link to="/time" id='real-time'>Tiempo Real</Link>
                    <Link to="/" id='historial'>Home</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Historial;