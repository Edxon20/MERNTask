import react, { useContext, useEffect } from 'react';
import Proyecto from './Proyecto';
import Proyectos from './Proyectos';
import proyectoContext from '../../context/proyectos/proyectoContext';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

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
            <TransitionGroup>

                {proyectos.map(proyecto => (

                    <CSSTransition

                        key={proyecto.id}
                        timeout={200}
                        classNames='proyecto'

                    >

                        <Proyecto
                    proyecto={proyecto}
                />
                 </CSSTransition>
            ))}           
            </TransitionGroup>
        </ul>
    );


}

export default ListadoProyectos;