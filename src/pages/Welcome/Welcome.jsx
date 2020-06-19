import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Welcome = () => {
  const CHARACTER = {
    name: 'Billybob',
    gold: 100
  };
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h3>Welcome, {user.name}</h3>
      <p>You have {user.gold} gold</p>
      <p>
        Tips, tutorials, patch notes, character info etc - <b>TBD</b>
      </p>
      <button onClick={() => setUser(CHARACTER)}>Set char</button>
    </div>
  );
};

export default Welcome;
