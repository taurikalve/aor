import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

import Equipment from '../../components/Equipment/Equipment';

const Welcome = () => {
  const {
    name,
    gold,
    armor,
    magicResistance,
    modGold,
    modHealth,
    modMaxHealth
  } = useContext(CharContext);
  return (
    <div>
      <h3>Welcome, {name}</h3>
      <p>You have {gold} gold</p>
      <p>
        Armor {armor} || Magic Resistance {magicResistance}
      </p>
      <p>
        Tips, tutorials, patch notes, character info etc - <b>TBD</b>
      </p>
      <br />
      <button onClick={() => modGold(10)}>Add 10 gold</button>
      <button onClick={() => modGold(-10)}>Remove 10 gold</button>
      <br />
      <br />
      <button onClick={() => modHealth(-10)}>Take 10 damage</button>
      <button onClick={() => modMaxHealth(10)}>Add 10 max health</button>
      <br />
      <br />
      <Equipment />
    </div>
  );
};

export default Welcome;
