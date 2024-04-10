// En el componente App.js

import React, { useState, useEffect } from 'react';
import Select from './components/Select';
import Tabla from './components/Tabla';
import Search from './components/Search';
import AgregarDatos from './components/AgregarDatos';

function App() {
  const [datosFiltrados, setDatosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [filasPorPagina, setFilasPorPagina] = useState(5);
  const [totalElementos, setTotalElementos] = useState(0);
  const [paginaActual, setPaginaActual] = useState(1);
  const [mostrarAgregar, setMostrarAgregar] = useState(false);
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    setTotalElementos(datos.length);
  }, [datos.length]);

  const handleFilasPorPaginaChange = (valor) => {
    setFilasPorPagina(valor);
    setPaginaActual(1);
  };

  const handleBusqueda = (valorBusqueda) => {
    setBusqueda(valorBusqueda);

    const datosFiltrados = datos.filter((dato) =>
      dato.nombre.toLowerCase().startsWith(valorBusqueda.toLowerCase())
    );
    setDatosFiltrados(datosFiltrados);
  };

  const handleMostrarAgregar = () => {
    setMostrarAgregar(true);
  };

  const handleCancelarAgregar = () => {
    setMostrarAgregar(false);
  };

  const handleAceptarAgregar = (nuevoDato) => {
    setDatos([...datos, nuevoDato]);
    handleCancelarAgregar();
  };

  const handleEliminarDato = (datoAEliminar) => {
    const nuevosDatos = datos.filter((dato) => dato !== datoAEliminar);
    setDatos(nuevosDatos);
  };

  const handleEditarDato = (datoAEditar) => {
    // Lógica para editar el dato
    console.log('Editar', datoAEditar);
  };

  return (
    <div className="App">
      <h1>Lista de Datos</h1>
      <button onClick={handleMostrarAgregar}>Agregar</button>
      {mostrarAgregar && (
        <AgregarDatos onAgregar={handleAceptarAgregar} />
      )}
      <Select onChange={handleFilasPorPaginaChange} />
      <Search onSearch={handleBusqueda} />
      <Tabla
        datos={
          busqueda
            ? datosFiltrados.slice(
                (paginaActual - 1) * filasPorPagina,
                paginaActual * filasPorPagina
              )
            : datos.slice(
                (paginaActual - 1) * filasPorPagina,
                paginaActual * filasPorPagina
              )
        }
        paginaActual={paginaActual}
        totalElementos={totalElementos}
        filasPorPagina={filasPorPagina}
        onEliminar={handleEliminarDato} // Pasamos la función para eliminar
        onEditar={handleEditarDato} // Pasamos la función para editar
      />
    </div>
  );
}

export default App;
