import { Link } from "react-router-dom";
import heroBg from "../../assets/hero-bg.png";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src={heroBg}
        alt="Команда лазертага в действии"
        className={styles.bgImage}
      />
      <div className={styles.overlay} />
      <div className={styles.container}>
        <p className={styles.location}>г. Вельск, Архангельская область</p>
        <h1 className={styles.title}>
          Лазертаг — это спорт
          <span className={styles.accent}> будущего </span>
          для вашего ребёнка
        </h1>
        <p className={styles.subtitle}>
          Школа лазерного боя в&nbsp;клубе «АРЕНА». Тренировки по&nbsp;тактике,
          развитие реакции и&nbsp;командный дух.
          С&nbsp;6&nbsp;лет&nbsp;и&nbsp;старше!
        </p>
        <div className={styles.actions}>
          <a
            href="https://vk.com/arena_velsk"
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Записаться
          </a>
          <Link to="/about" className={styles.ctaSecondary}>
            Подробнее о клубе
          </Link>
        </div>
      </div>
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
