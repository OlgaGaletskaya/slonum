import React from 'react'

const Checkbox = () => {
  return (
    <div>
        <div className='checkbox'>
              <input type='checkbox' className='checkbox__chbx'/>
              
                <div className='checkbox__lbl' >
                    Отправляя данные я соглашаюсь с  
                    <a href='#'> Условиями конкурса  </a>
                    и 
                    <a href='#'> Политикой обработки данных </a>
                </div>
              
              
            </div>
    </div>
  )
}

export default Checkbox