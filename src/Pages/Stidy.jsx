import React, { useState } from 'react'
import HeaderStidy from '../header/HeaderStidy'
import PageUsers from '../PageUsers/PageUsers'
import s from './Styles/UserPage.module.css'
import UserLessons from '../UI/UserLessons/UserLessons'
import ConventerJson from '../Converter/ConventerJson'


const Stidy = () => {
  const [Open, setOpen] = useState(false)
  const HandleOpen = () =>{
    setOpen(true)
  }
setTimeout(HandleOpen , 500)
/*   window.location.reload() */

  return (
    <>
      <HeaderStidy/>
    <ConventerJson/>
    { Open ? 

    (<div className={s.pageUser}>


        <PageUsers example={false}/>
        
        
      </div>  ) : null
    }

     
  
    </>
  )
}

export default Stidy