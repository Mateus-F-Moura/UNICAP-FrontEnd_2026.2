import styles from "./page.module.css";
import Minibio from "../components/Minibio";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.card}>
        <Minibio />
      </section>
    </main>
  );
}
