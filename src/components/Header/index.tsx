import { ActiveLink } from '../ActiveLink'

import { SignInButton } from '../SignInButton'

import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="Logo" />
        <nav>
          <ActiveLink activeClasName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClasName={styles.active} href="/posts">
            <a>Posts</a>
          </ActiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}
