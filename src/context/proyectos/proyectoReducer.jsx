import { FORMULARIO_PROYECTO } from '../../types'
import { OBTENER_PROYECTOS } from '../../types'
import { AGREGAR_PROYECTO } from '../../types'
import { VALIDAR_FORMULARIO } from '../../types'
import {PROYECTO_ACTUAL} from '../../types'

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
        case AGREGAR_PROYECTO:
            return{
                //Recordar no olvidar dejar los state que ya esten establecidos.
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario: false

            }
        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario: true
            }
        case PROYECTO_ACTUAL:
            return{
                ...state,
                //El action.payload es lo que pasamos por parametro en la funcion anterior
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
            }

        default:
            return state;
    }
}

