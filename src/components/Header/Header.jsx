import React from 'react';
import { HeaderNavigation } from './HeaderNavigation';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'>
        <Link to='/'>
          <h1>Art of Rulers</h1>
        </Link>
      </div>
      <HeaderNavigation />
    </div>
  );
};

export default Header;
