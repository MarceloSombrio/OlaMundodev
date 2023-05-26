import React from 'react'
import styles from './paginanaoencontrada.module.css'
import erro404 from 'assets/erro_404.png'
import BotaoPrincipal from 'componentes/Botaoprincipal'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrado() {
  const navegar = useNavigate();
  
  return (

    <>
    <div className={styles.conteudoContainer}>
        <span className={styles.texto404}> 404
        </span>
        <h1 className={styles.titulo}>
            Ops! Pagina nao encontrada.
        </h1>

        <p className={styles.paragrafo}> Tem certeza que é isso que estava procurando ? 
        </p>
        <p className={styles.paragrafo}> Aguarde uns instantes e recarregue a pagina, ou volte para a pagina inicial.</p>
        <div className={styles.botaoContainer} onClick={() => navegar(-1)}><BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal></div>
        <img className={styles.imagemCachorro} src={erro404} alt="Cachorro vestido de humano" />
    </div>
    <div className={styles.espacoEmBranco}>

    </div>
    </>
  )
}
