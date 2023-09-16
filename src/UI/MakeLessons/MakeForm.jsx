import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';
import BtnSmall from '../Button/BtnSmall';
import OpenDialog3 from '../ModalWindow/OpenDialog3';
import axios from 'axios';
import AxiosPut from './AxiosPut';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';




export default function MakeForm() {
  const [btn, setBtn] = useState(false);
  const [NameLessons, setNameLessons] = useState(``);
  const [Description, setDescription] = useState(``);
  const [TextLessons, setTextLessons] = useState(``);
  const [PriceLessons, setPriceLessons] = useState(0);
  const [checked, setChecked] = useState(false);
  let comission = PriceLessons *0.1
   
  const handleChange = (event) => {
    setChecked(event.target.checked);
   
  };


  return (
    <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 10, width: '300px' },
      }}
      noValidate
      autoComplete="off"
    >
   
     
      <div >
      
        <TextField
          id="standard-textarea"
          label="Введите название курса"
          placeholder="Название курса"
          multiline
          variant="standard"
          value={NameLessons}
          onChange={(event) => {
            setNameLessons(event.target.value)}}
            />
        <TextField
          id="standard-textarea"
          label="Введите описание курса"
          placeholder="Описание курса"
          multiline
          variant="standard"
          value={Description}
          onChange={(event) => {
            setDescription(event.target.value)}}
        />
       
        
      </div>
    </Box>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, maxWidthwidth: '100vh' },
      }}
      noValidate
      autoComplete="off"
    >
          <TextField
          id="standard-textarea"
          label="Введите текст курса"
          placeholder="Содержание курса"
          multiline
          rows={10}
          width={50}    
          variant="standard"
          value={TextLessons}
          onChange={(event) => {
            setTextLessons(event.target.value)}}
            />
    </Box>
<div  style={{ margin:`50px`}}>

    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <div>
       
        <h3 style={{padding:`10px`}}>Введите стоимость курсов:</h3>
        <h5 style={{padding:`10px`}}>*Если хотите сделать курс бесплатным, то оставьте 0</h5>
        <FormControl fullWidth sx={{ m: 1}}>
          <InputLabel htmlFor="outlined-adornment-amount">Cтоимость</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">&#8381;</InputAdornment>}
            label="Amount"
            value={PriceLessons}
            onChange={(event) => {
              setPriceLessons(event.target.value)}}
          />
        </FormControl>
       <h3> Комиссия составляет 10% : {comission} &#8381;</h3>
      </div>
    
    </Box>
    <div>
<FormControlLabel
label="Подтверждаете введенные данные и публикацию"
control={
<Checkbox
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}/>}
/>
</div>

    <div style={{margin:`10px`,}}>
    <OpenDialog3 
    PriceLessons={PriceLessons}
    comission={comission}
    />
     <AxiosPut
      checked={checked}
       NameLessons={NameLessons} 
       Description={Description}
       TextLessons={TextLessons}
       PriceLessons={PriceLessons}
       comission={comission}/>

    </div>
</div>

       
          </>
  );
}