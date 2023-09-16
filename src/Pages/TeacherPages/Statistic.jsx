import React from 'react'
import HeaderTeacher from '../../header/HeaderTeacher'
import Table from '../../UI/Table/Table'
/*C:\Users\4710707\Desktop\финалка\app\src\UI\Table\Table.jsx */

const Statistic = () => {
  return (
    <>
    <HeaderTeacher/>
        <h1 style={{padding:`50px`, textAlign: `center`}}>
          Отчет по продажам курсов:
          </h1> 
    <Table/>
        
        </>
  )
}

export default Statistic