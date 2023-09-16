import React, { useState, useEffect } from 'react'
import Info from './Info'
import s from './AdminPage.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BtnSmall from '../../UI/Button/BtnSmall'
import axios from 'axios';
const Rewrite = () => {
    const [Save, setSave] = useState(false);
    const [Bank, setBank] = useState(``);
    const [NumberBank, setNumberBank] = useState(``);
    const [posts, setPost] = useState([])
  
    const BANK_URL = `http://localhost:5000/profile/1`
  const HandleUpdate = async () =>{
  
    const {data} = await axios.get(`${BANK_URL}`)
    const res = data;
    res.bank =`${Bank}`,
    res.BankAccount = `${NumberBank}` ,
     await axios.put(`${BANK_URL}`, res)
    console.log(res);
    console.log(res.bank);
    console.log(res.BankAccount);
    console.log(`ok`);


  }


     
  return (
    <>
    <div className={s.block}>
        <div className={s.info}>

     <Info/>   
        </div>
    <div className={s.rewrite}>
        <h3>Для изменения реквизитов получения денежных средств заполните форму:</h3>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '320px' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className={s.form}>

        <TextField
          required
          id=""
          label="Введите название банка"
          value={Bank}
          onChange={(event) => {
            setBank(event.target.value)}}
        />
       
        
        <TextField
         required
          id="outlined-number"
          label="Введите номер счета для поступления средств"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={NumberBank}
          onChange={(event) => {
            setNumberBank(event.target.value)}}
        />
        <div onClick={()=> HandleUpdate()}>
          <BtnSmall>
          Сохранить и внести изменения
          </BtnSmall>
          
        

        </div>
      </div>
    </Box>


     </div>

    </div>
    
    
    
    </>
  )
}

export default Rewrite