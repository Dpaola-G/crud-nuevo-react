import React, { useState } from 'react';

function AgregarDatos({ onAgregar }) {
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');

  const handleAceptarAgregar = () => {
    onAgregar({ nombre: nuevoNombre, descripcion: nuevaDescripcion });
    setNuevoNombre('');
    setNuevaDescripcion('');
  };

  return (
    <div>
      <input
        type="text"
        value={nuevoNombre}
        onChange={(e) => setNuevoNombre(e.target.value)}
        placeholder="Nombre"
      />
      <input
        type="text"
        value={nuevaDescripcion}
        onChange={(e) => setNuevaDescripcion(e.target.value)}
        placeholder="Descripción"
      />
      <button onClick={handleAceptarAgregar}>Aceptar</button>
    </div>
  );
}

export default AgregarDatos;
