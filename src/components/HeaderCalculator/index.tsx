import styles from './HeaderCalculator.module.css'
import { type FC} from 'react';
import favicon from '../../Images/Favicon/favicon-32x32.png'




export const HeaderCalculator: FC = () => {


    return (
        <div className={styles.container}>
            <div className={styles.containerChildren}>

            <div className={styles.text}>
                <section className={styles.textHeader}>
                <span>DAN</span>
                <h4>tech</h4>
                </section>

                <h4>Eletronic Calculator</h4>
            </div>

            <img src={favicon} alt="imagem da logo" />


            <div className={styles.display}>
                <div className={styles.displayChildren}>
                    <h2>1</h2>
                </div>
            </div>
            </div>

            
        </div>
    )
}