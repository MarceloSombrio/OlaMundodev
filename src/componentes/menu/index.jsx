import { Link, } from 'react-router-dom'
import Styles from './Menu.module.css'
import React from 'react'
import MenuLink from '../menulink';

export default function Menu() {

  return (
    <header>
        <nav className={Styles.navegacao}>
          <MenuLink to="/">
            Inicio
          </MenuLink>
          <MenuLink to="/SobreMim">
            Sobre Mim
          </MenuLink>
        </nav>
    </header>
  )
}
