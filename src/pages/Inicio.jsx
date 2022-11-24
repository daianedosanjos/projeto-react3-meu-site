import { Header } from '../components/Header'
import homeImg from '../assets/home.svg'
import { BiCodeCurly } from "react-icons/Bi"
import { BsJournalCode } from "react-icons/Bs"
import { GiLifeInTheBalance } from "react-icons/Gi"
import styles from '../styles/pages/inicio.module.css'


export function Inicio() {
  return (
    <>
      <Header title="Meu site pessoal" image={homeImg} />

      <div className={styles.inicioContainer}>

      <section className={styles.inicioCard}>
        <GiLifeInTheBalance className={styles.inicioCode}/>
        <h2 className={styles.inicioTitle}>vida</h2>
          <p className={styles.inicioText}>Eu conto um pouquinho sobre mim, minha formação, a história da minha migração de carreira, gostos e curiosidades.</p>
        </section>
        
      
      <section className={styles.inicioCard}>
      <BiCodeCurly className={styles.inicioCode}/>
      <h2 className={styles.inicioTitles}>Código</h2>
      <p className={styles.inicioText}>Mostro meu portfólio. Tudo o que aprendi até o momento dando destaque para alguns dos projetos que criei enquanto estudo programação.</p>
        </section>
        
      <section className={styles.inicioCard}>
        <BsJournalCode className={styles.inicioCode}/>
        <h2 className={styles.inicioTitles}>Contato</h2>
        <p className={styles.inicioText}> Entre em contato comigo. Seja para entrevistas de emprego como deva ou para trocarmos ideias sobre os estudos.</p>
        </section>
      </div>
    </>
  )
}