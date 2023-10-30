import Icon from '../../Images/icon.svg';
import Fon from '../../Images/fon.jpg';
import Button from '../../shared/components/Button/Button';

import styles from './hero.module.scss'

const Hero = () => {
    return (
        <div className={styles.hero}>
             <img className={styles.img} src={Fon} alt='fon'  />
            <div className="container">
                <div className={styles.hero__box}>
                <h2 className={styles.title}>ИДЕТ НАБОР НА ОБУЧЕНИЕ В ШКОЛУ "ЛАВИТА" В НЕВСКОМ РАЙОНЕ ПЕТЕРБУРГА! УСПЕЙ ЗАПИСАТЬСЯ!</h2>
                <Button className={styles.btn} type='button'>Подробнее</Button>
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
                    <div className={styles.left}><svg className={styles.rigth__icon} width="30" height="30">
                        <use href={`${Icon}#icon-bi_arrow-left-short-1`}></use>
                    </svg></div>
                  </div>
            </div>
        </div>
    )
}

export default Hero;