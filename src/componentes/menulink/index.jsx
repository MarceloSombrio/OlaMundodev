import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import Styles from './MenuLink.module.css'

export default function MenuLink({children, to}) {
  const localizacao = useLocation();

  return (
    <><Link className={`${Styles.link} ${localizacao.pathname === to ? Styles.linkDestacado : ""}`} to={to}>{children}
      </Link></>
  )
}
