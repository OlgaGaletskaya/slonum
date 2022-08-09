import React from 'react'

const Price1 = () => {
  return (
    <div>
        <div className='price'>
              <div className='price__act'>
                <p>
                  Скидка за репост                
                </p>
              </div>
              <div className='price__cont'>
                <p>Стоимость участия:</p>
                <p className='price__num'>149&#8381; </p>
                <p>При наличии репоста в соцсетях :&#41;</p>
              </div>
              <div className='price__footer'>
                <p>
                  Получить скидку:
                </p>
                <div className='price__links'>
                  <img src='./img/vk_link.svg' alt=''/>
                  <img src='./img/ok_link.svg' alt=''/>
                </div>
              </div>
            </div>
    </div>
  )
}

export default Price1