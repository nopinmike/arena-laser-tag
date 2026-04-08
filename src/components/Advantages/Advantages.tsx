import { FaUserShield, FaShieldAlt, FaBrain, FaTrophy, FaGift } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './Advantages.module.scss'

const CARDS = [
  {
    icon: <FaUserShield />,
    title: 'Профессиональный тренер',
    text: 'Опытный наставник с многолетним стажем и педагогическим подходом к каждому ребёнку.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Безопасный спорт',
    text: 'Лазерное оборудование полностью безопасно — без боли и синяков. Всё оборудование предоставляется бесплатно!',
  },
  {
    icon: <FaBrain />,
    title: 'Развитие навыков',
    text: 'Выносливость, скорость реакции, тактическое мышление, работа в команде — навыки на всю жизнь.',
  },
  {
    icon: <FaTrophy />,
    title: 'Соревнования и рост',
    text: 'Участие в региональных и всероссийских соревнованиях. Покоряй спортивные вершины вместе с командой!',
  },
  {
    icon: <FaGift />,
    title: 'Пробная тренировка бесплатно',
    text: 'Новичок? Приходи на пробную тренировку без оплаты. Комфортный старт для любого возраста!',
  },
]

export default function Advantages() {
  return (
    <section className={styles.section} id="advantages">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Почему выбирают <span className={styles.accent}>АРЕНУ</span>
        </h2>
        <p className={styles.lead}>
          Мы создали клуб, где спорт, дисциплина и удовольствие идут рука об руку
        </p>
        <div className={styles.grid}>
          {CARDS.map((card, i) => (
            <article className={styles.card} key={i}>
              <div className={styles.iconWrap}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.moreWrap}>
          <Link to="/about" className={styles.moreLink}>
            Узнать больше о клубе →
          </Link>
        </div>
      </div>
    </section>
  )
}
