import React, {useState, useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AlertaContext from '../../context/alertas/alertaContext';
import AuthContext from '../../context/autenticacion/authContext';


const Login = (props) => {
    const navigate = useNavigate();
    // Extraer los valores del context
    // En caso que el usuario o el password no exista
    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    const authContext = useContext(AuthContext);
    const { mensaje, autenticado, iniciarSesion } = authContext;

    //State para iniciar sesion
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });
    
 
    useEffect(() =>{
       
        const {history} = props
        if(autenticado){
            navigate('/proyectos');
            // history.push('/proyectos');            
        }

        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

    }, [mensaje, autenticado, props.history]);



    //Extraer de usuario

    const {email, password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario quiere iniciar sesion
    const onSubmit = e => {
        e.preventDefault();
        //Validar que no haya campos vacios
        if(email.trim() === '' || password.trim() === '') {            
            mostrarAlerta('Todos los campos son obligatorios','alerta-error')        
        }
            //Pasarlo al action
        iniciarSesion({ email, password});
    }
        
    return(

        <div className='form-usuario'>
            {alerta ? (<div className={`alerta ${alerta.categoria}`}> {alerta.msg} </div>) : null} 
            <div className='contenedor-form sombra-dark'>
                <h1>Iniciar Sesion</h1>

                <form
                    onSubmit={onSubmit}
                >
                    <div className='campo-form'>
                        <label htmlFor='email'> Email </label>
                        <input 
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Tu Email'
                        value={email}
                        onChange={onChange}
                        />
                    </div>

                    <div className='campo-form'>
                        <label htmlFor='password'> Password </label>
                        <input 
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Tu password'
                        value={password}
                        onChange={onChange}
                        />
                    </div>
                    <div className='campo-form'>
                        <input 
                            type='submit'
                            className='btn btn-primario btn-block'
                            value='Iniciar Sesion'
                        />
                    </div>
                </form>

                <Link to = {'/nueva-cuenta'} className='enlace-cuenta'>
                    Obtener Cuenta
                </Link>
            </div>
        </div>

    );


}

export default Login;