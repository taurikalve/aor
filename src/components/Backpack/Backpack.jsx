import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

import BackpackItem from './BackpackItem';

const Backpack = () => {
  const { gold, inventory } = useContext(CharContext);

  return (
    <div className='backpack'>
      <h4>Backpack</h4>
      <p>{gold} G</p>
      <div className='items'>
        {inventory.map((item) => (
          <BackpackItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Backpack;
