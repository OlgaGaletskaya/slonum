import React from 'react'
import AnimatedImage from './AnimatedImage'
import Timer from './Timer'

const Main = () => {
  return (
    <div className='main'>
        <AnimatedImage/>
        <div className='container'>
            <div className='main__inner'>
                <div className='main__subtitle'>От компании СлонУМ</div>
                <div className='main__title'>
                Всероссийский конкурс Детского рисунка
                </div>
                <div className='main__cont'>
                Учавствуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов
                </div>
                <div className='main__action'>
                    <div className='btn'>Участвовать</div>
                    <Timer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main