import styles from "./page.module.css";
import Perfil from "../components/Perfil";
import Minibio from "../components/Minibio";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Perfil />
        <Minibio />
      </section>
    </main>
  );
}
