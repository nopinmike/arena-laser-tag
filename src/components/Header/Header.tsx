import { useState, useEffect, useCallback } from 'react'
import styles from './Header.module.scss'

const NAV_ITEMS = [
  { label: 'О клубе', href: '#advantages' },
  { label: 'Тренировки', href: '#training' },
  { label: 'Контакты', href: '#contacts' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isMobileOpen])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const headerClass = [
    styles.header,
    isScrolled ? styles.scrolled : '',
  ].join(' ')

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <a href="#" className={styles.logo} onClick={(e) => {
          e.preventDefault()
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}>
          <span className={styles.logoMain}>АРЕНА</span>
          <span className={styles.logoSub}>Спортивный клуб лазертага</span>
        </a>

        <nav className={`${styles.nav} ${isMobileOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.navLink}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacts"
            className={styles.ctaBtn}
            onClick={(e) => handleNavClick(e, '#contacts')}
          >
            Вступить в клуб
          </a>
        </nav>

        <a
          href="#contacts"
          className={styles.ctaBtnDesktop}
          onClick={(e) => handleNavClick(e, '#contacts')}
        >
          Вступить в клуб
        </a>

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
