
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import items from './items';
import links from './links';
import MyIcon from '../../Images/icon.svg';

import styles from './header.module.scss';

console.log(styles);
const Navbar = ({title}) => {
    const element = links.map(({id, way, svg, contact}) => <li key={id}  className={styles.contact_link}>
    <NavLink to={way} className={styles.contact}>
        <svg className={styles.icon} width="24" height="24">
            <use href={svg}></use>
        </svg>
        {contact}</NavLink></li>);
    const elementNav = items.map(({id, text, link}) => <li key={id} className={styles.nav_link}>
    <NavLink to={link} className={styles.nav_item}>{text}</NavLink></li>)
    return (
        <header className={styles.header}>
        <div className="container">
                <div className={styles.connect}>
                   {title && <h1 className={styles.title}>{title}</h1>}
                   <ul className={styles.contact_list}>
                    {element}
                   </ul>
                   <button className={styles.btn} type='button'>Запись на курсы</button>
                </div>
                <div className={styles.line}></div>
                <div className={styles.content}>
                   <a href="./ds.html" className={styles.logo}>
                    <svg className={styles.logo__icon} width="60" heigth="60">
                        <use href={`${MyIcon}#icon-logo`}></use>
                    </svg>
                   </a>
                    <nav className={styles.nav}>
                        <ul className={styles.nav_list}>
                           {elementNav}
                        </ul>
                    </nav>
                </div>
        </div>
    </header> 
    )
}
export default Navbar;
Navbar.defaulProps = {
    items: [],
    links: []
}
Navbar.propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        way: PropTypes.string.isRequired,
        svg: PropTypes.string.isRequired,
        contact: PropTypes.string.isRequired,
        })),
    links: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        way: PropTypes.string.isRequired,
        nav: PropTypes.string.isRequired,
    }))
}