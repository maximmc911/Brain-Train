import React from 'react'
import HeaderTeacher from '../../header/HeaderTeacher'
import s from '../Styles/UserPage.module.css'
import MakeForm from '../../UI/MakeLessons/MakeForm'


const MakeLessons = () => {
  
 
  return (
    <>
    <HeaderTeacher/>
       <div className={s.header}>
        <h1>
        Конструктор Уроков 
        </h1>
      
       </div>
       <MakeForm/>
       </>
  )
}

export default MakeLessons