/*PushLessonsStidy тут вылетает баг, хз что делать */
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
import axios from 'axios';
import PutLessons from '../PutLessons/PutLessons';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function OpenDialog2({card}) {
 const [SentArr, setSentArr] = useState(true)
  const [open, setOpen] = useState(false);
  const [Send, setSend] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  console.log(card);
  const res = {
    id: card.id,
    nameLessons: card.nameLessons,
    textLessons: card.description,
    text: card.textLessons,
  }

const URL_ADMIN = `http://localhost:5000/profile/1`;
const URL_AUTOR = `http://localhost:5000/profile/${card.userID}`;
const URL_USER = `http://localhost:5000/profile/${user.id}`

  const HandlePayAdmin = async() =>{
      try {
        const {data} = await axios.get(URL_ADMIN);
        const userData = data;
        console.log(userData);
        
        userData.MyMoney= (Number(userData.MyMoney)+ Number(card.comission));
        console.log(userData);
       
        
        await axios.put(`${URL_ADMIN}`, {...data , ...userData})
     
      } catch (error) {

        console.log(`не работает`);
      }
        }  

  const HandlePayAutor = async() =>{ 
          try {
            const {data} = await axios.get(URL_AUTOR);
            const userData = data;    
            userData.UserBalans= (Number(userData.UserBalans)+ Number(card.priceLessons));
           
      
            console.log(`HandlePayAutor`);
            
            await axios.put(`${URL_AUTOR}`, {...data , ...userData})
          } catch (error) {
            console.log(`не работает`);
          }
         }
  const HandlePayStidy = async() =>{ 
          try {
            const {data} = await axios.get(URL_USER);
            const userData = data;
  
            
            userData.UserBalans= (Number(userData.UserBalans)- Number(card.allprice));
            console.log(`HandlePayStidy`);
            
            await axios.put(`${URL_USER}`, {...data , ...userData})

          } catch (error) {
            console.log(`не работает`);
          }
         }
  const PushLessonsStidy = async() =>{ 
          try {
            const {data} = await axios.get(URL_USER);
            const userData = data;
            const userData1 = data;
            console.log(data);
            console.log(userData);
            const Arr= userData1.UserAllLessons
            if (Arr.leingh !==0) {
              console.log(`хуета`);
              for (let index = 0; index < Arr.length; index++) {
                console.log(`хуета2`);
                console.log(Arr, index);
                if (Arr[index].id == res.id) {
                 console.log(`хуета3`);
                alert(`Вы купили уже этот курс!`)
                setSentArr(false)
                break;
               }
                
              }

            } 
            console.log(`PushLessonsStidy`);
            if (SentArr == true) {
              
                 userData.UserAllLessons.push(res)
           
                
                   await axios.put(`${URL_USER}`,{...userData1 ,  ...userData})
            }


          } catch (error) {
            console.log(`не работает`);
          }
         }
/*   const HandleChekLessons = async() =>{ 
          try {
          

            const {data} = await axios.get(URL_AUTOR);
            const userData = data;
           const userData1= userData.UserMakeLessons;
           console.log(userData1);
           for (let index = 0; index < userData1.length; index++) {
            const el = userData1[index]
         
            if (card.id == el.id) {
              console.log(`нашел`);
              el.quantity +=1;
              
            }
          }
              await axios.put(`${URL_AUTOR}`, {...data , ...userData})
          console.log(userData);

          } catch (error) {
            console.log(`не работает`);
          }
         } */
          if (Send == true) {
            HandlePayAutor();
            HandlePayAdmin();
            HandlePayStidy(); 
            PushLessonsStidy();
     /*        HandleChekLessons() */
           }

// Получение описания с аксиоса
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
            <BtnSmall>
            Купить
            </BtnSmall>
           
      </Button>
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
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Typography gutterBottom>
           Подтвердите вашу покупку
          </Typography>
        
        </DialogContent>
        <DialogActions>
        
            <div autoFocus onClick={()=> (handleClose(), setSend(true))}>
            <BtnSmall>
            Купить
            </BtnSmall>
            </div>
            <div autoFocus onClick={handleClose}>
            <BtnSmall>
            Отмена
            </BtnSmall>
            </div>
           
            
           

          
    
        </DialogActions>
      </BootstrapDialog>
    
    </div>
  );
}