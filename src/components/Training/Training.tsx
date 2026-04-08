import training1 from '../../assets/training-1.png'
import training2 from '../../assets/training-2.png'
import training3 from '../../assets/training-3.png'
import styles from './Training.module.scss'

const IMAGES = [
  { src: training1, alt: 'Тактическая тренировка' },
  { src: training2, alt: 'Командная работа' },
  { src: training3, alt: 'Юные спортсмены' },
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
            технику стрельбы, перемещение, стойку, тактическое мышление.
            Игровая форма делает занятия увлекательными и эффективными.
          </p>
          <p className={styles.description}>
            Каждая тренировка включает техническую подготовку, разбор игровых
            стратегий и&nbsp;упражнения на&nbsp;выносливость, скорость
            и&nbsp;координацию. Тренировки проходят 3&nbsp;раза в&nbsp;неделю.
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
