import { FORMULARIO_PROYECTO } from '../../types'
import { OBTENER_PROYECTOS } from '../../types'

export default (state,action) =>{
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state,
                formulario: true
            }
        case OBTENER_PROYECTOS:
            return{
                //Recordar que que el payload es lo que pasamos por parametro
                //En el anterior es solo 1 cosa que cambia aca estamos pasando varios elementos.
                ...state,
                proyectos: action.payload
            }

        default:
            return state;
    }
}

