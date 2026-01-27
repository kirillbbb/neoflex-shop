import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__box}>
                    <div className={styles.footer__logo}>QPICK</div>

                    <div className={styles.footer__links}>
                        <Link to="/favorites" className={styles.footer__link}>
                            Избранное
                        </Link>
                        <Link to="/cart" className={styles.footer__link}>
                            Корзина
                        </Link>
                        <a
                            href="https://www.neoflex.ru/contacts"
                            className={styles.footer__link}
                        >
                            Контакты
                        </a>
                    </div>

                    <div className={styles.footer__service}>
                        <a href="https://www.neoflex.ru/about/company"
                           className={styles.footer__link}>
                            Условия сервиса
                        </a>

                        <div className={styles.footer__lang}>
                            <img
                                src="/icons/RU-icon.svg"
                                alt="language"
                                className={styles.footer__langIcon}
                            />
                            <button className={styles.footer__langActive}>Рус</button>
                            <button className={styles.footer__langBtn}>Eng</button>
                        </div>
                    </div>

                    <div className={styles.footer__socials}>
                        <a
                            href="https://vk.com/neoflex_ru"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footer__social}
                        >
                            <img src="/icons/VK-icon.svg" alt="VK" />
                        </a>

                        <a
                            href="https://t.me/neoflexcareers"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footer__social}
                        >
                            <img src="/icons/Telegram-icon.svg" alt="Telegram" />
                        </a>

                        <a
                            href="https://wa.me/79999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.footer__social}
                        >
                            <img src="/icons/Whatsapp-icon.svg" alt="WhatsApp" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};