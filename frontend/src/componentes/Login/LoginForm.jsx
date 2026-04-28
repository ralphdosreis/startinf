import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { useAuth } from '../../contexts/AuthContext';
import style from './Login.module.css';

const LoginForm = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [erro, setErro] = React.useState('');
    const { login, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');
        const result = await login(username, password);
        if (result.success) {
            if (location.state?.background) {
                navigate(location.state.background.pathname);
            } else {
                navigate('/');
            }
        } else {
            setErro(result.message);
        }
    }
    return <>
        <div className={style.header}>
            <h1 className={style.titulo}>Login</h1>
            <p className={style.texto}>Entre com suas credenciais para acessar o sistema</p>
        </div>
        {erro && <p className={style.erro}>{erro}</p>}
        <form action="" className={style.form} onSubmit={handleSubmit}>
            <Input label="Username" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input label="Senha" type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button disabled={loading}>{loading ? 'Entrando...' : 'Entrar'}</Button>
        </form>
    </>
}

export default LoginForm;