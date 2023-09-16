import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { randomNumberBetween } from '@mui/x-data-grid/utils/utils';
const PutLessons = ({card, send, dd}) => {
    let user = JSON.parse(localStorage.getItem("user"));
    const URL_LessonsPUT = `http://localhost:5000/profile/${user.id}`;
 
    const res = {
        userID : user.id,
        nameLessons : NameLessons,
        description : Description,
        textLessons : TextLessons,
        priceLessons : Number(PriceLessons),
        comission : comission,
        allprice : allPrice,
        quantity: 0,
      } ;
   


  
      const HandlePay = async () =>{
          try {
              const {data} = await axios.get(URL_LessonsPUT);
             
            console.log(data);
            const userData = data;
        /*   console.log(userData.UserAllLessons); */ //!Путь для заполнения массива
            const userData1 = data;
            userData.UserAllLessons.push(res)
            console.log(userData);
      
           
              await axios.put(`${URL_LessonsPUT}`,{...userData1 ,  ...userData})
            
            console.log(`Заебись`);
          /*   console.log(data); */
           
        } catch (error) {
          console.error(`пиздец`);
        }
       
      
            }
            HandlePay();
          /*   if (checked == true) {
          } */
   
  return (
    <>
    </>
  )
}

export default PutLessons