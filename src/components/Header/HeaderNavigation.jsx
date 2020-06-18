import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderNavigation = () => {
  return (
    <ul className='menu'>
      <li>
        <Link to='/'>Workshop</Link>
      </li>
      <li>
        <Link to='/'>Inventory</Link>
      </li>
      <li>
        <Link to='/'>Journal</Link>
      </li>
      <li>
        <Link to='/'>Quests</Link>
      </li>
    </ul>
  );
};
