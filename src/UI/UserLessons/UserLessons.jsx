import React, { useState } from 'react'
import s from './UserLessons.module.css'
import Rewrite from '../RewritePage/Rewrite'
import FavoriteLessons from './Favorite/FavoriteLessons';

const UserLessons = ({teacher, rewrite}) => {
    // Эту поебень связать с ссылками в аксиосе
const search =[`купил`, `выполнил`, `создал`];
  return (
    <>
    {rewrite ?  
    (<div className={s.modal}>
        {!teacher ?
       ( <div className={s.lessons}>
    
        <div className={s.lessons_active}>
            <h1 className={s.write}>
                Приобретенные курсы:
            </h1>
            <div className={s.book}>
                <FavoriteLessons lesson={search[0]}/>
           
            </div>
        </div>
        <div className={s.lessons_finish}>
            <h1 className={s.write}>
                Законченные курсы:
            </h1>
            <div className={s.book}>
            <FavoriteLessons lesson={search[1]}/>
            </div>
        </div>
        </div>):
        (<div className={s.lessons}>
            <div className={s.lessons_active}>
            <h1 className={s.write}>
                Созданные курсы:
            </h1>
            <div className={s.book}>
            <FavoriteLessons lesson={search[2]}/>
            </div>
        </div>
        </div>
        )
         }

    </div>
     ) : (<div className={s.lessons}>
        <Rewrite teacher={teacher}/>
     </div>)}
     
    </>
  )
}

export default UserLessons