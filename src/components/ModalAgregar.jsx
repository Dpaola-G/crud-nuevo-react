import React, { useState } from 'react';

function ModalAgregar({ isOpen, onClose, onGuardar }) {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onGuardar({ nombre, descripcion });
    setNombre('');
    setDescripcion('');
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Agregar Nuevo Dato</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          <label htmlFor="descripcion">Descripción:</label>
          <input type="text" id="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
          <button type="submit">Guardar</button>
        </form>
      </div>
    </div>
  );
}

export default ModalAgregar;
