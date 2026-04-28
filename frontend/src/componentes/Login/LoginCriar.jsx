import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import { useAuth } from '../../contexts/AuthContext';
import style from './Login.module.css';

const LoginCriar = () => {
    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');
    const [erro, setErro] = React.useState('');
    const { cadastrar, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro('');
        const result = await cadastrar(nome, email, senha);
        if (result.success) {
            navigate('/login', { state: location.state });
        } else {
            setErro(result.message);
        }
    }
    return <>
        <div className={style.header}>
            <h1 className={style.titulo}>Cadastrar</h1>
            <p className={style.texto}>Crie sua conta para acessar o sistema</p>
        </div>
        {erro && <p className={style.erro}>{erro}</p>}
        <form action="" className={style.form} onSubmit={handleSubmit}>
            <Input label="Nome" type="text" name="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <Input label="Email" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input label="Senha" type="password" name="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <Button disabled={loading}>{loading ? 'Cadastrando...' : 'Cadastrar'}</Button>
        </form>
    </>
}

export default LoginCriar;