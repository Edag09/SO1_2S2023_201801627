import React from 'react';
import './Style.css';

function Tabla({ datos }) {
  return (
    <div className='conteiner-table'>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Genero</th>
                    <th>Fecha de Lanzamiento</th>
                </tr>
            </thead>
            <tbody>
                {datos.map((dato, index) => (
                    <tr key={index}>
                    <td>{dato.nombre}</td>
                    <td>{dato.genero}</td>
                    <td>{dato.fecha}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
}

export default Tabla;
