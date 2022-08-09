import React from 'react'

const Timer = () => {
  return (
    <div className='timer'>
        <div className='timer__time'>
            <div className='timer__item'>
              01
              <p>дней</p>
            </div>
            <div className='timer__between'>:</div>
            <div className='timer__item'>09
            <p>часов</p>
            </div>
            <div className='timer__between'>:</div>
            <div className='timer__item'>43
            <p>минут</p>
            </div>
        </div>
        
        
    </div>
  )
}

export default Timer