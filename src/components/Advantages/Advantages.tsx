import { FaUserShield, FaShieldAlt, FaBrain, FaTrophy } from 'react-icons/fa'
import styles from './Advantages.module.scss'

const CARDS = [
  {
    icon: <FaUserShield />,
    title: 'Профессиональные тренеры',
    text: 'Опытные инструкторы с педагогическим подходом. Каждый тренер имеет сертификацию и опыт работы с детьми.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Безопасный спорт',
    text: 'Лазерное оборудование полностью безопасно — без боли, синяков и травм. Полная экипировка для каждого игрока.',
  },
  {
    icon: <FaBrain />,
    title: 'Развитие навыков',
    text: 'Логика, скорость реакции, работа в команде, тактическое мышление — навыки, которые пригодятся в жизни.',
  },
  {
    icon: <FaTrophy />,
    title: 'Награды и разряды',
    text: 'Внутренняя система рейтинга клуба, турниры, медали и звания. Мотивация расти и побеждать.',
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
      </div>
    </section>
  )
}
