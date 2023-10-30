
import MyIcon from '../../Images/icon.svg'
import styles from './scool.module.scss';

const Scool = () => {
    return (
        <div className={styles.scool}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Школа “Лавита”</h2>
                        <p className={styles.text}>Eleifend purus dictum nunc, aenean tincidunt massa libero. Aliquam nullam enim at ac. Imperdiet risus mi quis vitae non. Cursus scelerisque donec vulputate ante etiam libero donec ridiculus at. Phasellus at nullam dapibus ut in. Vulputate consequat purus tellus vel cras. Eu sollicitudin arcu faucibus turpis venenatis.
                            Aliquet auctor tempus, erat at interdum eu. Sapien amet, amet sit non at sodales volutpat. Cursus et laoreet eget velit a tortor eu nibh mattis. Mi facilisi ultrices maecenas id.</p>
            
                    </div>
                    <div className={styles.connect}>
                        <svg className={styles.icon} width="400" height="400">
                            <use href={`${MyIcon}#icon-logo`}></use>
                        </svg>
                    </div>
                </div>
                
               
            </div>
           </div>
    )
}

export default Scool;