import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function InputModalForm({say2 , choise}) {
    const [card, setCard] = useState('');
    const [bank, setBank] = useState('');
    const [cash, setCash] = useState('');
    const [translation, setTranslation] = useState(``);
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
console.log(card);
console.log(bank);
console.log(cash);
console.log(translation);

    const URL_PAY = `http://localhost:5000/money`;
    let user = JSON.parse(localStorage.getItem("user"));
    /*     console.log(res); */
    if (checked == true) {
      const HandlePay = async () =>{
        try {
          if (translation.length == 0) {
            setTranslation(`Вывод средств на карту`)
          }
          const res = {
                user : user.id,
                bank : bank,
                card : card,
                cash : cash,
                translation : translation,
          }
          console.log(res);
          await axios.post(`${URL_PAY}`, res)
               console.log(`заебись`);
        } catch (error) {
          console.error(`пиздец`);
        }
       
      
            }
            HandlePay();
    }
  /*Тут надо заебенить в ахиос все */
 
  return (
    <Box
    component="form"
    sx={{
        '& .MuiTextField-root': { m: 1, width: '320px' },
      }}
      noValidate
      autoComplete="off"
    >
        <div className="form" style={{display:`flex`, flexWrap: `wrap`, gap:`20px`}}>
    
    

      <div >
       
        <h3 style={{padding:`10px`}}>Введите ваш номер карты:</h3>
        <TextField 
        label="Number Card" 
        id="outlined-size-normal" 
        value={card}
        onChange={(event) => {
          setCard(event.target.value);
        }}
        size="normal"/>
      </div>
      <div>
        <h3 style={{padding:`10px`}}>Введите название вашего банка:</h3>
        <TextField 
        label="Bank's name" 
        id="outlined-size-normal" 
        value={bank}
        onChange={(event) => {
          setBank(event.target.value);
        }}
        size="normal"/>
      </div>
      
      <div>
        <h3 style={{padding:`10px`}}>Введите сумму {say2} в рублях:</h3>
        <TextField 
        label="cash &#8381;" 
        id="outlined-size-normal" 
        value={cash}
        onChange={(event) => {
          setCash(event.target.value);
        }}
        size="normal"/>
      </div>
      {!choise? 
     ( <div>
        <h3 style={{padding:`10px`}}>Введите номер перевода:</h3>
        <TextField 
        label="Number translation" 
        id="outlined-size-normal" 
        value={translation}
        onChange={(event) => {
          setTranslation(event.target.value);
        }}
        size="normal"/>
      </div>)
      
      :null}
      <FormControlLabel
      label="Подтверждаете введенные данные"
      control={
       <Checkbox
      checked={checked}
      onChange={handleChange}
      label= "Подтверждаете ввод данных и реквизиты"
      inputProps={{ 'aria-label': 'controlled' }}/>}
      />
        </div>
    
    </Box>
  );
}