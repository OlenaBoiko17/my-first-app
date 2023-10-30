import items from './ScooNewlItems';

import styles from './scool-new.module.scss';

const ScoolNew = () => {
    const element = items.map(({id, caption, text}) => <li key={id} className={styles.link}>
    <h3 className={styles.caption}>{caption}</h3>
        <p className={styles.text}>{text}</p>
        <button type="button" className={styles.btn}>Подробнее</button>
</li> )
    return (
        <div className={styles.new__scool}>
            <div className="container">
                <h2 className={styles.title}>Новости школы</h2>
                <ul className={styles.list}>
                    {element}
                </ul>
              
            </div>
        </div>

    )
}

export default ScoolNew;