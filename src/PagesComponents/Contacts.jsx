import React from 'react'
import s from './RulesSite.module.css'
const Contacts = () => {
  return (
    <>
     <div className={s.conteiner}>
        <div className={s.name_me}>
        <h3>© Copyright 2023 by Maxim Sokolov</h3>
        </div>
  
            <div className={s.contact}>
                <div className={s.telephone}>
                
                <div className={s.uzb} style={{padding:`10px`}}>
                    <h5>
                        Uzbekistan:</h5>
                        <a href="tel:+998900625671">+998 (90) 062 - 56 - 71</a>
                </div>
                <div className={s.rus}>
                    <h5>Russia:</h5>
                    <a href="tel:+79175221282">+7 (917) 522 -12 -82</a>
                </div>
                <div className={s.contact__email}>
                    <h5>E-mail:</h5>
                    <a href="mailto:89175221282@mail.ru">89175221282@mail.ru</a>
                </div>
                
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacts