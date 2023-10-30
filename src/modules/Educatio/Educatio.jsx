

import items from './educatioItems';
import links from './educatioLinks';
import rosters from './educatioRosters';

import styles from './educatio.module.scss';


const Educatio = () => {
    const element = items.map(({id, text}) => <li key={id} className={styles.link}>
        <h3 className={styles.caption}>{text}</h3>
    </li> );
    const elementLins = links.map(({id,text}) => <li key={id} className={styles.table__link}>
        <h4 className={styles.table__title}>{text}</h4>
    </li> );
    const elementRosters = rosters.map(({id, text, text1, desc, span, text2, payment, cost }) =>  
        <li key={id} className={styles.tables__link}>
        <p className={styles.tables__text}>{text}</p>
        <p className={styles.info__text}>{text1} {desc}</p>
        <p className={styles.desc__text}><span className={styles.span__text}>{span}</span>{text2} {payment} {cost}</p>
    </li>)
    return (
        <div className={styles.educatio}>
            <div className="container">
                <h2 className={styles.title}>Курсы и стоимость обучения</h2>
                    <div className={styles.may_june}>
                        <p className={styles.text}>(учебный год с сентября по май)</p>
                        <p className={styles.text}>(учебный год с сентября по июнь)</p>
                    </div>
                <ul className={styles.list}>
                    {element}
                </ul>
                <div className={styles.wrap}>
                    <ul className={styles.table__list}>
                        {elementLins}
                    </ul>
                    <ul className={styles.tables__list}>
                       {elementRosters} 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Educatio;