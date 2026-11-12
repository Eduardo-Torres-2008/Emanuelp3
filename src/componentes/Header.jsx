import "./Headerstyles.css"
import { Link } from "react-router-dom"
import { UserRound } from 'lucide-react'

function Header() {

  return (
    <>
    <header>

        
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Productos">Productos</Link>
            <Link to="/Dudas">Dudas</Link>
            <Link to="/Login"><UserRound size={25} color="white" /></Link>

        </nav>
        </header>

    </>
  )
}

export default Header