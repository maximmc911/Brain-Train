import React, { useState } from 'react'
import axios from 'axios'
const ConventerJson = () => {
  
  const MAIN_URL = `http://localhost:5000/users`;
  const PROFILE_URL = `http://localhost:5000/profile`;

  const MainARR =[];
  const ProfileARR = [];
  const leighMainARR = MainARR.length;
  let leighProfileARR = ProfileARR.length;
 
  /*Получение данных с массива USERS */
  const GetMAinData = async () =>{
    try {
      const {data}= await axios(MAIN_URL);
      for (let index = 0; index < data.length; index++) {
        MainARR.push(data[index])
      }
      const GetProfileData = async () =>{
        try {
          const {data}= await axios(PROFILE_URL);
          for (let index = 0; index < data.length; index++) {
            ProfileARR.push(data[index])
          }
        if (ProfileARR.length !=MainARR.length) {
          for (let index = ProfileARR.length; index < MainARR.length; index++) {
            const NewProfile = MainARR[index];
            const MakeNewProfile ={
              UserID : NewProfile.id ,
              UserName: NewProfile.name,
              UserEmail: NewProfile.email,
              UserLogin: NewProfile.login,
              UserBalans: 0,
              UserAllLessons: [],
              UserFavoriteLessons: [],
              UserMakeLessons:[],
              UserUniver: `Не заполнено`,
              UserProff: `Не заполнено`,
              UserAgeProf: `Не заполнено`,

            }
            await axios.post(`${PROFILE_URL}`, MakeNewProfile)
            console.log(MakeNewProfile);
 
          }
          
        }
        
        } catch (err) {console.log(err.message);    }}
          GetProfileData()
    } catch (err) {console.log(err.message);    }}
      GetMAinData();
  
  
  
  
  
  
  
      /*Получение данных с массива USERS */
    /*   const GetProfileData = async () =>{
        try {
          const {data}= await axios(PROFILE_URL);
          for (let index = 0; index < data.length; index++) {
            ProfileARR.push(data[index])
          }} catch (err) {console.log(err.message);    }}
          GetProfileData() */
        
      
      return (
        <>
     
    </>
  )
}

export default ConventerJson