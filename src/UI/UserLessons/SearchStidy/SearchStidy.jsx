import  React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {FcSearch} from 'react-icons/fc'
import BtnSmall from '../../Button/BtnSmall'
import s from './SearchStidy.module.css'
import ImportCarhs from './ImportCarhs';
import FavoriteLessons from '../Favorite/FavoriteLessons';
import axios from 'axios';
const SearchStidy = () => {
  const [Search, setSearch] = useState('');
  const [Card, setCard] = useState('');
  const URL_MAPCARD = `http://localhost:5000/profile`
  const CardArr=[];
  const getData = async () =>{
    try {
      const {data}= await axios.get(URL_MAPCARD);

      for (let index = 0; index < data.length; index++) {
       const Card =[];
       Card.push(data[index].UserMakeLessons);
       for (let index = 0; index < Card.length; index++) {
        if (Card[index]!=0 && Card[index]!=undefined) {
          CardArr.push(...Card[index])
        }   
       }
      }
     setCard(CardArr)
         
    } catch (err) {
 
      console.log(err.message);
  
  }}

  useEffect(() => {
   
    
    getData();
  }, [])


  return (
    <>
    {/*// ! Поисковик для курсов
    */}
   {/*  <div className={s.placeHolder}>
    <Box className={s.form}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '450px'},
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
    </Box> 
    <Box className={s.LittleForm}
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '200px'},
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
    </Box>

    <BtnSmall>
      <div style={{display: `flex`, alignItems: `center`}}>
      Поиск 
      <FcSearch
      size={30}/>
    </div>
    </BtnSmall>
      </div> */}
        <h1 style={{padding: `15px`}}>Каталог курсов:</h1>
      <div className={s.buy}>
      <div className={s.cards}>
       { Card.length ?  Card.map((card)=>(
         
      <ImportCarhs key={card.id} card={card}/>
      )) : 
      <p>Пока никаких новых уроков не опубликовано</p>
    } 
     
      </div>
      </div>
    </>
  )
}

export default SearchStidy