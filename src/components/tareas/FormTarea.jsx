import React, {useContext, useState, useEffect} from 'react' //El state para ir leyendo los valores del formulario
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContex from '../../context/tareas/tareaContex';

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContex);
    const { tareaseleccionada,errortarea , agregarTarea, validarTarea, obtenerTareas, actualizarTarea, limpiarTarea} = tareasContext;
    
    //State del formulario 
    
    const [tarea, guardarTarea] = useState({
        nombre: '',
    })
    
    //Effect que detecta si hay una tarea seleccionada

    useEffect(() =>{

        if(tareaseleccionada !== null){
            guardarTarea(tareaseleccionada)
        } else{
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

    
    
    

    //Estraer el nombre del proyecto
    const {nombre} = tarea;

    //Si no hay proyecto seleccionado
    //*** */
    if(!proyecto) return null;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Leer los valores del formulacion

    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name]: e.target.value
        })
    }
    //-----------------------------------------------
    const onSubmit = e => {
        e.preventDefault();

        //Validar
        if (nombre.trim() === '') {
            validarTarea();
            return;
        }
        //Si es edicion o nueva tarea 
        if (tareaseleccionada === null) {
            //Agregar la nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea(tarea);
        }else{
            //Actualizar tarea existente 
            actualizarTarea(tarea);

            //Eliminar tarea seleccionada del state
        }
        //Pasar la validacion   
        // Obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //Reiniciar el form
        guardarTarea({
            nombre: ' '
        })

    }

    return (

       <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >

                <div className='contenedor-input'>

                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea...'
                        name='nombre'
                        value={nombre}
                        onChange={handleChange}
                    >
                    </input>

                </div>

                <div className='contenedor-input'>
                    <input
                       type= 'submit'
                       className='btn btn-primario btn-submit btn-block'
                       value={tareaseleccionada ? 'Editar Tarea' :'Agregar Tarea'} 
                    >
                    
                    </input>

                </div>

            </form>

            {errortarea ? <p className='mensaje error'> El nombre de la tarea es obligatorio</p> : null}
       </div>

    );

}


export default FormTarea;