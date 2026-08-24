import styles from "./Minibio.module.css";
import Perfil from "../components/Perfil";

export default function Minibio() {
  return (
    <>
      <Perfil />
      <section className={styles.bio}>
        <h1 className={styles.title}>Sobre mim</h1>
        <p className={styles.text}>
          Desenvolvedor Full Stack com foco em Back-End, especializado em Java e Spring
          Boot. Estudante de Sistemas para Internet na UNICAP pelo programa Embarque
          Digital.
        </p>
      </section>
    </>
  );
}