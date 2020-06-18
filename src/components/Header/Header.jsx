import React from 'react';
import { HeaderNavigation } from './HeaderNavigation';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <h1>Art of Rulers</h1>
      </div>
      <HeaderNavigation />
    </div>
  );
};

export default Header;
