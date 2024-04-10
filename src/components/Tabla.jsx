import React from 'react';
import './Tabla.css';

const Tabla = ({ datos, onEditar, onEliminar }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((producto, index) => (
          <tr key={index}>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>
              {/* Aquí condicionamos la llamada a onEditar */}
              <button type='' onClick={() => onEditar(producto)}>Editar</button>
              <button type='' onClick={() => onEliminar(producto)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tabla;
