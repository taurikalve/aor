import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

import Equipment from '../../components/Equipment/Equipment';

const Welcome = () => {
  const { name, modGold, modStat } = useContext(CharContext);
  return (
    <div>
      <h3>Welcome, {name}</h3>
      <p>
        Tips, tutorials, patch notes, character info etc - <b>TBD</b>
      </p>
      <br />
      <button onClick={() => modGold(10)}>Add 10 gold</button>
      <button onClick={() => modGold(-10)}>Remove 10 gold</button>
      <br />
      <br />
      <button onClick={() => modStat('health', -10)}>Take 10 damage</button>
      <button onClick={() => modStat('maxHealth', 10)}>
        Add 10 max health
      </button>
      <br />
      <br />
      <Equipment />
    </div>
  );
};

export default Welcome;
