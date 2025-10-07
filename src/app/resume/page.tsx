import CreateResume from "../components/CreateResume/CreateResume";
import Footer from "../components/Footer/Footer";
import styles from "./resume.module.css";
import imageCollege from "../../../assets/mortarboard.png";
import imageLocation from "../../../assets/marcador.svg";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Resume | Gabriel Diniz",
  description: "This is the resume page of Gabriel Diniz's portfolio."
};

export default function Resume() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}><h3>My Resume</h3></div>  
                <div className={styles.resumes}>
                    <CreateResume titleResume="Bachelor's Degree in Computer Science | 2025 - 2028" text="Fundação Escola de Comércio Álvares Penteado(FECAP)" skills="JavaScript, React, Node.js, C#, SCRUM, KANBAN, MySQL" image={imageCollege} alt="My college" />
                    <CreateResume titleResume="Location" text="São Paulo, Brazil" image={imageLocation} alt="My location" />
                </div>
                <Footer />
            </div>
        </>
    );
}