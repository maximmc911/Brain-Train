import  React, { useState } from 'react';
import s from '../UserLessons/UserLessons.module.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BtnSmall from '../Button/BtnSmall';
import PageUsers from '../../PageUsers/PageUsers';
import UserLessons from '../UserLessons/UserLessons';
import axios from 'axios';
const Rewrite = ({teacher}) => {
    const [Name, setName] = useState('');
    const [Login, setLogin] = useState('');
    const [Vuz, setVuz] = useState('');
    const [Profession, setProfession] = useState('');
    const [ProfessionAge, setProfessionAge] = useState('');
   const [Btnclose, setBtnclose] = useState(false);
   console.log(Name, Login, Vuz, Profession , ProfessionAge);
 
    let user = JSON.parse(localStorage.getItem("user"));
    let id = user.id;
    
    const USER_URL = `http://localhost:5000/profile/${id}`
    const res = {     
     UserLogin :Login,
     UserName :Name,
     UserUniver :Vuz,
     UserProff :Profession,
     UserAgeProf :ProfessionAge,
    }


  const getData = async () =>{
    try {
    const {data} = await axios.get(USER_URL);
    const userData = data;
    if (userData !== null ) {
      await axios.put(`${USER_URL}`, {...userData, ...res})
    }
  /*     await axios.put(`${USER_URL}`, {...userData, res}) */
   /* const resss =  await axios.get(USER_URL)
   console.log(resss); */
    } catch (err) {

      console.log(err.message);    
  }}

  


  

  return (
    <>
    {!Btnclose ? 
   ( <div>
    <div className={s.Header}>
        <div className={s.headerWrite}>
        <h1>Редактирование анкеты</h1>
        <h3>Нобходимо заполнить все формы!</h3>
        </div>
        <div className={s.headerIcon} onClick={()=> setBtnclose(!Btnclose)}>
        <AiFillCloseCircle
        size={35}
        color='var(--icon_color)'/>
        </div>
    </div>
    <div className={s.form}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '320px' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className="form" style={{display:`flex`, flexWrap: `wrap`, gap:`20px`}}>

      <div style={{display: `flex`, flexDirection:`column`, gap:`20px`}} >
       <div>

      
        <h3 style={{padding:`10px`}}>Введите ваше имя и фамилию:</h3>
        <TextField 
        label="Ваше имя и фамилия" 
        id="outlined-size-normal" 
        value={Name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        size="normal"/>
         </div>
         <div>
         <h3 style={{padding:`10px`}}>Введите ваш новый логин:</h3>
         
        <TextField 
        label="Ваше ваш новый логин" 
        id="outlined-size-normal" 
        value={Login}
        onChange={(event) => {
          setLogin(event.target.value);
        }}
        size="normal"/>
        </div>
      </div>
      {teacher ? 
      (<div>

      <div>
        <h3 style={{padding:`10px`}}>Введите название учебного заведения:</h3>
        <TextField 
        label="Учебное заведение" 
        id="outlined-size-normal" 
        value={Vuz}
        onChange={(event) => {
          setVuz(event.target.value);
        }}
        size="normal"/>
      </div>
      
      <div>
        <h3 style={{padding:`10px`}}>Введите вашу специальность:</h3>
        <TextField 
        label="Ваша специальность" 
        id="outlined-size-normal" 
        value={Profession}
        onChange={(event) => {
          setProfession(event.target.value);
        }}
        size="normal"/>
      </div>
     
    <div>
        <h3 style={{padding:`10px`}}>Введите ваш стаж работы по специальности:</h3>
        <TextField 
        label="Стаж работы по специальности" 
        id="outlined-size-normal" 
        value={ProfessionAge}
        onChange={(event) => {
          setProfessionAge(event.target.value);
        }}
        size="normal"/>
      </div>
      </div>) : null
      
    }
      
        </div>
    
    </Box>
    </div>
    <div className={s.btn} onClick={()=> (setBtnclose(!Btnclose), getData())}>
        <BtnSmall>Сохранить изменения</BtnSmall>
    </div>
    </div>) : (
       location.reload() 
    )
      
  }
    

    </>
  )
}

export default Rewrite