import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({type, children}) => {
    return <button className={styles.btn} type={type}>{children}</button>
}

export default Button;


Button.defaulProps ={
    type: 'submit'
}

Button.propTypes = {
    type: PropTypes.string,

}
