import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';
import Navigate from 'react-dom'
const Barra = () => {

    //Extraer la informacion de autenticacion
    const authContext = useContext(AuthContext);
    const { usuario, usuarioAutenticado, cerrarSesion } = authContext;

    useEffect(() =>{

        //busca token en el Header e intenta logearce en el sistema
        usuarioAutenticado();
        if(!usuario){
            <Navigate to ="/" />
        }
    }, [])


    return (

        <header className="app-header">
            {usuario ? <p className='nombre-usuario'> Hola <span>{usuario.nombre}</span></p> : null}
            

            <nav className='nav-principal'>

                <button
                    className='btn btn-blank cerrar-sesion'
                    onClick={() => cerrarSesion()}

                >Cerrar Sesion</button>

            </nav>
        </header>

    );

}


export default Barra;