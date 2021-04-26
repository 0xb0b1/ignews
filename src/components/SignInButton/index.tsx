import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return isUserLoggedIn ? (
    <button
      onClick={() => setIsUserLoggedIn(false)}
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04d361" />
      Paulo Vicente
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => setIsUserLoggedIn(true)}
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in With GitHub
    </button>
  );
}
