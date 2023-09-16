import React, { useEffect, useState } from 'react'
import HeaderAdmin from '../../header/HeaderAdmin'
import axios from 'axios'
import CardPay from '../../UI/Admin/AdminFinans/CardPay';
import s from '../../UI/Admin/AdminFinans/Card.module.css'
import BtnSmall from '../../UI/Button/BtnSmall';

const FinansePage = () => {
 
  const [useInfo, setUseInfo] = useState([]);
  const moneyUrl = `http://localhost:5000/money`;
  useEffect(() => {getData()}, [])
  const getData = async () =>{
    try {
      const {data}= await axios(moneyUrl);
      setUseInfo(data)
   


      
    } catch (err) {

      console.log(err.message);    
  }}


  return (
    <>
   <HeaderAdmin/>

   <div className="BTN" style={{padding:`15px`}} onClick={()=> window.location.reload()}>
    <BtnSmall>Обновить данные</BtnSmall>
   </div>
    <h1 style={{textAlign:`center`, fontSize:`25px`, paddingTop: `15px`, paddingBottom: `15px`}}>
      Запросы на операции по средствам от пользователей:
      <div className={s.cards}>
    { useInfo.length ?  useInfo.map((card)=>(
          <CardPay key={card.id} card={card}/> 
    )) : 
<p>Данные о новых платежах отсутствуют</p>
}
  </div>

    </h1>
    
    </>
  )
}

export default FinansePage
