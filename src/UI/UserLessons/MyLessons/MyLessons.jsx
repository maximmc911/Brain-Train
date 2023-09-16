import  React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {FcSearch} from 'react-icons/fc'
import FavoriteLessons from '../Favorite/FavoriteLessons';
import s from './MyLessons.module.css'
import LessonUnfo from './LessonUnfo';
import MakeCard from './MakeCard';
import axios from 'axios';

const MyLessons = () => {
  
 /*    const [Search, setSearch] = useState(''); */
    const [CardInfo, setCardInfo] = useState('');
    const [Info, setInfo] = useState();
    const [Lesson, setLesson] = useState('');
    const [Name, setName] = useState('');
    const [Open, setOpen] = useState(false)

    let user = JSON.parse(localStorage.getItem("user"));
    const URL_USER = `http://localhost:5000/profile/${user.id}`;
   
    
    useEffect(() => {TeachStidy()}, [])

    const TeachStidy = async () =>{
      try {
        const {data} = await axios.get(URL_USER);
        const cardInfo = data.UserAllLessons;
        setCardInfo(cardInfo);
   
          
      } catch (error) {
        console.log(`error`);
      }
    }
    const StidyLesson = async () =>{
      try {
        const {data} = await axios.get(URL_USER);
        const cardInfo = data.UserAllLessons;
        console.log(cardInfo);
        for (let index = 0; index < cardInfo.length; index++) {
          if (cardInfo[index].id == Info) {
            setName(cardInfo[index].nameLessons);
            setLesson(cardInfo[index].text)
          }
          
        }
          
      } catch (error) {
        console.log(`error`);
      }
    }
    if (Open== true) {
      StidyLesson();
      setOpen(false);
      
    }

   
 
  return (
    <>
    <div className={s.all}>
    <div className={s.search}>
      {/* //! Поисковик курсов
      */}
   {/*  <Box className={s.LittleForm}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '300px'},
      }}
      noValidate
      autoComplete="off"
    >
        <div className="form" style={{display:`flex`, flexWrap: `wrap`, gap:`20px`}}>

        <TextField 
        label= 'Поиск курсов .....'

        id="outlined-size-normal" 
        value={Search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
        size="normal"/>
      </div>
    </Box> */}
    <div className={s.icon}>
      <h3 style={{paddingBottom:`15px`}}>Мои курсы:</h3>
       <div className={s.cards}>
       { CardInfo.length ?   CardInfo.map((card)=>(
        <div key={card.id} onClick={() =>( setInfo(card.id), setOpen(true))}>
          <MakeCard card={card} />

        </div>
         )) : 
         <p>Пока никаких новых уроков не опубликовано</p>
       } 
      
       </div>
    </div>
    </div>
    <div className={s.read} >

      <h3 style={{padding:`15px`}}>Название курса: {Name} </h3>
  
    <LessonUnfo Lesson={Lesson}/> 
    
    </div>
    </div>
    </>
  )
      }

export default MyLessons
