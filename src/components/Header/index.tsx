import rocket from "../../assets/rocket.svg";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="rocket" />
      <p>
        to<span>do</span>
      </p>
    </header>
  );
}
