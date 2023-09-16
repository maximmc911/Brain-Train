import React from 'react'
import s from './FavoriteLessons.module.css'
const Cards = ({card}) => {
  return (
    <>
     <div className={s.card}>
               <div className={s.logo} >
               </div>
               <div className={s.name} >
                   <h1 style={{fontSize:`12px`}}>
                   {card.nameLessons}
   
                   </h1>
               </div>
            </div>
    </>
  )
}

export default Cards