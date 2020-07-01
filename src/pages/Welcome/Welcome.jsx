import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

const Welcome = () => {
  const { name, gold, addGold, removeGold, modGold } = useContext(CharContext);
  return (
    <div>
      <h3>Welcome, {name}</h3>
      <p>You have {gold} gold</p>
      <p>
        Tips, tutorials, patch notes, character info etc - <b>TBD</b>
      </p>
      <br />
      <button onClick={() => modGold(10)}>Add 10 gold</button>
      <br />
      <button onClick={() => modGold(-10)}>Remove 10 gold</button>
      <br />
    </div>
  );
};

export default Welcome;
