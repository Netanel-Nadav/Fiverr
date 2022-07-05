import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'
import { logout } from '../store/actions/user.action'


import { Search } from './Search'


export const Navigation = ({ user }) => {

  const [isScroll, setIsScroll] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  useEffect(() => {
    navScroll()
  }, [])


  const navScroll = () => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }

    })
  }


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }



  return (
    <nav className={`${isScroll ? 'scroll' : ''} main-container`}>

      <div className={`${isMenuOpen ? 'open' : ''} main-screen`} onClick={toggleMenu}></div>
      <div className="wrraper flex space-between">
        <div className="burger flex column justify-center" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo-container flex align-center">
          <h1><NavLink to={'/'}>fiverr<span>.</span></NavLink></h1>
        </div>
        <ul className={`${isMenuOpen ? 'open' : ''} clean-list flex align-center`}>
          {user && <li onClick={toggleMenu}><NavLink to={'/MyProfile'}>My Profile</NavLink></li>}
          <li onClick={toggleMenu}><NavLink to={'/Become-a-seller'}>Become a Seller</NavLink></li>
          {!user && <li onClick={toggleMenu}><NavLink to={'/Login'}>Sign In</NavLink></li>}
          {user && <li onClick={toggleMenu}><button onClick={onLogout}>Logout</button></li>}
          {!user && <button>Join</button>}
        </ul>
      </div>
    </nav>
  )
}
