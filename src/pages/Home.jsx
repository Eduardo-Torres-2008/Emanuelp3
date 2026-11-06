import { useState } from "react";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";


function Home() {
  const [mostrar, setMostrar] = useState(false);

  function cerrarModal() {
    setMostrar(false);
  }

  function mostrarModal() {
    setMostrar(true);
  }

  return (
    <>
    <main>
        <h1>Home</h1>
        <Boton dedos={mostrarModal}>Mostrar Modal</Boton>
        {mostrar && (
          <Modal>
            <h2>Listo</h2>
            <p> Tu mensaje blablabla</p>
            <Boton dedos={cerrarModal}>Cerrar</Boton>
          </Modal>)}
    </main>

    </>
  )
}

export default Home