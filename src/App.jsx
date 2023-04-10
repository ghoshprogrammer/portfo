import React, { useState } from 'react'
import Contact from './component/contact/Contact'
import Intro from './component/intro/Intro'
import  Portfolio  from './component/portfolio/Portfolio'
import Testimonial from './component/testimonial/Testimonial'
import Topbar from './component/topbar/Topbar'
import Work from './component/work/Work'
import './app.scss'
import Menu from './menu/Menu'



const App = () => {
  const [openMenu,setOpenMenu]=useState(false)
  return (
    <div className='app'>
        <Topbar openMenus={openMenu} setOpenMenu={setOpenMenu} />
        <Menu openMenus={openMenu} setOpenMenu={setOpenMenu}/>
        <div className="sections">
          <Intro/>
          <Portfolio/>
          <Work/>
          <Testimonial/>
          <Contact/>
        </div>
    </div>
  )
}

export default App