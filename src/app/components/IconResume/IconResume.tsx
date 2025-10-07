import styles from './IconResume.module.css';
import Image from 'next/image';

export default function Iconresume(props: any) {
    return (
        <>
            <div className={styles.icon}>
                <Image src={props.src} alt={props.alt} />
            </div>
        </>
    );
}