import React from 'react'
import Styles from './Post.module.css'
import { Link } from 'react-router-dom'
import BotaoPrincipal from 'componentes/Botaoprincipal'

export default function PostCard({ post }) {
  return (
    <Link to ={`/posts/${post.id}`}>
      <div className={Styles.post}>
          <img className={Styles.capa} src={`/assets/post/${post.id}/capa.png`} alt="Imagem da capa do post" />

          <h2 className={Styles.titulo}>{post.titulo}</h2>

          <BotaoPrincipal>Ver</BotaoPrincipal>
      </div>
    </Link>
  )
}
