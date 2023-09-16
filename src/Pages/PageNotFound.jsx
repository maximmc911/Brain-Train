import React from 'react'
import Header from '../header/Header'
import s from './Styles/UserPage.module.css'
import {PiSmileyNervousLight} from 'react-icons/pi'
const PageNotFound = () => {
  return (
    <>
    <Header/>
   <div className={s.bad}>
    <PiSmileyNervousLight
    size={110}
    color='red'/>
    <h1>404</h1>
    <h1> Page not found</h1>
    <h3>The Page you are looking for doesn't exist or an other error occurred. <br/>
Go back, or head over to this site to choose a new direction</h3>
   </div>
   
    </>
  )
}

export default PageNotFound