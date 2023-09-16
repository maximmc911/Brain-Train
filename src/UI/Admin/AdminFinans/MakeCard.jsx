import React from 'react'
import s from './Card.module.css'
const MakeCard = ({bank,card, cash, id, translation, user, key}) => {
  if (translation == ``) {
   translation = `Вывод средств`
   console.log(`ok`);
  }
  console.log(bank,card, cash, id, translation, user);
  
  return (
    <>
    <div className={s.card} key={key}>
      <div className={s.name}>
      <h6> Новая трансакция</h6>
      </div>
      <div className={s.main}>
        <div className={s.info} >
          <p>ID Заявки: {id}</p>
          <p>ID пользователя: {user}</p>
          <p>Название банка: {bank}</p>
          <p>Номер карты: {card}</p>
          <p>Сумма трансакции: {cash} &#8381;</p>
          <p>Трансакция: {translation}</p>
    
        </div>
        <div className={s.btn}>
          <button>Начислить</button>
          <button>Списать</button>
          <button>Отклонить</button>
        </div>
      </div>
    
    </div>
    </>
  )
}

export default MakeCard