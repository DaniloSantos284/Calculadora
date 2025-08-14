import { type FC } from 'react';
import styles from './Footer.module.css'
import css3 from '../../Images/icones/css3.png';
import html5 from '../../Images/icones/html5.png';
import java from '../../Images/icones/java.png';
import reactImg from '../../Images/icones/react.png';
import typeImg from '../../Images/icones/type.png';
export const Footer: FC = () => {


    return (
        <footer className={styles.footer}>
            <h2>Desenvolvido por:</h2>
            <a href="https://github.com/DaniloSantos284" className={styles.danilo}> Danilo Santos</a>

            <h3>Tecnologias Utilizadas:</h3>

            <div className={styles.icones}>

            <nav className={styles.technologiesImgs}>
                <img src={reactImg} alt="reactImg" />
                <img src={typeImg} alt="typeImg" />
                <img src={java} alt="javaImg" />
                <img src={html5} alt="html5Img" />
                <img src={css3} alt="css3Img" />
            </nav>

            <nav className={styles.technologies}>
                <a href="https://react.dev/learn">React</a>
                <a href="https://www.typescriptlang.org/docs/">Typescript</a>
                <a href="https://docs.oracle.com/en/java/">Java</a>
                <a href="https://www.w3schools.com/html/html_intro.asp">HTML 5</a>
                <a href="https://getbootstrap.com/docs/3.4/css/">CSS 3</a>
            </nav>
            </div>
        </footer>
    )
}