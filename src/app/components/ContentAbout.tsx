import styles from "./ContentAbout.module.css";

export default function ContentAbout(props: any) {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}><h4>About Me</h4></div>
                <div>
                    <h3>Full Stack Developer in training, passionate about technology </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis neque qui cumque nisi quaerat explicabo quo nulla ipsam voluptatem sequi officia sunt, inventore optio impedit, expedita dicta harum atque deserunt.</p>
                </div>
                <div>
                    <h3>Stacks</h3>
                    
                </div>
            </div>
        </>
    );
}