import React, { useEffect, useState } from 'react'
import LetterAvatars from './LetterAvatar'
import s from './PageUsers.module.css'
import ModalMoney from '../UI/ModalWindow/ModalMoney'
import {BsFillPenFill} from 'react-icons/bs'
import BtnSmall from '../UI/Button/BtnSmall'
import UserLessons from '../UI/UserLessons/UserLessons'
import axios from 'axios'

const PageUsers = ({example}) => {
/* Контроллеры состояний */
    const [teacher, setTeacher] = useState(example) 
    const [Pay, setPay] = useState(false);
    const [takeMoney, setTakeMoney] = useState(false);
    const [Rewrite, setRewrite] = useState(true);

/* Получение данных персональных данных учеников */

    const [Name, setName] = useState(``);
    const [Email, setEmail] = useState(``);
    const [Login, setLogin] = useState(``);
    const [Money, setMoney] = useState(``);

/* Получение данных персональных данных Преподов */

const [Univer, setUniver] = useState(``);
const [Proff, setProff] = useState(``);
const [AgeProf, setAgeProf] = useState(``);



    let user = JSON.parse(localStorage.getItem("user"));
    let id = user.id;
    
    const USER_URL = `http://localhost:5000/profile/${id}`


    const getData = async () =>{
        try {
          const {data}= await axios(USER_URL);
        
          
      /*     Данные Юзера */
          setName(data.UserName);
          setEmail(data.UserEmail);
          setLogin(data.UserLogin);
          setMoney(data.UserBalans);
          
     /*     Данные Автора */
          setUniver(data.UserUniver);
       
          setProff(data.UserProff);
         
          setAgeProf(data.UserAgeProf);
     


        } catch (err) { 
          console.log(err.message);
        
      }}
      useEffect(() => {
        getData();
       
      }, [])

      
    

  return (
    <>
  { Pay ? <ModalMoney choise={takeMoney}/> :


   ( <div className={s.module}>
   <div className={s.users}>
        <div className={s.avatar}>
     <LetterAvatars name= {Name}/>
    <div className={s.rewrite} onClick={()=> setRewrite(!Rewrite)}>
        <p>Редактировать</p>
        <BsFillPenFill
        color='var(--icon_color)'/>
      </div>
        </div>
        {/* Вот в этом блоке кода необходимо получать данные  axios */}
        <div className={s.name}>
            <h1>{Name}</h1>
        </div>
        <div className={s.email}>
            <h3>Почта: {Email}</h3>
    
            <h3>Логин: {Login}</h3>
          
        </div>
        { teacher ? 
        (<div className={s.teacher}>
          <h3>Образование:{Univer}</h3>
        <h3>Специальность: {Proff}</h3>
       
        <h3>Стаж работы: {AgeProf} </h3>
      
        </div>) : null

        }
        <div className={s.balans} >
            <h3>Баланс:  {Money} &#8381;</h3>
            <div className={s.btn}>
              <div className="button"onClick={()=> (setPay(true))}>
            <BtnSmall>Пополнить</BtnSmall>
          
          

              </div>
            {teacher ? 
            ( <div className="button"onClick={()=> (setPay(true), setTakeMoney(true))}>
            <BtnSmall>Вывести</BtnSmall>
            </div>) : null
            }
           

            </div>
        </div>
     </div>
     <UserLessons teacher={teacher} rewrite={Rewrite}/>
     </div>)
}

    
    </>
  )
}

export default PageUsers