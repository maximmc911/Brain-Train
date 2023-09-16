import  React, { useRef, useState } from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '../UI/Button/Button';
import AboutPage from './AboutPage'
export default function ServerModal() {
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
              width: 800,
              bgcolor: `var(--bg_window)`,
              border: '2px solid #BBC6C8',
              borderRadius: `var(--radius)`,
              boxShadow: (theme) => theme.shadows[1],
              p: 4,
            }}
          >
            <Typography id="server-modal-title" variant="h6" component="h2">
              Добро пожаловать на сайт Brain Train!
            </Typography>
            <Typography id="server-modal-description" sx={{ pt: 2 }}>
             Регистрируясь на нашем сайте, вы сможете получить новые знания, <br/>
              обучиться новой востребованной профессии или поделиться опытом!
            </Typography>
            <div className="button"
            style={{display:'flex', justifyContent: `end`}}
            onClick={()=> setcloseModal(true)}
            >
            <Button >Понятно</Button>
            </div>
          </Box>
        </Modal>
      </Box>
  )
    : <AboutPage/>
  );
}