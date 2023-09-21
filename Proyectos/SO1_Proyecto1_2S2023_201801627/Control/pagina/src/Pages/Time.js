import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './Style.css';

function Time(){
    return(
        <div>
            <div className="header">
                <div className="title-images">
                    <h1 id='name-title'>SO1</h1>
                </div>
                <div className="title">
                    <h1 id='modules-kernel'>Modulos del kernel en tiempo real</h1>
                </div>
                <div className='options'>
                    <Link to="/" id='real-time'>Home</Link>
                    <Link to="/historial" id='historial'>Historial</Link>
                </div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Time;