import React, { createContext, useState, useContext, useEffect } from 'react';
import { loginAPI, cadastrarAPI } from '../services/api';

const AuthContext = createContext();

// =====================================================
// MODO DE DESENVOLVIMENTO (dados fake)
// Mude para false quando o backend estiver rodando
// =====================================================
const DEV_MODE = true;

const USUARIOS_FAKE = [
  {
    username: 'admin',
    password: 'admin123',
    nome: 'Administrador',
    email: 'admin@startinf.com',
    avatar: '/src/img/icon-doguinho.svg',
    role: 'admin',
  },
  {
    username: 'usuario',
    password: 'user123',
    nome: 'Usuário Comum',
    email: 'usuario@startinf.com',
    avatar: '/src/img/icon-doguinho.svg',
    role: 'user',
  },
];

export const AuthProvider = ({ children }) => {
  // Restaura o user do localStorage ao carregar a página
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('user');
    return saved ? JSON.parse(saved) : null;
  });

  const [loading, setLoading] = useState(false);

  const isLoggedIn = !!user;
  const isAdmin = user?.role === 'admin';

  // Sincroniza o user com o localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, [user]);

  const login = async (email, senha) => {
    setLoading(true);
    try {
      if (DEV_MODE) {
        // Login fake para desenvolvimento
        const found = USUARIOS_FAKE.find(
          (u) => u.username === email && u.password === senha
        );
        if (found) {
          const { password, ...userData } = found;
          setUser(userData);
          return { success: true };
        }
        return { success: false, message: 'Usuário ou senha inválidos' };
      }

      // Login real com o backend
      const data = await loginAPI(email, senha);
      localStorage.setItem('token', data.token);
      setUser(data.user);
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  const cadastrar = async (nome, email, senha) => {
    setLoading(true);
    try {
      if (DEV_MODE) {
        // Cadastro fake para desenvolvimento
        return { success: true, message: 'Conta criada com sucesso!' };
      }

      // Cadastro real com o backend
      const data = await cadastrarAPI(nome, email, senha);
      return { success: true, message: data.message || 'Conta criada com sucesso!' };
    } catch (err) {
      return { success: false, message: err.message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    // localStorage é limpo pelo useEffect acima
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, isAdmin, loading, login, cadastrar, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
