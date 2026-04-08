import { FaTelegramPlane } from 'react-icons/fa'
import styles from './Contacts.module.scss'

export default function Contacts() {
  return (
    <section className={styles.section} id="contacts">
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Готовы начать? Вступайте
          <br />
          в&nbsp;команду <span className={styles.accent}>АРЕНЫ</span>!
        </h2>
        <p className={styles.text}>
          Вся жизнь клуба — в нашем Телеграм-канале. Там расписание тренировок,
          фото с&nbsp;игр и ответы на&nbsp;любые вопросы. Присоединяйтесь!
        </p>
        <a
          href="#"
          className={styles.telegramBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegramPlane className={styles.telegramIcon} />
          Перейти в Телеграм
        </a>
      </div>
    </section>
  )
}
