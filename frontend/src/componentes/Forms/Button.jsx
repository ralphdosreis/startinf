import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, disabled, ...rest }) => {
    return <button type="submit" className={styles.botao} disabled={disabled} {...rest}>{children}</button>
}

export default Button;