import React from 'react'
import OpenDialog3 from '../ModalWindow/OpenDialog3';
import axios from 'axios';

export const AxiosPut = ({NameLessons, Description,checked, TextLessons, PriceLessons, comission }) => {
  let user = JSON.parse(localStorage.getItem("user"));
    
  const GeneratorIDLesson = () =>{
      
    return Math.floor(Math.random()*1000);
  }
  
 
let ID = GeneratorIDLesson()


  let id = user.id;
  let allPrice = Number(PriceLessons) + Number(comission);
  /* console.log(id); 
      console.log(NameLessons, Description,checked, TextLessons, PriceLessons, comission);
     */
      const res = {
      userID : user.id,
      nameLessons : NameLessons,
      description : Description,
      textLessons : TextLessons,
      priceLessons : Number(PriceLessons),
      comission : comission,
      allprice : allPrice,
      quantity: 0,
      id: ID,
    } ;
  const URL_ADMIN = `http://localhost:5000/profile/1`;
  const URL_Lessons = `http://localhost:5000/profile/${id}`;

    const HandlePay = async () =>{
        try {
          const {data} = await axios.get(URL_Lessons);
          const userData = data;
          const userData1 = data;
          console.log(data);
          console.log(userData);
          userData.UserMakeLessons.push(res)
          console.log(userData);
    
         
            await axios.put(`${URL_Lessons}`,{...userData1 ,  ...userData})
          
          console.log(`Заебись`);
          console.log(data);
          const HandlePayAdmin = async() =>{
            try {
              const {data} = await axios.get(URL_ADMIN);
              const userData = data;
              console.log(userData);
              
              userData.MyMoney= (Number(userData.MyMoney)+ Number(res.comission));
              console.log(userData);
             
              
              await axios.put(`${URL_ADMIN}`, {...data , ...userData})
           
            } catch (error) {
      
              console.log(`не работает`);
            }
              }  
              HandlePayAdmin()
      } catch (error) {
        console.error(`пиздец`);
      }
     
    
          }
          if (checked == true) {
            HandlePay();
        }
 
    return (
    <>
    
    </>
  )
}

export default AxiosPut