import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

const FooterStats = () => {
  const {
    stats: { armor, magicResistance, attack, magic, ranged }
  } = useContext(CharContext);
  return (
    <div className='stats'>
      Attack: {attack} | Magic: {magic} | Ranged: {ranged} | Armor: {armor} |
      Magic Resistance: {magicResistance}
    </div>
  );
};

export default FooterStats;
