
import Login from './pages/Login'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Dudas from './pages/Dudas'
import Header from './componentes/Header'
import Registro from './pages/Registro'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Dudas" element={<Dudas />} /> 
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    
    
    
    </BrowserRouter>
    </>
  )
}

export default App
