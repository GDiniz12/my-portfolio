"use client"

import Footer from "../components/Footer/Footer";
import styles from "./contact.module.css";
import { handleSubmit } from "../submit";
import { useState } from "react";

export default function Contact(form: FormData) {
    const [send, setSend] = useState(false);
    const [message, setMessage] = useState("");

    async function theSubmit() {
        setSend(true);
        try {
            const res = await handleSubmit(form);
            setMessage(res.message);
        } catch (err) {
            setMessage("Ops... something happened... Please try again later")
        }
    }
    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}><h3>My Contact</h3></div>
                <div className={styles.containerContact}>
                    <div className={styles.formAction}>
                        <form action={theSubmit}>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                            <label htmlFor="message">Message</label>
                            <textarea name="message"></textarea>
                            <button type="submit">Submit</button>
                            {send && <p>{message}</p>}
                        </form>
                    </div>
                    <div className={styles.info}>
                        <span>São Paulo, SP</span>
                        <span>gabrielvmdiniz.dev@gmail.com</span>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}