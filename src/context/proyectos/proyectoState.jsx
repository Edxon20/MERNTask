import React,{useReducer} from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS } 
    from '../../types'



//Esto debe ir en mayuscula
const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Design website' }
    
    ]

    const initialState = {
        proyectos: [],
        formulario: false
    }

    // Dispatch para ejecutar las acciones
    // Distructuring
     const [state, dispatch] = useReducer(proyectoReducer,initialState)

    //Serie de funnciones para el CRUD

    const mostrarFormulario = () =>{
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // obtener los proyectos
    //Por lo general lo que tome como parametro es el payload
    const obtenerProyectos = () =>{
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                //state de 1 palabra y funciones de 2 palabras
                proyectos : state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos

            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;