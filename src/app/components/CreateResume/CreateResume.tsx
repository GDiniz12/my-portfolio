import Iconresume from "../IconResume/IconResume";
import styles from "./CreateResume.module.css";

export default function CreateResume(props: any) {
    return (
        <>
            <div className={styles.resumeContent}>
                <Iconresume src={props.image} alt={props.alt} />
                <h3>{props.titleResume}</h3>
                <p>{props.text}</p>
                <span>{props.skills}</span>
            </div>
        </>
    );
}