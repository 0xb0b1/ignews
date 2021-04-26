import { useState } from "react";
import styles from "./styles.module.scss";

export function Header() {
  const [activeLink, setActiveLink] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo" />
        <nav>
          <a className={styles.active}>Home</a>
          <a>Posts</a>
        </nav>
      </div>
    </header>
  );
}
