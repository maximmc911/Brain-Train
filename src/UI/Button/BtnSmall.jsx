import React from 'react'
import s from './Btn.module.css'
const BtnSmall = ({children}) => {
  return (
    <>
    <div className={s.BtnSmall_form}>

    <button className={s.BtnSmall}>
        {children}
    </button>
    </div>
    </>
  )
}

export default BtnSmall