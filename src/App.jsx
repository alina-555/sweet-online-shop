import { useState } from 'react'
import './App.css'
import Cart from './components/Cart/Cart'
import Nav from './components/Nav/Nav'
import Section from './components/Section/Section'
import Modal from './components/Modal/Modal'

function App() {

   const [cart,setCart] = useState(false)
   const [modal,setModal] = useState(false)

  function handleOpenCart(){
    setCart(true)
  }
  function handleCloseCart(){
    setCart(false)
  }
  function handleOpenModal(){
    setModal(true)
  }
  function handleCloseModal(){
    setModal(false)
  }
  return (
    <div>
      <Nav openCart={handleOpenCart}  />
      <Section openModal={handleOpenModal}/>
      {cart && <Cart closeCart={handleCloseCart}/>} 
      {modal && <Modal closeModal={handleCloseModal}/>}
    </div>
  )
}

export default App
