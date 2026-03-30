import React from 'react';

const SideBar = () => {

  return <>
  <div className='sidebar'>
    <div className='sidebar-top'>
       <span className='menu-button'></span>
       <img src="/src/img/icon-newchat.svg" alt="" />
    </div>
    <div className='sidebar-bottom'>
      <img src="/src/img/icon-config.svg" alt="" />
    </div>
  </div></>
}

export default SideBar;