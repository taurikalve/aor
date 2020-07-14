import React, { createContext, useState, useEffect } from 'react';

import {
  modCharStat,
  modCharStat2,
  equipItemChar,
  addItemToCharInv,
  removeItemFromCharInv,
  unequipItemChar
} from './char.utils';

import STARTING_ITEMS from './startingItems';

export const CharContext = createContext();

const CharProvider = ({ children }) => {
  let character = JSON.parse(localStorage.getItem('char'));
  if (!character) {
    character = {
      name: 'Mr. T',
      gold: 777,
      stats: {
        health: 100,
        maxHealth: 100,
        mana: 50,
        maxMana: 75,
        armor: 0,
        magicResistance: 0,
        attack: 0,
        magic: 0,
        ranged: 0
      },
      equipment: STARTING_ITEMS,
      inventory: [],
      modGold: () => {},
      modStat: () => {},
      equipItem: () => {},
      unequipItem: () => {},
      addItemToInv: () => {},
      removeItemFromInv: () => {}
    };
  }

  const [name /*, setName*/] = useState(character.name);
  const [gold, setGold] = useState(character.gold);
  const [stats, setStats] = useState(character.stats);

  const [equipment, setEquipment] = useState(character.equipment);
  const [inventory, setInventory] = useState(character.inventory);

  const modGold = (amount) => setGold(modCharStat(gold, amount));
  const modStat = (stat, amount) => setStats(modCharStat2(stats, stat, amount));

  const addItemToInv = (itemToAdd) => {
    setInventory(addItemToCharInv(inventory, itemToAdd));
  };

  const removeItemFromInv = (itemToRemove) => {
    setInventory(removeItemFromCharInv(inventory, itemToRemove));
  };

  const unequipItem = (itemToUnequip) => {
    setEquipment(unequipItemChar(equipment, itemToUnequip));
    setInventory(addItemToCharInv(inventory, itemToUnequip));
  };

  const equipItem = (itemToEquip) => {
    const res = equipItemChar(inventory, equipment, itemToEquip);
    setEquipment(res.equipment);
    setInventory(res.inventory);
  };

  /*const equipmentStatMod = (equipment) => {
    equipment.forEach((equippedItem) => {
      if (equippedItem.modMaxHealth) {
        modMaxHealth(equippedItem.maxHealth);
      }
      if (equippedItem.maxMana) {
        modMaxMana(equippedItem.maxMana);
      }
      if (equippedItem.armor) {
        modArmor(equippedItem.armor);
      }
      if (equippedItem.magicResistance) {
        modMagicResistance(equippedItem.magicResistance);
      }
      if (equippedItem.magic) {
        modMagic(equippedItem.magic);
      }
      if (equippedItem.attack) {
        modAttack(equippedItem.attack);
      }
      if (equippedItem.ranged) {
        modRanged(equippedItem.ranged);
      }
    });
  };*/

  useEffect(() => {
    localStorage.setItem(
      'char',
      JSON.stringify({
        name,
        gold,
        stats,
        equipment,
        inventory
      })
    );
  }, [name, gold, stats, equipment, inventory]);

  return (
    <CharContext.Provider
      value={{
        name,
        gold,
        stats,
        equipment,
        inventory,
        modGold,
        modStat,
        equipItem,
        unequipItem,
        addItemToInv,
        removeItemFromInv
      }}
    >
      {children}
    </CharContext.Provider>
  );
};

export default CharProvider;
