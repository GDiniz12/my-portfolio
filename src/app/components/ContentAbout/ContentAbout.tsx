import CreateStack from "../CreateStack/CreateStack";
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
                    <CreateStack titleStack="React" id="react" percen={65} idBar="reactBar" />
                    <CreateStack titleStack="JavaScript" id="js" percen={90} idBar="jsBar"/>
                    <CreateStack titleStack="CSS" id="css" percen={80} idBar="cssBar"/>  
                    <CreateStack titleStack="NodeJS(Express, Prisma)" id="node" percen={70} idBar="nodeBar"/>
                    <CreateStack titleStack="Database(MySQL, PostgreSQL)" id="db" percen={60} idBar="dbBar"/>
                    <CreateStack titleStack="Python" id="py" percen={40} idBar="pyBar"/>
                    <CreateStack titleStack="TypeScript" id="ts" percen={50} idBar="tsBar"/>
                    <CreateStack titleStack="NextJS" id="next" percen={30} idBar="nextBar"/>
                </div>
                <div className={styles.footer}>
                    <h4>© 2025 - Gabriel Diniz</h4>
                </div>
            </div>
        </>
    );
}