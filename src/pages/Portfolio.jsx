import { Header } from "../components/Header";
import portfolioImg from "../assets/portfolio.svg";
import styles from "../styles/pages/portfolio.module.css";
import { FaGithub } from "react-icons/Fa";

export function Portfolio() {
  return (
    <>
      <Header title="Meus projetinhos" image={portfolioImg} />
      <section className={styles.portfolioContainer}>
        <h2 className={styles.portfolioText}> Veja aqui meu gitHub</h2>
        <a className={styles.portfolioContainer}
          href="https://github.com/daianedosanjos"
          target="_blank">
          <FaGithub className={styles.portfolioLink} />
        </a>
      </section>
    </>
  );
}
