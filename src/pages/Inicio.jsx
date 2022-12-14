import { Header } from "../components/Header";
import homeImg from "../assets/home.svg";
import { CalendarBlank, FileCode, Alien } from "phosphor-react";
import styles from "../styles/pages/inicio.module.css";

export function Inicio() {
  return (
    <>
      <Header title="Meu site pessoal" image={homeImg} />
      <div className={styles.inicioContainer}>
        <section className={styles.inicioCard}>
          <Alien className={styles.inicioCode} size={32} /> 
          <h2 className={styles.inicioTitle}>Sobre</h2>
          <p className={styles.inicioText}>
            Conto um pouquinho sobre mim, como começei na tecnologia, gostos e curiosidades.
          </p>
        </section>
        <section className={styles.inicioCard}>
        <FileCode className={styles.inicioCode}size={32} />
          <h2 className={styles.inicioTitles}>Portfólio</h2>
          <p className={styles.inicioText}>
            Mostro meu portfólio, tudo o que aprendi até o momento e os projetos que criei enquanto estudo
            programação.
          </p>
        </section>
        <section className={styles.inicioCard}>
          <CalendarBlank className={styles.inicioCode} size={32} />  
          <h2 className={styles.inicioTitles}>Contato</h2>
          <p className={styles.inicioText}>
            Entre em contato comigo. Seja para entrevistas de emprego como deva
            ou para trocarmos ideias sobre os estudos.
          </p>
        </section>
      </div>
    </>
  );
}
