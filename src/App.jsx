import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Navegacao from './Navegacao';
import Separador from './Separador';
import SectionTopicos from './SectionTopicos';
import ChatPage from './ChatPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Separador />
              <Navegacao />
              <Separador />
              <SectionTopicos />
            </>
          }
        />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
