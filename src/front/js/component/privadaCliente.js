import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Buscador from './buscador';
import "../../styles/privadaCliente.css";

import { Context } from '../store/appContext';

const PrivadaCliente = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  const [usuarioId, setUsuarioId] = useState(null); // Estado local para almacenar el usuarioId

  useEffect(() => {
    if (store.usuarios && store.usuarios.id) {
      setUsuarioId(store.usuarios.id);
    }
  }, [store.usuarios]);  

  const handleEditar = () => {
    navigate('/editarusuario', { state: { usuario: store.usuarios } });
  };

  const handleCerrarSesion = () => {
    actions.cerrarSesionUsuario();
    navigate('/'); 
  };

  const handleServicio = () => {
   
    navigate('/servicioscontratadosusuario'); 
  };

  const handleEliminar = () => {
    actions.eliminarUsuario();
    setTimeout(() => {
      navigate('/');
    }, 1000); // Espera 1 segundo antes de redirigir
  };
  

  return (
    <div>
      <button type="button" className="btn cerrar-cliente" style={{ position: 'absolute', top: 180, right: 0 }}  onClick={handleCerrarSesion}>CERRAR </button>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img 
              src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Descripción de la imagen" 
              width="350" 
              height="450" 
            />
          </div>
          
          <div className="col">                            
          <br />
          <h3>Hola !!!</h3>
            <p>Nombre: {store.usuarios.nombre}</p>
            <p>Apellido: {store.usuarios.apellidos} </p>
            <p>Email: {store.usuarios.email} </p>
            <p>Direccion: {store.usuarios.direccion}</p>          
            <p>Pais: </p>
            <p>Población: {store.usuarios.localizacion}</p>
            <p>Código Postal: </p>
            <p>Alergias: {store.usuarios.alergias} </p>
            <button 
              type="button"
              className="btn editar-cliente"
              onClick={handleEditar}
              >
                EDITAR
            </button>       
            <button 
              type="button"
              className="btn editar-cliente"
              onClick={handleServicio}
              >
               SERVICIOS CONTRATATDOS
            </button>           
            <button type="button" className="btn eliminar-cliente"    onClick={handleEliminar}>ELIMINAR</button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <p className="mb-0">¿Quieres contratar un chef?</p>
          </div>        
            <Buscador />         
        </div>
        <h4>Política de privacidad</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis exercitationem iste tempore iure accusantium perspiciatis facere nam nobis pariatur, quod iusto natus totam quaerat deleniti incidunt sint ab ipsam sed.
        </p>
      </div>
    </div>
  );
};

export default PrivadaCliente;
