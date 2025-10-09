"use client"

import CreateResume from "../components/CreateResume/CreateResume";
import Footer from "../components/Footer/Footer";
import styles from "./resume.module.css";
import imageCollege from "../../../assets/mortarboard.png";
import certificationIcon from "../../../assets/certification.png";
import cvIcon from "../../../assets/curriculo.png";

function linkToCV() {
    window.open('https://drive.google.com/file/d/1Jhh8N91ZX3beTxGFbzXQB6UXKVz5c23S/view?usp=sharing', '_blank');
} 

export default function Resume() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}><h3>My Resume</h3></div>  
                <div className={styles.resumes}>
                    <CreateResume titleResume="Bachelor's Degree in Computer Science | 2025 - 2028" text="Fundação Escola de Comércio Álvares Penteado(FECAP)" skills="JavaScript, React, Node.js, C#, SCRUM, KANBAN, MySQL" image={imageCollege} alt="My college" />
                    <CreateResume titleResume="Certifications" image={certificationIcon} text="Full-Stack JavaScript - OneBitCode - 200h | Dec 2024 - Set 2025" skills="JavaScript, Git, GitHub, TypeScript, HTML, CSS, React, NextJS, NodeJS, Express, PostgreSQL, Prisma" alt="Certifications" />
                    <CreateResume titleResume="My CV" text="my CV below:" image={cvIcon} alt="My CV" />
                    <button onClick={() => linkToCV()}>Curriculum</button>
                </div>
                <Footer />
            </div>
        </>
    );
}