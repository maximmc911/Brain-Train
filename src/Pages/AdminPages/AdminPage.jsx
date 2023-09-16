import React from 'react'
import HeaderAdmin from '../../header/HeaderAdmin'
import s from '../Styles/UserPage.module.css'
import Rewrite from '../../UI/Admin/Rewrite'
const AdminPage = () => {
  return (
    <>
    <HeaderAdmin/>
   <div className={s.AdminHeader}>
    <h1>Страница администратора</h1>
    <Rewrite/>
   </div>
    </>
  )
}

export default AdminPage