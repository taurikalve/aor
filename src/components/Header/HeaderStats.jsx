import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

export const HeaderStats = () => {
  const {
    gold,
    stats: { health, maxHealth, mana, maxMana }
  } = useContext(CharContext);
  return (
    <div className='stats'>
      HP {health}/{maxHealth} | MP {mana}/{maxMana} | <b>{gold} G</b>
    </div>
  );
};
