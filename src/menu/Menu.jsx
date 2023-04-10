import React from 'react'
import './menu.scss'

const Menu = ({openMenus,setOpenMenu}) => {
  return (
    <div className={openMenus?'menu active':'menu'}>
        <ul>
            <li onClick={()=>setOpenMenu(!openMenus)}><a href="#intro">Home</a></li>
            <li onClick={()=>setOpenMenu(!openMenus)}><a href="#portfolio">Portfolio</a></li>
            <li onClick={()=>setOpenMenu(!openMenus)}><a href="#works">Works</a></li>
            <li onClick={()=>setOpenMenu(!openMenus)}><a href="#testimonial">Testimonial</a></li>
            <li onClick={()=>setOpenMenu(!openMenus)}><a href="#contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Menu