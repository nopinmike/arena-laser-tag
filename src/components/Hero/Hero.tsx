import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <h1 className={styles.title}>
          Лазертаг — это спорт
          <span className={styles.accent}> будущего </span>
          для твоего ребёнка
        </h1>
        <p className={styles.subtitle}>
          Тренировки по тактике, развитие реакции и командный дух
          в&nbsp;клубе «АРЕНА». Запишитесь на первую игру!
        </p>
        <a href="#" className={styles.cta} target="_blank" rel="noopener noreferrer">
          Записаться
        </a>
      </div>
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
