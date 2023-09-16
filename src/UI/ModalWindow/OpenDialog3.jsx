import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import BtnSmall from '../Button/BtnSmall';
import ModalOk from './ModalOk';
import MakeForm from '../MakeLessons/MakeForm'
import AxiosPut from '../MakeLessons/AxiosPut';
import CheckBox from './CheckBox';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function OpenDialog3({PriceLessons, comission}) {
  const [open, setOpen] = useState(false);
 

// Получение описания с аксиоса
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
  <>

  <div>
      <div onClick={handleClickOpen}>
            <BtnSmall>
            Опубликовать
            </BtnSmall>
           
      </div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 1, p: 1 }} id="customized-dialog-title" >
            Подтверждение
        </DialogTitle>
      
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[800],
          }}
        >
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
            Стоимость курса составляет: {PriceLessons}  &#8381;<br/>
            Комиссия за создание курса составляет: {comission}  &#8381;<br/>
            Итоговая стоимость составляет: {Number(comission) +Number(PriceLessons)}  &#8381;<br/>

      

       
          </Typography>
        </DialogContent>
        <DialogActions>
        
            <div>
                <div  onClick={()=> window.location.reload()}>
            <BtnSmall>
            Опубликовать
            </BtnSmall>

                </div>
            </div>
            <div autoFocus onClick={handleClose}>
            <BtnSmall>
            Отмена
            </BtnSmall>
            </div>
    
            </DialogActions>
      </BootstrapDialog>
    </div>
   
  

     
    
     </>
  );
}