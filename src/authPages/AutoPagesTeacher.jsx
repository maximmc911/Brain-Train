import React from 'react'
import Header from '../header/Header'
import { Regsiter } from './Regsiter'
import { Login } from './Login';
import s from './Autorization.module.css'
import MainMenuTeacher from '../About/MainMenuTeacher';

const AutoPagesTeacher = () => {
  const header = true;
  const  url = `teacher`
  return (
    <>
    <Header/>
   <MainMenuTeacher/>
      
    <div className={s.autor}>
    <Login url={url} header={header}/>
    <Regsiter url={url} header={header}/>

    </div>
    </>
  )
}

export default AutoPagesTeacher