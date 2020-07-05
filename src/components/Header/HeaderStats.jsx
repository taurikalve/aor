import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

export const HeaderStats = () => {
  const { gold, health, maxHealth, armor, magicResistance } = useContext(
    CharContext
  );
  return (
    <div className='stats'>
      HP {health}/{maxHealth} | A {armor} | MR {magicResistance} |{' '}
      <b>{gold} G</b>
    </div>
  );
};
