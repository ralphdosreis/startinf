import React from 'react';
import Header from './Header';
import Navegacao from './Navegacao';
import Separador from './Separador';
import SectionTopicos from './SectionTopicos';

const App = () => {
  return (
    <>
      <Header />
      <Separador />
      <Navegacao />
      <Separador />
      <SectionTopicos />
    </>
  );
};

export default App;
