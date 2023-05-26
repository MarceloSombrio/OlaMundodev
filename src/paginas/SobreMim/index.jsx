import styles from "./Sobremim.module.css"
import fotoCapa from 'assets/sobre_mim_capa.png'
import PostModelo from 'componentes/PostModelo'
import React from 'react'
import fotoSobreMim from 'assets/minha_foto.png'


export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h2 className={styles.subtitulo}>
        Olá, eu sou o Marcelo.
      </h2>

      <img 
        src={fotoSobreMim} 
        alt="Marcelo de terno" 
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
      Sou Analista Industrial com 3 anos de experiência, atuo com indicadores financeiros, controle de estoque e realização de inventário. Em minha função desenvolvi e implementei dashboards, por meio de Power BI e Metabase, além de atuar em outras melhorias nos processos da corporação, para monitoramento e tomadas de decisões. </p>
      <p className={styles.paragrafo}>
      Sou acadêmico em processos gerenciais que será finalizado ainda esse  ano. Também estou em desenvolvimento na área de tecnologia em Front-End, através de cursos na área, como linguagens de marcações como HTML e CSS já concluídos e JavaScript em andamento. Outras habilidades desenvolvidas são Power BI com destaque em linguagem M e DAX.</p>
      <p className={styles.paragrafo}>
      Meu envolvimento na área de tecnologia se dá por uma paixão pessoal, atualmente meu hobby é estudar e criar projetos nessa área, além de jogar futebol e viajar.

    Os idiomas que falo são Português (Nativo) e Inglês.
      </p>
    </PostModelo>
  )
}
