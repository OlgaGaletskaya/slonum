import React from 'react'
import BenefitItem from './BenefitItem'
import Title from '../Title'

const Benefits = () => {
    const benefits = [
        {id:1, img:'./img/benefits/star.svg', cont:'Шанс занять 1 место — в вашем городе и по всей России'},
        {id:2, img:'./img/benefits/winner.svg', cont:'Развитие самостоятельности + свободное время для родителей ;)'},
        {id:3, img:'./img/benefits/certification.svg', cont:'Персональный диплом в разных номинациях каждому участнику'},
        {id:4, img:'./img/benefits/gift.svg', cont:'Призы и скидки для подписчиков и авторизованных пользователей'},
        {id:5, img:'./img/benefits/email.svg', cont:'Бесплатный диплом на email — через 1 день после конкурса'},
        {id:6, img:'./img/benefits/vk.svg', cont:'Публикация работ победителей во ВКонтакте. Подписывайтесь!'},
    ]
  return (
    <div className='benefits'>
        <div className='container'>
            <div className='benefits__inner'>
                <Title> Для чего <span>нужно</span> участвовать </Title>
                <div className='benefits__cont'>
                    {benefits.map (benefit => 
                        <BenefitItem key = {benefit.id} img={benefit.img} cont={benefit.cont}/>
                        )}
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Benefits