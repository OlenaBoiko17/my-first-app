import PropTypes from 'prop-types';

import styles from  './heder-nav-list.module.scss';

const HederNavList = ({way, nav}) => {
    return <li  className={styles.nav_link}>
    <a href={way} className={styles.nav_item}>{nav}</a></li>
}

export default HederNavList;

HederNavList.propsTypes = {
    way: PropTypes.string.isRequired,
    nav: PropTypes.string.isRequired,
}