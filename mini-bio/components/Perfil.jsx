import Image from "next/image";
import styles from "./Perfil.module.css";

export default function Perfil() {
  return (
    <div className={styles.profile}>
      <Image
        src="/perfil.jpg"
        alt="Foto de Mateus Ferreira de Moura"
        width={180}
        height={180}
        priority
        className={styles.avatar}
      />

      <div className={styles.identity}>
        <h2 className={styles.name}>Mateus Ferreira de Moura</h2>
        <p className={styles.role}>Desenvolvedor Full Stack</p>
      </div>
    </div>
  );
}