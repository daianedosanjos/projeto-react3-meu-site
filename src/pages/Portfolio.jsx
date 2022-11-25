import { Header } from "../components/Header";
import portfolioImg from "../assets/portfolio.svg";
import styles from "../styles/pages/portfolio.module.css";
import { GithubLogo } from "phosphor-react";

export function Portfolio() {
  return (
    <>
      <Header title="Meus projetinhos" image={portfolioImg} />
      <section className={styles.portfolioContainer}>
        <h2 className={styles.portfolioTitle}> Clique e veja os projetos no meu gitHub</h2>
        <a className={styles.portfolioContainer}
          href="https://github.com/daianedosanjos"
          target="_blank">
          <GithubLogo className={styles.portfolioLink} size={32} /> 
        </a>
      </section>
    </>
  );
}
