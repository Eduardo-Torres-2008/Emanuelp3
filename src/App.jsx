

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Dudas from './pages/Dudas'
import Header from './componentes/Header'



function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Productos" element={<Productos />} />
        <Route path="/Dudas" element={<Dudas />} /> 
      </Routes>
    
    
    
    </BrowserRouter>
    </>
  )
}

export default App
