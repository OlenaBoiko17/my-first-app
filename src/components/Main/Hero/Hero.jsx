
import Icon from '../../../Images/icon.svg'
import Fon from '../../../Images/fon.jpg'
import styles from './hero.module.scss'

const Hero = () => {
    return (
        <section className="hero section">
             <img className={styles.img} src={Fon} alt='fon'/>
            <div className="container">
               
                <div className={styles.hero__box}>
                <div className={styles.box}></div>
                <h2 className={styles.title}>ИДЕТ НАБОР НА ОБУЧЕНИЕ В ШКОЛУ "ЛАВИТА" В НЕВСКОМ РАЙОНЕ ПЕТЕРБУРГА! УСПЕЙ ЗАПИСАТЬСЯ!</h2>
                <button type="button" className={styles.btn}>Подробнее</button>
                </div>
            </div>
            <div className={styles.box__arrow}>
                <div className={styles.rigth__box}>
                    <div className={styles.rigth}>
                        <svg className={styles.rigth__icon} width="30" height="30">
                            <use href={`${Icon}#icon-bi_arrow-left-short`}></use>
                        </svg>
                    </div>
                    
                </div>
                  <div className={styles.left__box}>
                    <div className="left"><svg className={styles.rigth__icon} width="30" height="30">
                        <use href={`${Icon}#icon-bi_arrow-left-short-1`}></use>
                    </svg></div>
                  </div>
            </div>
        </section>
    )
}

export default Hero;