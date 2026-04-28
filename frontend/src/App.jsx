import React from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Layout from './Layout';
import SectionTopicos from './SectionTopicos';
import ChatPage from './ChatPage';
import PainelAdmin from './PainelAdmin';
import Login from './componentes/Login/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const ProtectedAdminRoute = ({ children }) => {
  const { isAdmin } = useAuth();
  if (!isAdmin) return <Navigate to="/" replace />;
  return children;
};

const AppRoutes = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Routes location={background || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<SectionTopicos />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>
        <Route path='/login/*' element={<Login />} />
        <Route path="/admin" element={<ProtectedAdminRoute><PainelAdmin /></ProtectedAdminRoute>} />
      </Routes>

      {background && (
        <Routes>
          <Route path='/login/*' element={<Login />} />
        </Routes>
      )}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
