import React, { useState } from 'react'
import MakeCard from './MakeCard';
import s from './Card.module.css'
import BtnSmall from '../../Button/BtnSmall';
import Payments from '../../../Payments/Payments';
import FinansePage from '../../../Pages/AdminPages/FinansePage';
const CardPay = ({card}) => {
  const [ModalW, setModalW] = useState(false)

const [Fin, setFin] = useState(``)
const [IDuser, setIDuser] = useState()
const [UserMoney, setUserMoney] = useState()
const result={
  Fin : Fin,
  IDuser: IDuser,
  UserMoney: UserMoney,
}
if (ModalW == true) {
  alert(`Финансовая операция успешно проведена`);
  setModalW(false);
}

console.log(card);

  /*   console.log(cardInfo[0].bank); */
   /*  const listItems =  */
  return (
   
    <div className={s.card}>
   
      <div className={s.name}>
      <div className={s.number}>
        <h6>Номер заявки: {card.id}</h6>
      </div>
        <h3>ID пользователя: <br/> {card.user}</h3>
        <h3>Наименование банка: <br/> {card.bank} </h3>
        <h3>Номер карты: <br/> {card.card} </h3>
        <h3> Сумма операции: <br/> {card.cash} &#8381; </h3>
        <h3>Перевод: <br/> {card.translation} </h3>
      </div>
     <div className={s.btnGroup}>
      <div className={s.btn} onClick={()=> (setFin(`пополнить`),setIDuser(card.user), setUserMoney(card.cash),setModalW(true)) }>
      <BtnSmall>Пополнить</BtnSmall>
        
      </div>
      <div className={s.btn} onClick={()=> (setFin(`списать`),setIDuser(card.user), setUserMoney(card.cash),setModalW(true))}>

      <BtnSmall>Списать</BtnSmall>
      </div>
      <div className={s.btn} onClick={()=> (setFin(`Удалить`),setIDuser(card.id),setModalW(true))}>
      <BtnSmall>Удалить заявку</BtnSmall>
      <Payments result={result}/>
      </div>
     </div>
     <div style={{display:`none`}}>


     </div>
    </div>
  )
}
export default CardPay