import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './login.css'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    function iniciarSesion(evento){
        evento.preventDefault()

        setEmail("")
        setPassword("")
        navigate("/")
    }

    return (
        <main className="login">
            <div className="login-contenedor">
                <div className="login-pestanas">
                    <button className="activo" onClick={() => navigate('/')}>Iniciar Sesión</button>
                    <button onClick={() => navigate('/Registro')}>Registrar</button>
                        
                    
                </div>
                <div className='login-formulario'>
                        <h2> Bienvenido</h2>
                        <p>inicia sesion con tu cuenta</p>

                        <form>
                            <input
                            type='email'
                            placeholder='Correo electronico'
                            value={email}
                            onChange={(evento) => setEmail(evento.target.value)}
                            required
                            />
                            <input
                            type='password'
                            placeholder='Contraseña'
                            value={password}
                            onChange={(evento) => setPassword(evento.target.value)}
                            required
                            />
                        </form>
                </div>
            </div>



        </main>
    )
}

export default Login