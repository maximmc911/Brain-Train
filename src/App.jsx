import React from 'react'
import Prodact from './Prodact'
import { Route, Routes } from 'react-router-dom'
import Header from './header/Header'
import {routes} from './Routes/routes'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import About from './Pages/About'

const App = () => {

    const setRoutes = () =>
      routes.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ));
  return (
  <div className="App">
    <Routes>
    <Route path="/" element={<About/>}/>
     {setRoutes()}
    </Routes>
    <ToastContainer/>
 {/* <Prodact/> */}



   
  </div>
  
  )
}

export default App