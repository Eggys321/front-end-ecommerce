import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Cart from './Components/Cart'
import { useState } from 'react'

function App() {
  const [cartItems,setCartItems] = useState([])
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar cartItems={cartItems}  />
        <Routes>
          <Route
            path='/'
            element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path='/Cart'
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
