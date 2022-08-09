import React from 'react'

const Footer = () => {
  return (
    
    <div className='container'>
      <div className='footer'>
        <div className='footer__inner'>
          <div className='footer__links'>
            Наши соцсети:
            <div className='footer__slinks'>
              <img src='./img/tg_footer.svg' alt=''/>
              <img src='./img/aaaa__footer.svg' alt=''/>
              <img src='./img/vk_footer.svg' alt=''/>
            </div>
          </div>
          <div className='footer__nav'>
            <a href='#'>Главная</a>
            <a href='#'>Личный кабинет</a>
            <a href='#'>Контакты</a>
            <a href='#'>Конфиденциальность</a>
          </div>
          <div className='footer__links'>
            Наши соцсети:
            <div className='footer__up' onClick={() => window.scrollTo(0, 0)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1 7L7 1L13 7" fill="#FF946E"/>
            <path d="M1 7L7 1L13 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          </div>
        </div>
        <div className='footer_copy'>
          @ Все права защищены.  ООО”Слонум” 2022
        </div>
          
          
        
      </div>
    </div>
  )
}

export default Footer