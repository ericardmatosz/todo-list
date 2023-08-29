import styles from './Header.module.scss';
import rocket from '../../assets/rocket.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={rocket} alt="rocket"/>
            <p>to<span>do</span></p>
        </header>
    );
}