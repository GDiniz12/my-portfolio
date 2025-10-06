import styles from "./ContentAbout.module.css";

export default function ContentAbout(props: any) {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.title}><h3>About Me</h3></div>
                <div className={styles.resume}>
                    <h3>I'm Full-Stack Developer in Training, Passionate About Technology </h3>
                    <p>I'm a budding full-stack developer, passionate about technology and constantly learning. I'm currently studying Computer Science at FECAP, where I've been consolidating my theoretical foundation while applying my practical knowledge in software development.
                        <br /> <br />
                    I'm looking for my first job opportunity, but I've already participated in academic and personal projects that challenged me to apply my technical knowledge. These experiences have also allowed me to develop important skills such as team leadership, organization, and project planning, which I consider essential for working collaboratively and efficiently in professional settings.
                        <br /> <br />
                    Outside of work, I enjoy hobbies like going to the gym, reading books, and running.</p>
                </div>
                <div className={styles.stacks}>
                    <h3>Stacks</h3>
                    <div className={styles.stackSpecify}>
                        <h4>React</h4>
                        <div id={styles.react}>
                            <div></div>
                        </div>
                    </div>
                <div className={styles.stackSpecify}>
                    <h4>JavaScript</h4>
                    <div id={styles.js}>
                        <div></div>
                    </div>
                </div>   
                <div className={styles.stackSpecify}>
                    <h4>CSS</h4>
                    <div id={styles.css}>
                        <div></div>
                    </div>
                </div>     
                <div className={styles.stackSpecify}>
                    <h4>NodeJS(Express, Prisma)</h4>
                    <div id={styles.node}>
                        <div></div>
                    </div>
                </div>  
                <div className={styles.stackSpecify}>
                    <h4>Database(MySQL, PostgreSQL)</h4>
                    <div id={styles.db}>
                        <div></div>
                    </div>
                </div>  
                <div className={styles.stackSpecify}>
                    <h4>Python</h4>
                    <div id={styles.py}>
                        <div></div>
                    </div>
                </div> 
                <div className={styles.stackSpecify}>
                    <h4>TypeScript</h4>
                    <div id={styles.ts}>
                        <div></div>
                    </div>
                </div>  
                <div className={styles.stackSpecify}>
                    <h4>NextJS</h4>
                    <div id={styles.next}>
                        <div></div>
                    </div>
                </div>       
                </div>
                <div className={styles.footer}>
                    <h4>© 2025 - Gabriel Diniz</h4>
                </div>
            </div>
        </>
    );
}