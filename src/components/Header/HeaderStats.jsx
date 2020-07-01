import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

export const HeaderStats = () => {
  const { gold, health, maxHealth } = useContext(CharContext);
  return (
    <div className='stats'>
      HP {health}/{maxHealth} | {gold} G
    </div>
  );
};
