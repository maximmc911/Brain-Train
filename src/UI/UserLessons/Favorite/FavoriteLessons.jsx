import React, { useEffect, useState } from 'react'
import s from './FavoriteLessons.module.css'
import axios from 'axios';
import Cards from './Cards';
const FavoriteLessons = ({lesson}) => {
    const [useInfo, setUseInfo] = useState([]);
 /* const search =[`купил`, `выполнил`, `создал`]; */
 let user = JSON.parse(localStorage.getItem("user"));

            useEffect(() => { PresentLesson(); }, [])

/*  console.log(URL_USER_LESSON); */
 let URL_USER_LESSON = `http://localhost:5000/profile/${user.id}`
 const PresentLesson = async () =>{

    
    try {
      const {data} = await axios.get(URL_USER_LESSON);
    //   const userData = data;
     
      console.log(`Заебись`);
      switch (lesson) {
        case `создал`:
// console.log(useInfo);

            setUseInfo(data.UserMakeLessons);
            break;
        case `купил`:
          setUseInfo(data.UserAllLessons);
          console.log(`Все работает`);    
          break;
          case `выполнил`:
          setUseInfo(data.UserFavoriteLessons);
            console.log(`Все работает`);
            break;
     
        default:
            break;
     }



  } catch (error) {
    console.error(`пиздец`);
  }
      }

  return (
    <>
    <div className={s.cards}>
    { useInfo.length ?  useInfo.map((card)=>(
         <Cards key={card.id} card={card}/>
    )) : 
<p>Курсы отсутствуют</p>
}
  </div>
   </>
        )
}

export default FavoriteLessons