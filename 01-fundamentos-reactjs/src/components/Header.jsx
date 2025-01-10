import styles from "./Header.module.css";
import logo from "../assets/Ignite-logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo" />
      <strong>Iginite Feed</strong>
    </header>
  );
}
