import { Link } from "react-router-dom";
import { FaVk, FaPhone } from "react-icons/fa";
import offerPdf from "../../assets/pdf/KP_Arena.pdf";
import registrationPdf from "../../assets/pdf/SvYuL.pdf";
import charterPdf from "../../assets/pdf/Ustav.pdf";
import styles from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  const documents = [
    {
      href: registrationPdf,
      title: "Свидетельство о регистрации",
    },
    {
      href: charterPdf,
      title: "Устав организации",
    },
    {
      href: offerPdf,
      title: "Коммерческое предложение",
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoMain}>АРЕНА</span>
              <span className={styles.logoSub}>Спортивный клуб лазертага</span>
            </Link>
            <p className={styles.address}>г. Вельск, Архангельская область</p>
          </div>

          <nav className={styles.nav}>
            <Link to="/" className={styles.navLink}>
              Главная
            </Link>
            <Link to="/about" className={styles.navLink}>
              О клубе
            </Link>
            <Link to="/contacts" className={styles.navLink}>
              Контакты
            </Link>
          </nav>

          <div className={styles.documents}>
            <p className={styles.documentsTitle}>Документы</p>
            <div className={styles.documentsList}>
              {documents.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.href}
                  className={styles.documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {doc.title}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.contacts}>
            <a href="tel:+79115715522" className={styles.phone}>
              <FaPhone /> +7 (911) 571-55-22
            </a>
            <a
              href="https://vk.com/arena_velsk"
              className={styles.social}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaVk /> ВКонтакте
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.copy}>
            &copy; РОО Спортивный клуб «АРЕНА», {year}
          </span>
          <a href="#" className={styles.policy}>
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
