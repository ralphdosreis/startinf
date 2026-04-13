import React, { useState } from 'react';

const SideBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <div className="sidebar-top">
        <div className="sidebar-menu">
          <button onClick={() => setOpen(!open)}>
            <img className={`menu-button ${open ? 'rotate-r' : 'rotate-l'}`} src="/src/img/icon-menu.svg" alt="Menu" />
          </button>
          {open && <img className='icon-pesquisa' src="/src/img/icon-pesquisa.svg" alt="Pesquisa" />}
        </div>
    
          <div className='new-chat-container'>
            <div className='new-chat-content'>
              <img onClick={() => setOpen(!open)} className="new-chat" src="/src/img/icon-newchat.svg" alt="Nova conversa" />
              {open && <p className='texto-sidebar'>Nova conversa</p>}
            </div>
            {open && <div className='mens-temp-container'>
            <img src="/src/img/icon-mens-temp.svg" alt="Mensagens temporárias" />
          </div>}
          </div>

      </div>
      <div className="sidebar-bottom">
        <img onClick={() => setOpen(!open)} className="config" src="/src/img/icon-config.svg" alt="Configurações" />
        {open && <p className="texto-sidebar">Configurações</p>}
      </div>
    </div>
  );
};

export default SideBar;