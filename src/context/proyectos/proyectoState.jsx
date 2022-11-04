import React,{useReducer} from 'react';

import { v4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import { FORMULARIO_PROYECTO,
         OBTENER_PROYECTOS, 
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         ELIMINAR_PROYECTO
        }from '../../types'



//Esto debe ir en mayuscula
const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'Tienda Virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Design website' }
    
    ]

    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null //El proyecto seleccionado
    }

    // Dispatch para ejecutar las acciones
    // Distructuring
    //Clave para trabajar con el reducer
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

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto =>{
        proyecto.id = v4();

        // Insertar el proyecto en el state

        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    // Valida el formulario por errores

    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    // Selecciona el proyecto que el usuario dio click
    const proyectoActual = proyectoId => {

        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    //Elimina un proyecto

    const eliminarProyecto = proyectoId => {

        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        })

    }



    return(
        <proyectoContext.Provider
            value={{
                //state de 1 palabra y funciones de 2 palabras
                proyectos : state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto

            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;