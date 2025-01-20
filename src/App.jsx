import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Header/Navbar'
import ImageCursol from './Components/Header/ImageCursol'
import { AllProducts } from './Components/AllProducts/AllProducts'
import ShowPage from './Components/showPage/ShowPage'
import store from "./Store/Appstore"
import {Provider} from "react-redux"
import Cart from './Components/Cart/ItemCart'
import UserDashboard from './UserDashboard'

function App() {


  
  
  return (
    < Provider store={store} >
         <UserDashboard/>
    </ Provider>
  )
}

export default App
