
import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA

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
                tareas : [...state.tareas,action.payload],
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
        case ESTADO_TAREA:
            return{
                ...state,
                tareas: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaseleccionada: action.payload
            }
        case ACTUALIZAR_TAREA:            
                return {
                    ...state,
                    //Recorre todo, si es que el ID de tarea es igual a la tarea que pasamos actualizamos la tarea... sino 
                    //seguimos pasando los otros que ya estabamos pasando
                    tareas: state.tareasproyecto.map(tarea => tarea.id === action.payload.id ? action.payload : tarea)
                }
        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaseleccionada: null
            }
            
        default:
            return state;
    }

}