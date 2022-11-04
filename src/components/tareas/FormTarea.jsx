import React, {useContext, useState} from 'react' //El state para ir leyendo los valores del formulario
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContex from '../../context/tareas/tareaContex';

const FormTarea = () => {

    //Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    const tareasContext = useContext(tareaContex);
    const {agregarTarea} = tareasContext;



    //State del formulario 
    const [tarea, guardarTarea] = useState({
        nombre: '',
    })

    //Estraer el nombre del proyecto
    const {nombre} = tarea;

    //Si no hay proyecto seleccionado
    //*** */
    if(!proyecto) return null;

    //Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // Leer los valores del formulacion

    const handleChange = e =>{
        guardarTarea(
            ...tarea,
            [e.target.name] = e.tarea.value
        )
    }

    const onSubmit = e =>{
        e.preventDefault();

        //Validar

        //Pasar la validacion

        //Agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        //Reiniciar el form

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
                        value={tarea}
                        onChange={handleChange}
                    >
                    </input>

                </div>

                <div className='contenedor-input'>
                    <input
                       type= 'submit'
                       className='btn btn-primario btn-submit btn-block'
                       value='Agregar tarea'
                    >
                    
                    </input>

                </div>

            </form>
       </div>

    );

}


export default FormTarea;