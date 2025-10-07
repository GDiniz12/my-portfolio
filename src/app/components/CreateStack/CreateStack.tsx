import styles from './CreateStack.module.css';

export default function CreateStack(props: any) {

    function handleStyle() {
        const resultProp = props.percen;
        return { width: resultProp + "%" };
    }
    return (
        <>
            <div className={styles.stackSpecify}>
                <h4>{props.titleStack}</h4>
                <div id={styles[props.id]}>
                     <div style={handleStyle()} id={styles.defaultStyle}></div>
                </div>
            </div>
        </>
    );
}