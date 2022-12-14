import React, {useContext} from 'react'
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContex from '../../context/tareas/tareaContex';


const Tarea = ({tarea}) => {

    const tareasContext = useContext(tareaContex);
    const { eliminarTarea, obtenerTareas,cambiarEstadoTarea,guardarTareaActual } = tareasContext;

    const proyectosContext = useContext(proyectoContext);
    const { proyecto  } = proyectosContext;

    

    // Funcion que se ejecuta cuando el usuario presiona el boton de eleiminar tarea
    const tareaEliminar = id =>{
        eliminarTarea(id);
        obtenerTareas(proyecto[0].id);
    }

    // funcion que modifica el estado de las tareas
    const cambiarEstado = tarea =>{
        if(tarea.estado){
            tarea.estado = false;
        }else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    //Agrega una tarea actual cuando el usuario cuando el usuario quiere editarla

    const seleccionarTarea = tarea =>{
        guardarTareaActual(tarea);
    }

    return (

        <li className='tarea sombra'>
            <p>{tarea.nombre}</p>

            <div className='estado'>
                {tarea.estado                
                ?   
                    (
                        <button
                            type='button'
                            className='completo'
                            onClick={ () =>cambiarEstado(tarea) }
                        >
                            Completo
                        </button>
                    )

                : 
                    (
                        <button
                            type='button'
                            className='incompleto'
                            onClick={() =>cambiarEstado(tarea)}
                        >
                            Incompleto
                        </button>
                    )

                }
            </div>
                <div className='acciones'>

                    <button
                        type='button'
                        className='btn btn-primario'
                        onClick={() => seleccionarTarea(tarea)}
                    >
                        Editar
                    </button>

                    <button
                       type='button'
                       className='btn btn-secundario'    
                       onClick={() => tareaEliminar(tarea.id)} 
                    >
                        Eliminar
                    </button>

                </div>
        </li>

    );

}

export default Tarea;