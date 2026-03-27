import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navegacao from './Navegacao';
import Separador from './Separador';

const Layout = () => {
  return (
    <>
      <Header />
      <Separador />
      <Navegacao />
      <Separador />
      <Outlet />
    </>
  );
};

export default Layout;
