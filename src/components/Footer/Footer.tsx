import styles from './Footer.module.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span className={styles.copy}>
          &copy; Спортивный клуб «АРЕНА», {year}
        </span>
        <a href="#" className={styles.policy}>
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  )
}
