import Image from "next/image";
import styles from "./page.module.css";
import Presentation from "../components/Presentation";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Presentation />
        <Image src="/perfil.jpg"
          alt="Foto de Mateus Ferreira de Moura"
          width={150}
          height={150}
          style={{ borderRadius: '50%', marginBottom: '1rem' }}
        />
        <Experience />
      </main>
    </div>
  );
}
