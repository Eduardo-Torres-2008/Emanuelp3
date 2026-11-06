
import {useState} from 'react'
import Modal from "../componentes/Modal";
import Boton from "../componentes/Boton";

function Dudas() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [comentario, setComentario] = useState('')

  const [mostrar, setMostrar] = useState(false);
  
  function cerrarModal() {
    setMostrar(false);
  }


  function enviarFormulario(evento) {
    evento.preventDefault()
    if (
      nombre.trim() === '' ||
      email.trim() === '' ||
      comentario.trim() === ''
    ) {
      setMensaje('Por favor, complete todos los campos.')
    }else {
      limpiarFormulario()
      setMensaje('Formulario enviado correctamente.')
    }
    setMostrar(true)
  }

  function limpiarFormulario() {
    setNombre('')
    setEmail('')
    setComentario('')
  }
    return (

       <main>
        <h1>Dudas</h1>
        <form onSubmit={enviarFormulario}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text"  name="nombre" value={nombre} onChange={(evento) => setNombre(evento.target.value)}  />
          <label htmlFor="email">Email:</label>
          <input type="email"  name="email" value={email} onChange={(evento) => setEmail(evento.target.value)}  />
          <label htmlFor="comentario">Comentario:</label>
          <textarea name="comentario" value={comentario} onChange={(evento) => setComentario(evento.target.value)}  />
            <button type="submit">Enviar</button>
        </form>

         {mostrar && (
          <Modal>
            <h2>Listo</h2>
            <p> {mensaje}</p>
            <Boton dedos={cerrarModal}>Cerrar</Boton>
          </Modal>)}
    </main>


    )
   

    
  
}

export default Dudas    