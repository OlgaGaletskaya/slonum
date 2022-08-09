import React from 'react'
import Title from '../Title'

const Diplom = () => {
  return (
    <div className='diplom'>
      <div className='container'>
        <div className='columns'>
          <div className='col2'>
            <div className='diplom__inner'>
              <Title> Выдаём <span>дипломы</span> участникам</Title>
              <div className='diplom__cont'>
                <p>
                  Жюри конкурса рассмотрит работы и выделит победителей по городам и возрастным категориям, а также определит другие номинации, подчеркнув уникальную особенность каждого конкретного рисунка — дипломы получат все дети! 
                </p>
                <p>
                  Скачать диплом можно будет в личном кабинете через сутки после окончания конкурса, дополнительно вышлем его на e-mail.  
                </p>
                <p>
                  Со слоном к победам напролом!
                </p>
              </div>
            </div>
            
          </div>
          <div className='col2'>
            <img src='./img/diplom.png' alt=''/>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Diplom