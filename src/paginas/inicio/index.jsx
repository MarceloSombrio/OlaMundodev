import React from 'react'
import Styles from './inicio.module.css'

import posts from 'json/posts.json'
import Post from 'componentes/postcard'
import TituloInicio from 'componentes/TituloInicio'

export default function Inicio() {
  return ( 
    <>
      <TituloInicio />
        <ul className={Styles.posts}>
          {posts.map((post) => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
            
  </>  
  )
}
 