import styles from "./Aside.module.css";
import myImage from "../../../../assets/f8d8a942-8a64-4e31-b305-bbae2f58de16.jpeg";
import instagramIcon from "../../../../assets/instagram.svg";
import githubIcon from "../../../../assets/github.svg";
import linkedinIcon from "../../../../assets/linkedin.svg";
import Image from "next/image";
import Link from "next/link";

export default function AsideContainer() {
    return (
        <>
        <aside className={styles.asideContainer}>
            <div className={styles.photo}>
                <Image src={myImage} className={styles.myPhoto} alt="My photo"/>
            </div>
            <div className={styles.resume}>
                <h3>GABRIEL DINIZ</h3>
                <h4>Full-Stack Developer</h4>
                <div className={styles.socialMedias}>
                    <div>
                        <Link href={"https://github.com/GDiniz12"}>
                            <Image src={githubIcon} className={styles.icons} alt="Icon github"/>
                        </Link> 
                    </div>
                    <div>
                        <Link href={"https://www.instagram.com/gabrielvmdiniz/"}>
                            <Image src={instagramIcon} className={styles.icons} alt="Icon instagram" />
                        </Link>
                    </div>
                    <div> 
                        <Link href={"https://www.linkedin.com/in/gabriel-diniz12"}>
                            <Image src={linkedinIcon} className={styles.icons} alt="Icon linkedin" />
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
        </>
    );
}