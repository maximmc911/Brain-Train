import React from 'react'
import HeaderStidy from '../../header/HeaderStidy'
import SearchStidy from '../../UI/UserLessons/SearchStidy/SearchStidy'
import s from '../Styles/UserPage.module.css'
import MyLessons from '../../UI/UserLessons/MyLessons/MyLessons'
const StidyLessons = () => {
  return (
    <>
    <HeaderStidy/>
     <div className={s.Search}>
      <MyLessons/>
     </div>
        </>
  )
}

export default StidyLessons