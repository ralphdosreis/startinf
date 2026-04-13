import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import SectionTopicos from './SectionTopicos';
import ChatPage from './ChatPage';
import PainelAdmin from './PainelAdmin';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SectionTopicos />} />
          <Route path="chat" element={<ChatPage />} />
        </Route>
        <Route path="/admin" element={<PainelAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
