import Tarjeta from "../componentes/tarjeta"
import Boton from "../componentes/Boton"
import { useState } from "react";

import Modal from "../componentes/Modal";

function Productos() {
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
        <h1>Productos</h1>
        <Tarjeta
        imagen="/Img/beedog.jpg"
        titulo="Hamburguesa"
        descripcion="Incluye papas blablabla"
        >
        <Boton dedos={mostrarModal}>Mostrar Modal</Boton>
        </Tarjeta>
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

export default Productos