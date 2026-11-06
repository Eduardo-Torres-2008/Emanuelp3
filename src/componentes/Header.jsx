import "./Headerstyles.css"
import { Link } from "react-router-dom"

function Header() {

  return (
    <>
    <header>

        
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Productos">Productos</Link>
            <Link to="/Dudas">Dudas</Link>


        </nav>
        </header>

    </>
  )
}

export default Header