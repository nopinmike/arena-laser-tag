import {
  FaCrosshairs,
  FaRunning,
  FaBrain,
  FaUsers,
  FaBullseye,
  FaEye,
  FaGift,
  FaSmile,
  FaCalendarAlt,
  FaMedal,
  FaChessKnight,
  FaHeartbeat,
  FaHandshake,
  FaStar,
} from 'react-icons/fa'
import coachPhoto from '../../assets/coach.png'
import styles from './AboutPage.module.scss'

const DEVELOPS = [
  { icon: <FaHeartbeat />, text: 'Физическую выносливость' },
  { icon: <FaBullseye />, text: 'Скорость реакции' },
  { icon: <FaUsers />, text: 'Командное взаимодействие' },
  { icon: <FaChessKnight />, text: 'Стратегическое мышление' },
  { icon: <FaEye />, text: 'Концентрацию и внимание' },
]

const TRAINING_BLOCKS = [
  {
    icon: <FaCrosshairs />,
    title: 'Техническая подготовка',
    text: 'Изучение оборудования, правил вида спорта и безопасности игры, отработка точности стрельбы и обращение с инвентарём.',
  },
  {
    icon: <FaBrain />,
    title: 'Тактическая подготовка',
    text: 'Разбор игровых стратегий, обучение командной работе, умение принимать решения в условиях ограниченного времени.',
  },
  {
    icon: <FaRunning />,
    title: 'Общая физическая подготовка',
    text: 'Упражнения на развитие выносливости, скорости, ловкости и координации.',
  },
]

const WHY_US = [
  { icon: <FaGift />, text: 'Пробная тренировка бесплатно для новичков' },
  { icon: <FaSmile />, text: 'Комфортный старт для любого возраста' },
  { icon: <FaHandshake />, text: 'Дружный коллектив единомышленников' },
  { icon: <FaCalendarAlt />, text: 'Круглогодичный тренировочный процесс' },
  { icon: <FaMedal />, text: 'Региональные и Всероссийские соревнования' },
]

const BENEFITS = [
  {
    icon: <FaStar />,
    title: 'Развитие лидерских качеств',
    text: 'Учись вести за собой команду и принимать важные решения.',
  },
  {
    icon: <FaHeartbeat />,
    title: 'Яркие эмоции',
    text: 'Каждая игра — это новые вызовы и незабываемые впечатления.',
  },
  {
    icon: <FaBrain />,
    title: 'Тренировка ума и тела',
    text: 'Лазерный бой — это не только физическая активность, но и постоянная работа мозга.',
  },
  {
    icon: <FaUsers />,
    title: 'Командный дух',
    text: 'Научись доверять партнёрам и действовать сообща.',
  },
]

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Hero banner */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroLabel}>Школа лазерного боя</p>
          <h1 className={styles.heroTitle}>
            Спортивный клуб <span className={styles.accent}>«АРЕНА»</span>
          </h1>
          <p className={styles.heroSubtitle}>
            г. Вельск, Архангельская область
          </p>
          <p className={styles.heroTagline}>
            Твой путь к первым победам начинается у нас!
          </p>
          <div className={styles.heroBadges}>
            <div className={styles.badge}>
              <span className={styles.badgeValue}>6+</span>
              <span className={styles.badgeLabel}>возраст</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeValue}>3</span>
              <span className={styles.badgeLabel}>раза в неделю</span>
            </div>
          </div>
        </div>
      </section>

      {/* What is laser tag */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Что такое <span className={styles.accent}>лазерный бой</span>?
          </h2>
          <p className={styles.sectionText}>
            Лазерный бой — это динамичная командная игра, сочетающая в себе
            элементы стратегии, тактики и физической подготовки. Цель игры —
            деактивировать соперников лучом ИК-излучения, используя тагеры
            (оружие в лазертаге) и выполнить поставленную задачу в зависимости
            от игровой дисциплины.
          </p>
          <p className={styles.sectionTextBold}>
            Это не просто игра, а настоящий спорт, который развивает:
          </p>
          <div className={styles.developsList}>
            {DEVELOPS.map((item, i) => (
              <div className={styles.developsItem} key={i}>
                <div className={styles.developsIcon}>{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training process */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Что тебя ждёт на <span className={styles.accent}>тренировках</span>
          </h2>
          <div className={styles.trainingGrid}>
            {TRAINING_BLOCKS.map((block, i) => (
              <article className={styles.trainingCard} key={i}>
                <div className={styles.trainingIcon}>{block.icon}</div>
                <h3 className={styles.trainingCardTitle}>{block.title}</h3>
                <p className={styles.trainingCardText}>{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Почему выбирают <span className={styles.accent}>нас</span>?
          </h2>
          <div className={styles.whyList}>
            {WHY_US.map((item, i) => (
              <div className={styles.whyItem} key={i}>
                <div className={styles.whyIcon}>{item.icon}</div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Преимущества <span className={styles.accent}>лазерного боя</span>
          </h2>
          <div className={styles.benefitsGrid}>
            {BENEFITS.map((b, i) => (
              <article className={styles.benefitCard} key={i}>
                <div className={styles.benefitIcon}>{b.icon}</div>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitText}>{b.text}</p>
              </article>
            ))}
          </div>
          <div className={styles.equipmentNote}>
            <FaGift className={styles.equipmentNoteIcon} />
            <span>Всё оборудование предоставляется бесплатно!</span>
          </div>
        </div>
      </section>

      {/* Coach */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            <span className={styles.accent}>Тренер</span>
          </h2>
          <div className={styles.coach}>
            <div className={styles.coachAvatar}>
              <img
                src={coachPhoto}
                alt="Портрет главного тренера спортивного клуба «АРЕНА»"
                className={styles.coachPhoto}
              />
            </div>
            <div className={styles.coachInfo}>
              <h3 className={styles.coachName}>Нопин Максим Владимирович</h3>
              <p className={styles.coachDesc}>
                Опытный наставник с многолетним стажем, который поможет раскрыть
                ваш потенциал и приведёт к победам!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className={styles.closingCta}>
        <div className={styles.container}>
          <h2 className={styles.closingTitle}>
            Не упусти шанс стать частью мира <span className={styles.accent}>ЛАЗЕРТАГА</span>
          </h2>
          <p className={styles.closingText}>
            Лазерный бой — это не просто игра, это стиль жизни!
          </p>
        </div>
      </section>
    </div>
  )
}
