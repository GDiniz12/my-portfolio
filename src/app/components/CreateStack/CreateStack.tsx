import styles from "./CreateStack.module.css";

export default function CreateStack(props: any) {
    return (
        <>
            <div>
                <h4>{props.titleStack}</h4>
                <div className={styles.bar}>
                     <div></div>
                </div>
            </div>
        </>
    );
}