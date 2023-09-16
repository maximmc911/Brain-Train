import React from 'react'
import s from './SearchStidy.module.css'
import OpenDialog from '../../ModalWindow/OpenDialog'
import BtnSmall from '../../Button/BtnSmall'
import { ZodEffects } from 'zod'
import OpenDialog2 from '../../ModalWindow/OpenDialog2'
import PutLessons from '../../PutLessons/PutLessons'

const ImportCarhs = ({card}) => {
  


  return (
    <>
       
        <div className={s.card}>
            <div className={s.logo}>
            </div>
            <div className={s.name}>
                <h1>
                {card.nameLessons}

                </h1>
                <h2 style={{fontSize: `15px`}}>Цена: {card.allprice} &#8381;</h2>
            </div>
            <div className={s.text}>
                <OpenDialog2 card={card}/>
                <OpenDialog card={card}/>
               
            </div>
        </div>
   
    </>
  )
}

export default ImportCarhs