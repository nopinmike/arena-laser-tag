import { FaPhone, FaVk, FaTelegramPlane, FaMapMarkerAlt, FaUserTie, FaClock } from 'react-icons/fa'
import styles from './ContactsPage.module.scss'

const CONTACT_CARDS = [
  {
    icon: <FaPhone />,
    label: 'Телефон',
    value: '+7 (911) 571-55-22',
    href: 'tel:+79115715522',
    linkText: 'Позвонить',
  },
  {
    icon: <FaVk />,
    label: 'Группа ВКонтакте',
    value: 'arena_velsk',
    href: 'https://vk.com/arena_velsk',
    linkText: 'Перейти в группу',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Адрес',
    value: 'г. Вельск, Архангельская область',
    href: undefined,
    linkText: undefined,
  },
]

export default function ContactsPage() {
  return (
    <div className={styles.page}>
      {/* Header */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Контакты</h1>
          <p className={styles.heroSubtitle}>
            Свяжитесь с нами и запишитесь на пробную тренировку
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.cardsGrid}>
            {CONTACT_CARDS.map((card, i) => (
              <div className={styles.card} key={i}>
                <div className={styles.cardIcon}>{card.icon}</div>
                <p className={styles.cardLabel}>{card.label}</p>
                <p className={styles.cardValue}>{card.value}</p>
                {card.href && (
                  <a
                    href={card.href}
                    className={styles.cardLink}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {card.linkText}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Coach */}
          <div className={styles.coachBlock}>
            <div className={styles.coachIcon}>
              <FaUserTie />
            </div>
            <div className={styles.coachInfo}>
              <h3 className={styles.coachTitle}>Тренер</h3>
              <p className={styles.coachName}>Нопин Максим Владимирович</p>
              <p className={styles.coachDesc}>
                Опытный наставник с многолетним стажем. Поможет раскрыть
                потенциал вашего ребёнка и приведёт к победам!
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div className={styles.scheduleBlock}>
            <div className={styles.scheduleIcon}>
              <FaClock />
            </div>
            <div className={styles.scheduleInfo}>
              <h3 className={styles.scheduleTitle}>Расписание</h3>
              <p className={styles.scheduleText}>
                Тренировки проходят <strong>3 раза в неделю</strong>. Возраст
                участников — <strong>от 6 лет</strong> и старше. Пробная
                тренировка — <strong>бесплатно</strong>!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitle}>
            Записывайтесь <span className={styles.accent}>прямо сейчас</span>!
          </h2>
          <p className={styles.ctaText}>
            Вся жизнь клуба — в наших социальных сетях. Там расписание
            тренировок, фото с игр и ответы на любые вопросы. Присоединяйтесь!
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://vk.com/arena_velsk"
              className={styles.vkBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaVk className={styles.btnIcon} />
              ВКонтакте
            </a>
            <a
              href="#"
              className={styles.tgBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegramPlane className={styles.btnIcon} />
              Телеграм
            </a>
          </div>
          <a href="tel:+79115715522" className={styles.phoneLink}>
            <FaPhone /> +7 (911) 571-55-22
          </a>
        </div>
      </section>
    </div>
  )
}
