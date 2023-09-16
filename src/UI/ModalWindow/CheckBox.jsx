import  React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AxiosPut from '../MakeLessons/AxiosPut';
const CheckBox = () => {
    const [checked, setChecked] = useState(false);
   
    const handleChange = (event) => {
      setChecked(event.target.checked);
     
    };

  return (
    <div>

         <AxiosPut checked={checked}/>
        
        <FormControlLabel
      label="Подтверждаете введенные данные"
      control={
       <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}/>}
      />
    </div>
  )
}

export default CheckBox