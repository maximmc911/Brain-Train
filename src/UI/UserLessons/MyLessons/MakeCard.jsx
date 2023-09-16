import React from 'react'
import s from './MyLessons.module.css'
import {FaBookReader} from 'react-icons/fa'
const MakeCard = ({card}) => {
  return (
    <>
     <div className={s.card}>
          <div className={s.logo} style={{padding:`10px`}}>
            <FaBookReader
            size={35}
            color='var(--icon_color)'/>
          </div>
          <div className={s.name} style={{paddingBottom:`5px`}}>
            <p>{card.nameLessons}</p>
            
          </div>
        </div>
     
    </>
  )
}

export default MakeCard