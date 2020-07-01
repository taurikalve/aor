import React, { createContext, useState, useEffect } from 'react';

import { addGoldToChar, removeGoldFromChar, modCharGold } from './char.utils';

export const CharContext = createContext();

const CharProvider = ({ children }) => {
  let character = JSON.parse(localStorage.getItem('char'));
  if (!character) {
    character = {
      name: 'Mr. T',
      gold: 777,
      health: 100,
      maxHealth: 110,
      armor: 0,
      magicResistance: 0,
      modGold: () => {}
    };
  }
  //const localGold = JSON.parse(localStorage.getItem('gold'));

  const [name, setName] = useState(character.name);
  const [gold, setGold] = useState(character.gold);
  const [health, setHealth] = useState(character.health);
  const [maxHealth, setMaxHealth] = useState(character.maxHealth);
  const [armor, setArmor] = useState(character.armor);
  const [magicResistance, setMagicResistance] = useState(
    character.magicResistance
  );

  const modGold = (goldToModify) => setGold(modCharGold(gold, goldToModify));

  useEffect(() => {
    localStorage.setItem(
      'char',
      JSON.stringify({ name, gold, health, maxHealth, armor, magicResistance })
    );
    /*localStorage.setItem('gold', JSON.stringify(gold));
  }, [gold]);*/
  }, [{ name, gold, health, maxHealth, armor, magicResistance }]);

  return (
    <CharContext.Provider
      value={{
        name,
        gold,
        health,
        maxHealth,
        armor,
        magicResistance,
        modGold
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
