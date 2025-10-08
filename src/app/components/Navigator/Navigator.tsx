import Image from "next/image";
import styles from "./Navigator.module.css";
import aboutImage from "../../../../assets/do-utilizador.svg";
import resumeImage from "../../../../assets/book-alt.svg";
import portfolioImage from "../../../../assets/foto.svg";
import contactImage from "../../../../assets/marcador.svg";
import Link from "next/link";

export default function Navigator() {
    return (
        <>
            <div className={styles.navigator}>
                <div> 
                    <Link href="/">
                        <Image src={aboutImage} className={styles.images} alt="Icon about" />
                        <h4>ABOUT</h4>
                    </Link>
                </div>
                <div> 
                    <Link href="/resume">
                        <Image src={resumeImage} alt="Icon resume" className={styles.images}/>
                        <h4>RESUME</h4>
                    </Link>
                </div>
                <div> 
                    <Link href="/portfolio">
                        <Image src={portfolioImage} alt="Icon portfolio" className={styles.images} />
                        <h4>PORTFOLIO</h4>
                    </Link>
                </div>
                <div id={styles.contact}> 
                    <Link href="/contact">
                        <Image src={contactImage} alt="Icon image" className={styles.images}/>
                        <h4>CONTACT</h4>
                    </Link>
                </div>
            </div>
        </>
    )
}