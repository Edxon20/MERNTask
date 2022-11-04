import react, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import Proyectos from './Proyectos';
import proyectoContext from '../../context/proyectos/proyectoContext';

const ListadoProyectos = () => {

    //Extraer proyectos de state inicial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;

    //Obtener proyectos cuando carga el componente
    useEffect( () => {
        obtenerProyectos();
    }, []);

    // Revisar si proyectos posee contenido
    if(proyectos.length === 0 ) return <p>No existen proyectos, comienza agregando uno</p>;

    

    return(
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto =>(
                <Proyecto 
                    key={proyecto.id}
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );


}

export default ListadoProyectos;