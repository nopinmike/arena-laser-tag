import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clubLogo from '../../assets/Logo_PNZh__kopia.png'
import styles from './Header.module.scss'

const NAV_ITEMS = [
  { label: 'Главная', to: '/' },
  { label: 'О клубе', to: '/about' },
  { label: 'Контакты', to: '/contacts' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  useEffect(() => {
    setIsMobileOpen(false)
  }, [location.pathname])

  const headerClass = [
    styles.header,
    isScrolled ? styles.scrolled : '',
  ].join(' ')

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <img
            src={clubLogo}
            alt="Логотип спортивного клуба «АРЕНА»"
            className={styles.logoImage}
          />
        </Link>

        <nav className={`${styles.nav} ${isMobileOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`${styles.navLink} ${location.pathname === item.to ? styles.navLinkActive : ''}`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/contacts" className={styles.ctaBtn}>
            Вступить в клуб
          </Link>
        </nav>

        <Link to="/contacts" className={styles.ctaBtnDesktop}>
          Вступить в клуб
        </Link>

        <button
          className={`${styles.burger} ${isMobileOpen ? styles.burgerOpen : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {isMobileOpen && (
        <div className={styles.overlay} onClick={() => setIsMobileOpen(false)} />
      )}
    </header>
  )
}
