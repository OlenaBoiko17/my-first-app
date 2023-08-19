import React from 'react';
import PropTypes from 'prop-types';

import HederList from '../Header/HederList/HederList'
import HederNavList from '../Header/HederNavList/HederNavList';
import Button from '../../shared/components/Button/Button';
import MyIcon from '../../Images/icon.svg';

import styles from './header.module.scss';

console.log(styles);
const Header = ({title, items, links}) => {
    const element = items.map(item => <HederList key={item.id} {...item}/>);
    const elementNav = links.map(link => <HederNavList key={link.id} {...link}/>);
    return (
        <header className="header">
        <div className="container">
                <div className={styles.connect}>
                   {title && <h1 className={styles.title}>{title}</h1>}
                   <ul className={styles.contact_list}>
                    {element}
                   </ul>
                   <Button type='button'>Запись на курсы</Button>
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
export default Header;
Header.defaulProps = {
    items: [],
    links: []
}
Header.propTypes = {
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