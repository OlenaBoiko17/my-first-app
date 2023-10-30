
import items from './activityItems';

import styles from './activity.module.scss';


const Activity = () => {
    
    const element = items.map(({id, img, caption, text}) => <li key={id} className={styles.link}>
                       
    <img className={styles.img} src={img} alt="мероприятия" width="416" />


    <h3 className={styles.caption}>{caption}</h3>
        <p className={styles.text}>{text}</p>
        <button type="button" className={styles.btn}>Подробнее</button>
</li> )
    return (
        <div className={styles.activity}>
            <div className="container">
                <h2 className={styles.title}>Мероприятия</h2>
                <ul className={styles.list}>
                   {element}
                </ul>
                
            </div>
        </div>
    )
}

export default Activity;