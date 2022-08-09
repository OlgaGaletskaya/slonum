import React from 'react'
import Checkbox from '../Checkbox'

const Mail = () => {
  return (
    <div className='mail'>
      
        <div className='mail__inner'>
          <div className='mail__title'>Подпишись на нашу рассылку</div>
          <p>Обещаем присылать только самое важное и интересное :&#41;</p>
          <form className='mail__form'>
            <div className='mail__fi'>
              <input type='text' placeholder='Email'/>
              <div className='btn'>Отправить</div>
            </div>
            <Checkbox/>
          </form>
        </div>
      
    </div>
  )
}

export default Mail