import React from 'react'
import Styles from './Banner.module.css'
import circulocolorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.png'

export default function Banner() {
  return (
    <div className={Styles.banner}>
        <div className={Styles.apresentacao}>
            <h1 className={Styles.titulo}> 
            Olá, mundo!
            </h1>
            <p className={Styles.paragrafo}>
            Boas vindas ao meu espaço pessoal! Eu sou Marcelo Luis, Aluno aqui da Alura. Compartilho vários conhecimentos, espero que aprenda algo novo.
            </p>
        </div>

        <div className={Styles.imagens}>
            <img
                className={Styles.circuloColorido}
                src={circulocolorido} 
                alt="Circulo Colorido" 
                aria-hidden={true}
            />
            
            <img 
                className={Styles.minhaFoto}
                src={minhaFoto} 
                alt="Foto do Marcelo de Terno." 
            />
        </div>
    </div>
  )
}
