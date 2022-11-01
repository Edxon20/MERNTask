import react from 'react';
import Proyecto from './Proyecto';
import Proyectos from './Proyectos';

const ListadoProyectos = () => {

    const proyectos = [
        {nombre: 'Tienda Virtual'},
        {nombre: 'Intranet'},
        {nombre: 'Design website'}
    ]

    return(
        <ul className='listado-proyectos'>
            {proyectos.map(proyecto =>(
                <Proyecto 
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );


}

export default ListadoProyectos;