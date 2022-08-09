import React from 'react'


const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <div className='header__inner'>
                <div className='header__logo'>
                    <img src='./img/logo.svg'/>
                    <p>Слон<span>УМ</span> </p>
                </div>
                
                <button className='btn2'>Войти</button>
            </div>
        </div>
    </header>
  )
}

export default Header