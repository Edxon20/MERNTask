import react, {useContext} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContex from '../../context/tareas/tareaContex';


const Proyecto = ({proyecto}) => {


    const proyectosContext = useContext(proyectoContext);
    const { proyectoActual } = proyectosContext;

    // Obtener la afuncion del context de tarea
            //aca los 
            //values
    const tareasContext = useContext(tareaContex);
    const {obtenerTareas} = tareasContext;


    // Funcion para agregar el proyecto actual
    const seleccionarProyecto = id =>{

        proyectoActual(id); // Fijar un proyecto actual
        obtenerTareas(id); //Filtra las tareas cuando se de click
 
    }


    return(
        <li>
            <button
                type='button'
                className='btn btn-blank '
                onClick={() => seleccionarProyecto(proyecto.id)}
            >

            {proyecto.nombre}</button>
        </li>
    );


}

export default Proyecto;