import { type FC } from 'react';
import styles from './Header.module.css';

export const Header: FC = () => {
    

    return (
        <header className={styles.header}>
            <span>daniloSantos.dev</span>

            <nav>
                <a href="#">Home</a>
                <a href="#">Sobre</a>
                <a href="#">Projetos</a>
                <a href="#">Contatos</a>
            </nav>
        </header>
    )

}

