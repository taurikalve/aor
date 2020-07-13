import React, { createContext, useState, useEffect } from 'react';

import {
  equipItemChar,
  addItemToCharInv,
  removeItemFromCharInv,
  unequipItemChar
} from './charItems.utils';

const CharItemsContext = createContext();

export const CharProvider = ({ children }) => {
  let characterItems = JSON.parse(localStorage.getItem('charItems'));
  if (!characterItems) {
    characterItems = {
      equipment: [
        { name: 'linen underwear', type: 'legs', id: 'placeholderLegs' },
        { name: 'straw hat', type: 'head', id: 'placeholderHead' },
        { name: 'dirty shirt', type: 'chest', id: 'placeholderChest' },
        { name: '', type: 'hands', id: 'hands' }
      ],
      inventory: [],
      equipItem: () => {},
      unequipItem: () => {},
      addItemToInv: () => {},
      removeItemFromInv: () => {}
    };
  }

  const [equipment, setEquipment] = useState(character.equipment);
  const [inventory, setInventory] = useState(character.inventory);

  const addItemToInv = (itemToAdd) => {
    setInventory(addItemToCharInv(inventory, itemToAdd));
  };

  const removeItemFromInv = (itemToRemove) => {
    setInventory(removeItemFromCharInv(inventory, itemToRemove));
  };

  const equipItem = (itemToEquip) => {
    const res = equipItemChar(inventory, equipment, itemToEquip);
    setEquipment(res.equipment);
    setInventory(res.inventory);
  };

  const unequipItem = (itemToUnequip) => {
    setEquipment(unequipItemChar(equipment, itemToUnequip));
    setInventory(addItemToCharInv(inventory, itemToUnequip));
  };

  useEffect(() => {
    localStorage.setItem(
      'charItems',
      JSON.stringify({
        equipment,
        inventory
      })
    );
  }, [equipment, inventory]);

  return (
    <CharItemsContext.Provider
      value={{
        equipment,
        inventory,
        addItemToInv,
        removeItemFromInv,
        equipItem,
        unequipItem
      }}
    >
      {children}
    </CharItemsContext.Provider>
  );
};

export default CharItemsContext;
