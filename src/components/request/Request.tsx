import React from 'react'
import Checkbox from '../Checkbox'
import Title from '../Title'
import Price1 from './Price1'

const Request = () => {
  return (
    <div className='request'>
      <div className='columns'>
        <div className='col2'>
          <div className='request__price'>
            <Price1/>
          </div>
        </div>
        <div className='col2'>
          
          <form className='request__form'>
            <Title>Зарегистрируйтесь, чтобы участвовать</Title>
            
            <div className='request__items'>
            <input type='text' className='request__txbx' placeholder='ФИО ребёнка'/>
            <input type='text' className='request__txbx' placeholder='Дата рождения'/>
            <input type='text' className='request__txbx' placeholder='Город'/>
            <input type='text' className='request__txbx' placeholder='Email'/>
            <input type='text' className='request__txbx' placeholder='Пароль'/>
            </div>

            <Checkbox/>

            <button className='btn request__btn'>Учавствовать</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Request