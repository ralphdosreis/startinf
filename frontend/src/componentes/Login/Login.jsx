import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCriar from './LoginCriar';
import LoginPerdeu from './LoginPerdeu';
import LoginResetar from './LoginResetar';
import styles from './Login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const isModal = location.state && location.state.background;

    const handleClose = () => {
        if (isModal) {
            navigate(location.state.background.pathname);
        } else {
            navigate('/');
        }
    };

    const content = (
        <div className={isModal ? styles.modal : ''} onClick={(e) => e.stopPropagation()}>
            {isModal && (
                <button className={styles.closeButton} onClick={handleClose}>
                    &times;
                </button>
            )}
            <Routes>
                <Route path="/" element={<LoginForm />}></Route>
                <Route path="criar" element={<LoginCriar />}></Route>
                <Route path="perdeu" element={<LoginPerdeu />}></Route>
                <Route path="resetar" element={<LoginResetar />}></Route>
            </Routes>
        </div>
    );

    if (isModal) {
        return (
            <div className={styles.overlay} onClick={handleClose}>
                {content}
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '4rem' }}>
           <div className={styles.modal} style={{ border: '1px solid #ccc' }}>
                {content}
           </div>
        </div>
    );
};

export default Login;