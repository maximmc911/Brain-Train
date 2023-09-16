import React, { useState } from 'react'
import HeaderTeacher from '../header/HeaderTeacher'
import PageUsers from '../PageUsers/PageUsers'
import ConventerJson from '../Converter/ConventerJson'

const Teacher = () => {
  const [Open, setOpen] = useState(false)
  const HandleOpen = () =>{
    setOpen(true)
  }
 
setTimeout(HandleOpen , 500)
  return (
    <>
    <HeaderTeacher/>
    <ConventerJson/>
    { Open ? 
    (<PageUsers example={true}/>)
    : null}
    </>
  )
}

export default Teacher