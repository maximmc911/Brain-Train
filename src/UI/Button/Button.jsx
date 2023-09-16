import React from 'react'
import s from './Btn.module.css'
const Button = ({children, ...other}) => {
  return (
    <>
    <div className={s.btn_form}>

    <button className={s.btn}>
        {children}
    </button>
    </div>
    </>
  )
}

export default Button