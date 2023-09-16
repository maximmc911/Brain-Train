import  React, { useRef, useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PageUsers from '../../PageUsers/PageUsers';
import BtnSmall from '../Button/BtnSmall';
import {FcApproval} from 'react-icons/fc'
import ModalMoney from './ModalMoney';
import ModalForm from './ModalForm'
export default function ModalOk() {
  const rootRef = useRef(null);
  const [closeModal, setcloseModal] = useState(false);
  

  return (
  !closeModal ? (

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
              width: 300,
              bgcolor: `var(--bg_window)`,
              border: '2px solid #BBC6C8',
              borderRadius: `var(--radius)`,
              boxShadow: (theme) => theme.shadows[1],
              p: 4,
            }}
          >
            <Typography id="server-modal-title" variant="h6" component="h1" style={{alignItems:`center`}}>
              <div className="modal" style={{alignItems:`center`, display:`flex`, flexDirection:`column`}} >

              <FcApproval
              size={75}/>
              Ваша заявка успешно отправлена
              </div>
            </Typography>
           
            <div className="button"
            style={{display:'flex', justifyContent: `center`, alignItems: `center`, paddingTop: `10px`}}
            onClick={()=> (setcloseModal(true) )}           
            >
          <div className="close">
            <BtnSmall>Назад </BtnSmall>
          </div>
            </div>
          </Box>
        </Modal>
        <div>

        <ModalForm/>
        </div>
      </Box>
  )
    : ( window.location.reload())
  );
}