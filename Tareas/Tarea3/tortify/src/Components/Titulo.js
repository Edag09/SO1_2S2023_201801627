import React from  'react';
import music from '../img/music.png';
import './Style.css'

function Encabezado(){
    return(
        <div className='conteiner'>
            <div className='title-img'>
            <h1 className='title'>Tortify</h1>
            <img src={music} alt='music' className='imagen-home'></img>
            </div>
            <h4 className='data'> SO1 - Tarea 3 - 201801627 - 2S2023</h4>
        </div>
    );
}

export default Encabezado;