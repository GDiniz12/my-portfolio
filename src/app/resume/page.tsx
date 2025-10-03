import styles from "./page.module.css";
import aboutImage from "../../../assets/do-utilizador.svg";
import resumeImage from "../../../assets/book-alt.svg";
import portfolioImage from "../../../assets/foto.svg";
import contactImage from "../../../assets/marcador.svg";
import instagramIcon from "../../../assets/instagram.svg";
import githubIcon from "../../../assets/github.svg";
import linkedinIcon from "../../../assets/linkedin.svg";
import myImage from "../../../assets/f8d8a942-8a64-4e31-b305-bbae2f58de16.jpeg";
import Image from "next/image";

export default function PageResume() {
    return (
        <>
            <div className={styles.mainContainer}>
                <aside className={styles.asideContainer}>
                    <div className={styles.photo}>
                        <Image src={myImage} className={styles.myPhoto} alt="My photo"/>
                    </div>
                    <div className={styles.resume}>
                        <h3>GABRIEL DINIZ</h3>
                        <h4>Full Stack Developer</h4>
                        <div className={styles.socialMedias}>
                            <div> <Image src={githubIcon} className={styles.icons} alt="Icon github"/></div>
                            <div> <Image src={instagramIcon} className={styles.icons} alt="Icon instagram" /></div>
                            <div> <Image src={linkedinIcon} className={styles.icons} alt="Icon linkedin" /></div>
                        </div>
                    </div>
                </aside>
                <div className={styles.navigator}>
                    <div> <Image src={aboutImage} className={styles.images} alt="Icon about" />ABOUT</div>
                    <div> <Image src={resumeImage} alt="Icon resume" className={styles.images}/>RESUME</div>
                    <div> <Image src={portfolioImage} alt="Icon portfolio" className={styles.images} />PORTFOLIO</div>
                    <div id={styles.contact}> <Image src={contactImage} alt="Icon image" className={styles.images}/>CONTACT</div>
                </div>
                <div className={styles.content}></div>
            </div>
        </>
    );
}