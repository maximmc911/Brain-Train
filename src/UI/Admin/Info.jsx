import React, { useEffect, useState } from 'react'
import axios from 'axios'
import s from './AdminPage.module.css'
const Info = () => {
    const [bank, setBank] = useState(``);
    const [BankAccount, setBankAccount] = useState(``);
    const [AllMoney, setAllMoney] = useState(``);
    const [MyMoney, setMyMoney] = useState(``);
    const [SaleMoney, setSaleMoney] = useState(``);
    console.log(bank);
    console.log(BankAccount);
    console.log(AllMoney);
    console.log(MyMoney);
    console.log(SaleMoney);
    const BANK_URL = `http://localhost:5000/profile/1`
    const getData = async () =>{
        try {
          const {data}= await axios.get(BANK_URL);
           setBank(data.bank);
           setAllMoney(data.allMoney);
            setBankAccount(data.BankAccount);
          setMyMoney(data.MyMoney);
          setSaleMoney(data.SaleMoney);
          
         
  
          
        } catch (err) {
            alert(err.message)
          console.log(err.message);
      
      }}
      useEffect(() => {
       
        
        getData();
      }, [])
      
  return (
    <>
    <div className={s.bank}>
    <h2>Реквизиты для получения денежных средств</h2>
    <h3>Банк: {bank} </h3>
    <h3>Номер счета: {BankAccount}</h3>
    </div>
    <div className={s.money}>
    <h2>Средства, находящиеся в обороте на платформе:</h2>
    <h3>Зачисленные средства: {AllMoney} &#8381;</h3>
    <h3>Переводы авторам: {SaleMoney} &#8381;</h3>
    <h3>Чистая прибыль: {MyMoney} &#8381;</h3>
    </div>
    </>
  )
  }

export default Info