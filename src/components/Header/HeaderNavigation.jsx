import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderNavigation = () => {
  return (
    <ul className='menu'>
      <li>
        <Link to='/map'>Map</Link>
      </li>
      <li>
        <Link to='/workshop'>Workshop</Link>
      </li>
      <li>
        <Link to='/inventory'>Inventory</Link>
      </li>
      <li>
        <Link to='/'>Journal</Link>
      </li>
    </ul>
  );
};
