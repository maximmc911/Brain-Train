import  React, { useRef, useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PageUsers from '../../PageUsers/PageUsers';
import BtnSmall from '../Button/BtnSmall';
import ModalOk from './ModalOk';
import InputModalForm from './ModalForm';
import axios from 'axios';


export default function ModalMoney({choise}) {
  const rootRef = useRef(null);
  const [closeModal, setcloseModal] = useState(false);
  const [closeModalOk, setcloseModalOk] = useState(false);
  const [bank, setBank] = useState(``);
  const [BankAccount, setBankAccount] = useState(``);
  const [PAY, setPAY] = useState(false)

  
    const BANK_URL = `http://localhost:5000/profile/1`
    const getData = async () =>{
        try {
          const {data}= await axios(BANK_URL);
          setBank(data.bank);
          setBankAccount(data.BankAccount)
          
  
          
        } catch (err) {
         
          console.log(err.message);
      
      }}
      getData();
  let say ='';
  let say2 ='';
  if (choise == false) {
    say = `Заявка на пополнение счета:`
    say2 = `пополнения`
  } else {
    say = `Заявка на вывод средств:`
    say2 = `вывода`
  }

  return (
    !closeModalOk ?
  (!closeModal ? (

      <Box
        sx={{
          height: `100vh`,
          flexGrow: 1,
          minWidth: 100,
          transform: 'translateZ(0)',
          // The position fixed scoping doesn't work in IE11.
          // Disable this demo to preserve the others.
          '@media all and (-ms-high-contrast: none)': {
            display: 'none',
          },
        }}
        ref={rootRef}
      >
        <Modal style={{background: `var( --bg_modal)`}}
          disablePortal
          disableEnforceFocus
          disableAutoFocus
          open
          aria-labelledby="server-modal-title"
          aria-describedby="server-modal-description"
          sx={{
        /*     bgcolor: `var(--bg_window)`, */
            display: 'flex',
            p: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          container={() => rootRef.current}
        >
          <Box
            sx={{
              position: 'relative',
              width: 800,
              bgcolor: `var(--bg_window)`,
              border: '2px solid #BBC6C8',
              borderRadius: `var(--radius)`,
              boxShadow: (theme) => theme.shadows[1],
              p: 4,
            }}
          >
            <Typography id="server-modal-title" variant="h4" component="h2">
              {say}
            </Typography>
           { !choise ? (
            <div>
            <Typography id="server-modal-title" variant="h6" component="h2">
              Реквизиты для пополнения счета:
            </Typography>
            <Typography id="server-modal-title" variant="h6" component="h2">
              {bank}: {BankAccount}
            </Typography>
            <Typography id="server-modal-title" variant="h6" component="h2">
              Для проверки платежа введите ваши данные:
            </Typography>

            </div>

            ) :null}
              <InputModalForm say2={say2} choise={choise}/>

            <div className="button"
            style={{display:'flex', justifyContent: `space-between`, alignItems: `center`, paddingTop: `80px`}}
            onClick={()=> setcloseModal(true)}           
            >
          <div className="close" onClick={()=> window.location.reload()}>
            <BtnSmall>Назад </BtnSmall>
          </div>
          <div className="pay"
           onClick={()=> (setcloseModalOk(true), setPAY(true))} >
            <BtnSmall>Создать заявку </BtnSmall>
          </div>
            </div>
          </Box>
        </Modal>
      </Box>
  )
    : <PageUsers/>
  ) :<ModalOk/>
)}