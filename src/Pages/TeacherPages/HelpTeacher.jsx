import React from 'react'
import s from '../Styles/Help.module.css'

import RulesSite from '../../PagesComponents/RulesSite'
import Contacts from '../../PagesComponents/Contacts'
import HeaderTeacher from '../../header/HeaderTeacher'
const Help = () => {
  return (
  <>
    <HeaderTeacher/>
    <div className={s.header} style={{padding:`50px`}}>
        <h1 style={{textAlign:`center`}}>Правила использования сайтом:</h1>
    </div>
    <RulesSite/>
    <div className={s.rules} style={{padding:`50px`}}>
    <div className={s.price}>
      <h3>Прейскурсант на публикацию обучающих материалов:</h3>
      <h3>Стоимость публикации оставляет 10% от указанной стоимости материала. <br/> 
      В случае, если вы публикуете обучающие материалы на безвозмедной основе, комиссия отсутствует</h3>
    </div>
      <h3>В случае, если у вас возникли вопросы или предложения после прочтения правил сайте, вы можете обратиться в службу поддержки.</h3>
      <h3>Обращаем ваше внимание, что поступление средств после оплаты поступает на ваш счет в течение 24 часов, и только после заполнения формы об оплате!</h3>
      <h3>Обращаем ваше внимание, что поступление средств на ваш счет осуществляется в течение 24 часов после заполнения формы выведения средств!</h3>
       <h3> Контактный E-mail службы поддержки:   
              
       </h3>
       <h3>
       <a href="mailto:89175221282@mail.ru">89175221282@mail.ru</a>
       </h3>     
    </div>
    <Contacts/>
  </>
  )
}

export default Help