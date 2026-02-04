import { useState } from "react";
import styles from "./CheckoutForm.module.scss";

interface CheckoutFormProps {
    totalPrice: number;
    onSubmit: () => void;
}

export const CheckoutForm = ({ totalPrice, onSubmit }: CheckoutFormProps) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [payment, setPayment] = useState<"card" | "cash">("card");

    const isValid = name.trim() && phone.trim() && email.trim();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!isValid) return;

        alert(
            `Заказ оформлен!\n\nСумма: ${totalPrice} ₽\nСпособ оплаты: ${
                payment === "card" ? "Банковская карта" : "Наличные"
            }`
        );

        onSubmit();
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h2 className={styles.sectionTitle}>Данные покупателя</h2>

            <div className={styles.field}>
                <label className={styles.label}>Имя</label>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Иван"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className={styles.field}>
                <label className={styles.label}>Телефон</label>
                <input
                    className={styles.input}
                    type="tel"
                    placeholder="+7..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                    className={styles.input}
                    type="email"
                    placeholder="mail@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <h3 className={styles.paymentTitle}>Способ оплаты</h3>

            <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        checked={payment === "card"}
                        onChange={() => setPayment("card")}
                    />
                    Банковская карта
                </label>

                <label className={styles.radioLabel}>
                    <input
                        type="radio"
                        checked={payment === "cash"}
                        onChange={() => setPayment("cash")}
                    />
                    Наличные
                </label>
            </div>

            <button
                type="submit"
                className={styles.submit}
                disabled={!isValid}
            >
                Оплатить {totalPrice} ₽
            </button>
        </form>
    );
};
