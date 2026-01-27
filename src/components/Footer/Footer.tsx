import styles from './Footer.module.scss';
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__box}>
                    <div className={styles.footer__logo}>QPICK</div>

                    <div className={styles.footer__links}>
                        <Link to="/favorites">Избранное</Link>
                        <a href="#">Корзина</a>
                        <a href="#">Контакты</a>
                    </div>

                    <div className={styles.footer__service}>
                        <a href="#">Условия сервиса</a>

                        <div className={styles.footer__lang}>
                            <img
                                src="/icons/RU-icon.svg"
                                alt="language"
                                className={styles.footer__langIcon}
                            />
                            <button className={styles.footer__langActive}>Рус</button>
                            <button>Eng</button>
                        </div>
                    </div>

                    <div className={styles.footer__socials}>
                        <img src="/icons/VK-icon.svg" alt="VK" />
                        <img src="/icons/Telegram-icon.svg" alt="Telegram" />
                        <img src="/icons/Whatsapp-icon.svg" alt="WhatsApp" />
                    </div>
                </div>
            </div>
        </footer>
    );
};