import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HeaderStidy from '../../header/HeaderStidy'
import s from '../Styles/UserPage.module.css'
import SearchStidy from '../../UI/UserLessons/SearchStidy/SearchStidy';

const StidySearch = () => {
  const [Search, setSearch] = useState('')

  return (
    <>
    <HeaderStidy/>

    <div className={s.placeHolder}>
      <SearchStidy/>
    </div>
      </>
  )
}

export default StidySearch