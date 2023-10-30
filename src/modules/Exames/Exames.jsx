
import items from './examesItem';

import styles from './exames.module.scss';

const Exames = () => {
    const element = items.map(({id, img, caption, text1, text2, text3 }) => 
    <li key={id} className={styles.link}>            
    <img className={styles.img} src={img}  alt="экзамен" width="306"  />
    <h3 className={styles.caption}>{caption}</h3>
        <p className={styles.text}>{text1}</p>
        <p className={styles.text}>{text2} </p>
        <p className={styles.text}>{text3}</p>
        <button type="button" className={styles.btn}>Подробнее</button>
</li>)
    return (
        <div className={styles.exams}>
            <div className="container">
                <h2 className={styles.title}>Экзамены</h2>
                <ul className={styles.list}>   
                   {element}
                </ul>
            </div>
        </div>
    )
}

export default Exames;