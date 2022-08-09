import React from 'react'
import Benefits from './components/benefits/Benefits'
import Description from './components/description/Description'
import Diplom from './components/diplom/Diplom'
import Faq from './components/faq/Faq'
import Footer from './components/footer/Footer'
import Header from './components/main/Header'
import Mail from './components/mail/Mail'
import Main from './components/main/Main'
import Plan from './components/Plan/Plan'
import Request from './components/request/Request'
import './style/style.css'

const App = () => {
  return (
    <div>
      <Header/>
      <Main/>
      <Description/>
      <Benefits/>
      <Plan/>
      <Diplom/>
      <Request/>
      <Faq/>
      <Mail/>
      <Footer/>

    </div>
  )
}

export default App