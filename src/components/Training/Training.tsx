import styles from './Training.module.scss'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&q=80',
    alt: 'Тактическая тренировка',
  },
  {
    src: 'https://images.unsplash.com/photo-1504025468847-0e438279542c?w=800&q=80',
    alt: 'Командная работа',
  },
  {
    src: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&q=80',
    alt: 'Стрелковая подготовка',
  },
]

export default function Training() {
  return (
    <section className={styles.section} id="training">
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>
            Тренировочный <span className={styles.accent}>процесс</span>
          </h2>
          <p className={styles.description}>
            В «АРЕНЕ» мы не просто играем — мы тренируемся. Дети осваивают
            перемещение, стойку, тактическое мышление. Игровая форма делает
            занятия увлекательными и эффективными.
          </p>
          <p className={styles.description}>
            Каждая тренировка включает разминку, отработку навыков и командные
            сценарии. Ребёнок учится принимать решения, работать в&nbsp;команде
            и&nbsp;доводить дело до победы.
          </p>
        </div>
        <div className={styles.gallery}>
          {IMAGES.map((img, i) => (
            <div className={styles.imageWrap} key={i}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
