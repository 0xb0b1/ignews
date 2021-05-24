import { signIn, signOut, useSession } from "next-auth/client";

import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./styles.module.scss";

export function SignInButton() {
  const [session] = useSession();

  if (session) {
    return (
      <button type="button" className={styles.signInButton}>
        <FaGithub color="#04d361" />
        {session.user.name}
        <FiX
          className={styles.closeIcon}
          color="#CCC"
          onClick={() => signOut()}
        />
      </button>
    );
  }

  return (
    <button
      onClick={() => signIn("github")}
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#eba417" />
      Sign in With GitHub
    </button>
  );
}
