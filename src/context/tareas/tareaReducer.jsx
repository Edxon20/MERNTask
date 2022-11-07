
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA

} from "../../types";

export default (state,action) =>{

    switch(action.type){

        case TAREAS_PROYECTO:
            return {
                ...state,
                //Esta es la manera de agregar, el filtro se hace sobre tareas del initial
                //El filter funcion EMC5
                //Iterar por cada uno pero quedarse con lo necesario.
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
            return{
                ...state,
                //Estariamos creando un arreglo nuevo de tareas
                //Mas la nueva
                tareas : [state.tarea,action.payload],
                errortarea: false
            }

        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea: true
            }
        case ELIMINAR_TAREA:
            return{
                ...state,
                //Agregaremos todas las tareas excepto la que tenga el mismo ID
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }    
        
        default:
            return state;
    }

}