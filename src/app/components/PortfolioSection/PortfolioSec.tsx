import Image from "next/image";
import styles from "./PortfolioSec.module.css";
import Link from "next/link"
import imageGithub from "../../../../assets/github.svg";

function CreateDescriptionProject(props: any) {
    return (
        <>
            <div className={styles.descriptionProject}>
                <h3>{props.titleProject}</h3>
                <p>{props.description}</p>
                <div className={styles.imgGitHub}>
                    <Link href={props.linkAt}>
                        <Image src={imageGithub} alt="Image github" className={styles.image}/>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default function CreatePortfolio(props: any) {
    return (
        <>
            <div className={styles.portfolioContainer}>
                <div className={styles.imgProject}>
                    <Image src={props.imgPort} alt={props.alt}/>   
                </div>
                <CreateDescriptionProject titleProject={props.titleProject} description={props.description} linkAt={props.linkAt}/>
            </div>
        </>
    );
}