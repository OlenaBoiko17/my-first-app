import Img from '../../Images/foto1.jpg';
import MyIcon from '../../Images/icon.svg';
import items from './paymentItems';
import links from './paymentLinks';
import styles from './payment.module.scss';



const Payment = () => {
    const searchMauris = "Mauris";
    const element = items.map(({id, text}) => { if (text.includes(searchMauris)) {
        return  <li key={id} className={styles.descripthion__link}>
        <p className={styles.lead}>{text}</p>
    </li>
    } else {
        return <li key={id} className={styles.descripthion__link}>
        <p className={styles.text}>{text}</p>
    </li>
    }
    }  )
    const searchCras = "Amet";
    const elementLink = links.map(({id, text}) => { if (text.includes(searchCras)) {
        return  <li key={id} className={styles.descripthion__link}>
        <p className={styles.lead}>{text}</p>
    </li>
    } else {
        return <li key={id} className={styles.descripthion__link}>
        <p className={styles.text}>{text}</p>
    </li>
    }
    } )
    return (
        <div className={styles.description}>
        <div className="container">
            <div className={styles.wrap}>
                <ul className={styles.list}>
                    <li className={styles.link}>
                        <p className={styles.description__text}>Главная</p>
                    </li>
                    <li className={styles.link}>
                        <p className={styles.benefist}>Расписание и оплата</p>
                    </li>
                </ul>
            </div>
             <div className={styles.holder}>
                <div className={styles.connect}>
                    <img src={Img} alt="учоба" width="1076"/>
                </div>
                <div className={styles.wrapper}>
                    <h3 className={styles.title}>Расписание и оплата</h3>
                    <h4 className={styles.subtitle}>Ut pellentesque ultricies.</h4>
                    <div className={styles.desc}>
                        <ul className={styles.descripthion__list}>
                            {element}
                        </ul>
                        <div className={styles.connect}>
                            <svg className={styles.icon} width="400" height="400">
                                <use href={`${MyIcon}#icon-logo`}></use>
                            </svg>
                        </div>
                    </div>
                    <h4 className={styles.capthion}>Dis id urna praesent est.</h4>
                    <div className={styles.inner}>
                        <ul className={styles.descripthion__list}>
                           {elementLink}
                        </ul>
                        <div className={styles.connect}>
                            <svg className={styles.icon} width="400" height="400">
                                <use href={`${MyIcon}#icon-logo`}></use>
                            </svg>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
    )
}

export default Payment;