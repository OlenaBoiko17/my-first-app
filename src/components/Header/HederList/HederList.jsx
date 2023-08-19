import PropTypes from 'prop-types';
import HeaderIcon from '../../../Images/icon.svg'
import styles from  './heder-list.module.scss';


const HederList = ({way, svg, contact}) => {
    return <li  className={styles.contact_link}>
    <a href={way} className={styles.contact}>
        <svg className={styles.icon} width="24" height="24">
            <use href={`${HeaderIcon}${svg}`}></use>
        </svg>
        {contact}</a></li>
}

export default HederList;

HederList.propTypes ={
    way: PropTypes.string.isRequired,
    svg: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
}
