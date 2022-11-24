import { Header } from '../components/Header'
import sobreImg from '../assets/sobre.svg'
import styles from '../styles/pages/sobre.module.css'

export function Sobre () {
  return (
    <>
      <Header title="Um pouco mais sobre mim" image={sobreImg} />
	  <section className={styles.sobreContainer}>
	  <h2 className={styles.sobreTitle}> Daiane dos Anjos, prazer</h2>
      <p className={styles.sobreText}>
	  Sou baiana, moro em Lauro de Freitas, mãe, capricórniana e amo viajar.
	  Eu sou Daiane dos Anjos, sou mãe, esposa, crocheteira, Palmeirense, capricórniana, amo viajar e futura desenvolvedora Front-end. 
    Trabalhei por 15 anos na aréa da saúde, fiquei 10 anos no meu último emprego que foi em um laboratório de analises clinicas, mostrando minha competência e profissionalismo fui promovida para um cargo de liderança, mesmo tendo apenas o ensimo médio completo, através de uma amiga me apaixonei pela área da tecnologia, resolvi que saíria do laboratório para me dedicar exclusivamente aos estudos, começei a estudar por conta própria e fui aprovada para o bootcamp da Reprograma e aqui estou, anciosa pelo meu primeiro emprego na área. 
    </p>
    </section>
	
    </>


  )
}