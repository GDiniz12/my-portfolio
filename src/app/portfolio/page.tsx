import beyondImage from "../../../assets/beyond.png";
import CreatePortfolio from "../components/PortfolioSection/PortfolioSec";
import styles from "./portfolio.module.css";
import type { Metadata } from "next";
import acley from "../../../assets/acleyLogo5.png";
import empathize from "../../../assets/empathizeLogo.png";

export const metadata: Metadata = {
  title: "My Portfolio | Gabriel Diniz",
  description: "This is the portfolio page of Gabriel Diniz's portfolio."
};

export default function Portfolio() {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}><h3>My Portfolio</h3></div>
                <div className={styles.portfolios}>
                    <CreatePortfolio imgPort={empathize} alt="Empathize logo" titleProject="EMPATHIZE SYSTEM" description="
The Empathize System is a web project developed at FECAP, used to manage the Lideranças Empáticas project." linkAt="https://github.com/2025-2-MCC2/Projeto4"/>
                    <CreatePortfolio imgPort={acley} alt="Acley logo" titleProject="ACLEY" description="
Acley is an Anki-inspired app. Review your flashcards and reinforce your knowledge." linkAt="https://github.com/GDiniz12/acley"/>
                    <CreatePortfolio  imgPort={beyondImage} alt="Beyond mars image" titleProject="BEYOND MARS" description="Beyond Mars is a game developed at FECAP" linkAt="https://github.com/GDiniz12/Projeto-1-semestre"/>                    
                </div>
            </div>
        </>
    );
}