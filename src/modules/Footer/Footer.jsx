

import items from './footerItem';
import links from './footerLinks';
import rosters from './footerRosters';
import payments from './footerPayment';
import educations from './footerEducation';
import exams from './footerExam';
import scools from './footerScool';


import styles from './footer.module.scss';


const Footer = () => {
    const element =  items.map(({id, way, svg, contact}) => <li key={id} className={styles.item}>
        <a href={way} className={styles.contact}>
            <svg className={styles.icon} width="24" heigth="24">
                <use href={svg}></use>
            </svg>{contact}</a></li> );
    const elementLink = links.map(({id, way, svg}) => <li key={id} className={styles.img__link}>
    <a href={way} className={styles.pic}>
        <svg className={styles.network__icon} width="30" heigth="30">
            <use href={svg}></use>
        </svg>
    </a></li>);
    const elmentRoster = rosters.map(({id, text}) =>  <li key={id} className={styles.link}>
    <p className={styles.text}>{text}</p>
</li>);
    const elementPayment = payments.map(({id, text}) =>  <li key={id} className={styles.link}>
    <p className={styles.text}>{text}</p>
</li>);
    const elementEducation = educations.map(({id, text}) => <li key={id} className={styles.link}>
    <p className={styles.text}>{text}</p>
</li>);
    const elementExam = exams.map(({id, text}) =>  <li key={id} className={styles.link}>
    <p className={styles.text}>{text}</p>
</li>);
    const elementScool = scools.map(({id, text}) =>  <li key={id} className={styles.link}>
    <p className={styles.text}>{text}</p>
</li>)     
    return ( <footer className={styles.footer}>
    <div className="container">
        <div className={styles.footer__container}>
            <div className={styles.content}>
                <h2 className={styles.title}>ШКОЛА испанского ЯЗЫКА
                    «ЛаВИта» в петербурге</h2>
                    <address className={styles.addres}>
                        <ul className={styles.addres__list}>
                           {element}
                        </ul>
                    </address>
                    <div className={styles.footer__icon}>
                        <ul className={styles.img__list}>
                            {elementLink}
                        </ul>
                    </div>
            </div>
            <div className={styles.wrap}>
                <h3 className={styles.capthion}>О нас</h3>
                <ul className={styles.list}>
                   {elmentRoster}
                </ul>
            </div>
            <div className={styles.wrapper}>
                <h3 className={styles.capthion}>Расписание и оплата</h3>
                <ul className={styles.list}>
                    {elementPayment}
                </ul>
                <div className={styles.inner}>
                    <h3 className={styles.capthions}>Обучение в китае</h3>
                    <ul className={styles.list}>
                       {elementEducation}
                    </ul>
                </div>
            </div>
            <div className={styles.col}>
                <h3 className={styles.capthion}>Экзамены</h3>
                <ul className={styles.list}>
                    {elementExam}
                </ul>
            </div>
            <div className={styles.colum}>
                <h3 className={styles.capthion}>Школа</h3>
                <ul className={styles.list}>
                    {elementScool}
                </ul>
            </div>
        </div>
        <div className={styles.line}> </div>
        <div className={styles.logo__scool}>
            <h4 className={styles.logo__title}>© «ЛАВИТА» 2021</h4>
        </div> 
    </div>
</footer>
    )
}

export default Footer;
