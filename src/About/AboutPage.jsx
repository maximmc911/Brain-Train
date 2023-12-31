import React from 'react'
import s from './AboutPage.module.css'
import {GiBrain} from 'react-icons/gi'
import {FaGears} from 'react-icons/fa6'
import {FcIdea} from 'react-icons/fc'
const About = () => {
  return (
    <>
    <div className={s.logo}>
      <h1>Brain Train</h1>

    </div>
    <div className={s.text}>
      <h2>Помогаем учиться, а также создавать свои курсы и обучать</h2>
      <h3>Первые учебные материалы были размещены на платформе в 2023 году.
         Сегодня среди охваченных курсами тем: программирование, информатика, 
         математика, статистика, биология и биоинформатика, 
         инженерно-технические и естественные науки, а также затрагиваются темы
         различных хобби, которыми с удовольствием делятся наши авторы. 
         Активно развиваем онлайн-курсы, также Brain Train 
         активно развивает направление адаптивного обучения, где каждый сможет 
         изучать материал, подобранный индивидуально под свой уровень знаний.</h3>

    </div>
        <div className={s.say}>
         <blockquote className={s.quote}>
  <p>"Важно не количество знаний, а качество их. 
    Можно знать очень многое, не зная самого нужного."</p>
  <cite>Толстой Лев Николаевич</cite>
</blockquote>
         <blockquote className={s.quote}>
  <p>"Все дело в мыслях. Мысль — начало всего. 
    И мыслями можно управлять. 
    И поэтому главное дело совершенствования: работать над мыслями."</p>
  <cite>Толстой Лев Николаевич</cite>
</blockquote>

        </div>
<h2 className={s.about}>
  Наши ценности:
</h2>
<div className={s.cards}>
  <div className={s.card}>
    <div className={s.name_card}>
      <GiBrain
      size={40}/>
      <p>Процесс</p>
      <p>__________________</p>
    </div>
    <div className={s.text}>
      <p>Для нас важно, чтобы обучение было максимально 
        продуктивное для вас в любое удобное время</p>
       
    </div>
  </div>
  <div className={s.card}>
    <div className={s.name_card}>
      <FcIdea
      size={40}/>
      <p>Платформа</p>
      <p>__________________</p>
    </div>
    <div className={s.text}>
      <p>Открытый доступ к онлайн-курсам и возможность 
          создания собственного образовательного материала.</p>
    </div>
  </div>
  <div className={s.card}>
    <div className={s.name_card}>
    <FaGears
    size={40}/>
      <p>#dreamteam</p>
      <p>__________________</p>
    </div>
    <div className={s.text}>
      <p>Команда Stepik — это команда энтузиастов, 
        мечтающих сделать мир образования лучше.</p>
    </div>
  </div>
</div>
<div className={s.end}>
  <p>
  Brain Train — многофункциональная и гибкая платформа 
  для создания образовательных материалов. Вы можете 
  создавать онлайн курсы, интерактивные уроки с видео и 
  различными типами заданий для учащихся, приватные курсы 
  для ограниченной аудитории, проводить олимпиады и конкурсы,
   запускать программы профессиональной переподготовки и повышения
   квалификации, а также обучать своих сотрудников и клиентов.
  </p>
</div>
    </>
  )
}

export default About