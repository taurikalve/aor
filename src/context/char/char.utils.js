import { v4 as uuidv4 } from 'uuid';
import { equipStatTypes } from '../../types/statTypes';

export const modCharStat = (stat, amount) => {
  return stat + amount;
};

export const modCharStat2 = (stats, stat, amount) => {
  stats[stat] += amount;
  return { ...stats };
  // const save = stats[stat];
  // delete stats.stat;
  // return { ...stats, ...{ [stat]: save + amount } };
};

export const addItemToCharInv = (inventory, itemToAdd) => {
  itemToAdd = { ...itemToAdd, ...{ id: uuidv4() } };
  return [...inventory, itemToAdd];
};

export const removeItemFromCharInv = (inventory, itemToRemove) => {
  return inventory.filter((item) => item.id !== itemToRemove.id);
};

export const equipItemChar = (inventory, equipment, itemToEquip) => {
  // if (!itemToEquip.armor) {
  //   itemToEquip = { ...itemToEquip, ...{ armor: 0 } };
  // }
  const currentItemInSlot = equipment.find(
    (equippedItem) => equippedItem.type === itemToEquip.type
  );
  if (currentItemInSlot.name !== '') {
    inventory = [...inventory, currentItemInSlot];
  }
  inventory = inventory.filter((item) => item.id !== itemToEquip.id);
  equipment = equipment.map((equippedItem) =>
    itemToEquip.type === equippedItem.type ? itemToEquip : equippedItem
  );
  return { ...{ inventory: inventory }, ...{ equipment: equipment } };
};

export const unequipItemChar = (equippedItems, itemToUnequip) => {
  const updatedEquippedItems = equippedItems.filter(
    (equippedItem) => equippedItem.name !== itemToUnequip.name
  );
  let pFiller = {};
  equipStatTypes.map((stat) => {
    return (pFiller = { ...pFiller, [stat]: 0 });
  });
  return [
    ...updatedEquippedItems,
    {
      name: '',
      type: itemToUnequip.type,
      id: itemToUnequip.type,
      ...pFiller
    }
  ];
  // return {
  //   ...{
  //     inventory: [
  //       ...updatedEquippedItems,
  //       {
  //         name: '',
  //         type: itemToUnequip.type,
  //         id: itemToUnequip.type,
  //         ...pFiller
  //       }
  //     ]
  //   }
  // };
};

// export const useItemChar = (inventory, itemToUse) => {
//   inventory.filter((item) => item.id !== itemToUse.id);
// }
