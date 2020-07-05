import React, { createContext, useState, useEffect } from 'react';

import {
  modCharStat,
  equipItemChar,
  addItemToCharInv,
  removeItemFromCharInv,
  unequipItemChar
} from './char.utils';

export const CharContext = createContext();

const CharProvider = ({ children }) => {
  let character = JSON.parse(localStorage.getItem('char'));
  if (!character) {
    character = {
      name: 'Mr. T',
      gold: 777,
      health: 100,
      maxHealth: 110,
      mana: 50,
      maxMana: 75,
      armor: 0,
      magicResistance: 0,
      attack: 0,
      magic: 0,
      ranged: 0,
      equipment: [
        { name: 'linen underwear', type: 'legs', id: 'placeholderLegs' },
        { name: 'straw hat', type: 'head', id: 'placeholderHead' },
        { name: 'dirty shirt', type: 'chest', id: 'placeholderChest' },
        { name: '', type: 'hands', id: 'hands' }
      ],
      inventory: [],
      modGold: () => {},
      modHealth: () => {},
      modMaxHealth: () => {},
      modMana: () => {},
      modMaxMana: () => {},
      modArmor: () => {},
      modMagicResistance: () => {},
      modAttack: () => {},
      modMagic: () => {},
      modRanged: () => {},
      equipItem: () => {},
      unequipItemToInv: () => {},
      addItemToInv: () => {},
      removeItemFromInv: () => {}
    };
  }

  const [name /*, setName*/] = useState(character.name);
  const [gold, setGold] = useState(character.gold);
  const [health, setHealth] = useState(character.health);
  const [maxHealth, setMaxHealth] = useState(character.maxHealth);
  const [mana, setMana] = useState(character.mana);
  const [maxMana, setMaxMana] = useState(character.maxMana);
  const [armor, setArmor] = useState(character.armor);
  const [magicResistance, setMagicResistance] = useState(
    character.magicResistance
  );
  const [attack, setAttack] = useState(character.attack);
  const [magic, setMagic] = useState(character.magic);
  const [ranged, setRanged] = useState(character.ranged);

  const [equipment, setEquipment] = useState(character.equipment);
  const [inventory, setInventory] = useState(character.inventory);

  const modGold = (amount) => setGold(modCharStat(gold, amount));
  const modHealth = (amount) => setHealth(modCharStat(health, amount));
  const modMaxHealth = (amount) => setMaxHealth(modCharStat(maxHealth, amount));
  const modMana = (amount) => setMana(modCharStat(mana, amount));
  const modMaxMana = (amount) => setMaxMana(modCharStat(maxMana, amount));
  const modArmor = (amount) => setArmor(modCharStat(armor, amount));
  const modMagicResistance = (amount) =>
    setMagicResistance(modCharStat(magicResistance, amount));
  const modAttack = (amount) => setAttack(modCharStat(attack, amount));
  const modMagic = (amount) => setMagic(modCharStat(magic, amount));
  const modRanged = (amount) => setRanged(modCharStat(ranged, amount));

  const addItemToInv = (itemToAdd) => {
    setInventory(addItemToCharInv(inventory, itemToAdd));
  };

  const removeItemFromInv = (itemToRemove) => {
    setInventory(removeItemFromCharInv(inventory, itemToRemove));
  };

  const unequipItemToInv = (itemToUnequip) => {
    setEquipment(unequipItemChar(equipment, itemToUnequip));
    setInventory(addItemToCharInv(inventory, itemToUnequip));
  };

  const equipItem = (itemToEquip) => {
    const res = equipItemChar(inventory, equipment, itemToEquip);
    setEquipment(res.equipment);
    setInventory(res.inventory);
  };

  useEffect(() => {
    localStorage.setItem(
      'char',
      JSON.stringify({
        name,
        gold,
        health,
        maxHealth,
        armor,
        magicResistance,
        attack,
        magic,
        ranged,
        equipment,
        inventory
      })
    );
  }, [
    name,
    gold,
    health,
    maxHealth,
    armor,
    magicResistance,
    attack,
    magic,
    ranged,
    equipment,
    inventory
  ]);

  return (
    <CharContext.Provider
      value={{
        name,
        gold,
        health,
        maxHealth,
        armor,
        magicResistance,
        attack,
        magic,
        ranged,
        equipment,
        inventory,
        modGold,
        modHealth,
        modMaxHealth,
        modMana,
        modMaxMana,
        modArmor,
        modMagicResistance,
        modAttack,
        modMagic,
        modRanged,
        equipItem,
        unequipItemToInv,
        addItemToInv,
        removeItemFromInv
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
