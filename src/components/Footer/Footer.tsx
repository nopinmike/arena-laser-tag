import { Link } from 'react-router-dom'
import { FaVk, FaPhone } from 'react-icons/fa'
import styles from './Footer.module.scss'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoMain}>АРЕНА</span>
              <span className={styles.logoSub}>Спортивный клуб лазертага</span>
            </Link>
            <p className={styles.address}>г. Вельск, Архангельская область</p>
          </div>

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>Главная</Link>
            <Link to="/about" className={styles.navLink}>О клубе</Link>
            <Link to="/contacts" className={styles.navLink}>Контакты</Link>
          </nav>

          <div className={styles.contacts}>
            <a href="tel:+79115715522" className={styles.phone}>
              <FaPhone /> +7 (911) 571-55-22
            </a>
            <a
              href="https://vk.com/arena_velsk"
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaVk /> ВКонтакте
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            &copy; РОО Спортивный клуб «АРЕНА», {year}
          </span>
          <a href="#" className={styles.policy}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  )
}
