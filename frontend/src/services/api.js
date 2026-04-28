// URL base do backend — altere quando o backend estiver pronto
const API_URL = 'http://localhost:3001';

/**
 * Faz login com email e senha.
 * Espera que o backend retorne: { token: string, user: { nome, email, role, avatar } }
 */
export async function loginAPI(email, senha) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Erro ao fazer login');
  }

  return data;
}

/**
 * Cadastra um novo usuário.
 * Espera que o backend retorne: { message: string } ou { token, user }
 */
export async function cadastrarAPI(nome, email, senha) {
  const response = await fetch(`${API_URL}/auth/cadastrar`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nome, email, senha }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Erro ao cadastrar');
  }

  return data;
}

/**
 * Helper para fazer requisições autenticadas ao backend.
 * Usa o token salvo no localStorage.
 */
export async function fetchAutenticado(endpoint, opcoes = {}) {
  const token = localStorage.getItem('token');

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...opcoes,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...opcoes.headers,
    },
  });

  if (response.status === 401) {
    // Token expirado ou inválido — limpa e redireciona
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
    throw new Error('Sessão expirada. Faça login novamente.');
  }

  return response;
}
