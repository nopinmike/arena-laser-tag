import { Link } from 'react-router-dom'
import styles from './CallToAction.module.scss'

export default function CallToAction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Стань частью команды <span className={styles.accent}>АРЕНЫ</span>!
        </h2>
        <p className={styles.text}>
          Развивай навыки, укрепляй характер, достигай побед. Пробная тренировка — бесплатно!
        </p>
        <Link to="/contacts" className={styles.btn}>
          Записаться в клуб
        </Link>
      </div>
    </section>
  )
}
