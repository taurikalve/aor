import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export const HeaderStats = () => {
  const { user } = useContext(UserContext);
  return <div className='stats'>{user.gold} G</div>;
};
