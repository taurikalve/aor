import { v4 as uuidv4 } from 'uuid';

export const modCharStat = (stat, amount) => {
  return stat + amount;
};

export const unequipItemChar = (equippedItems, itemToUnequip) => {
  const updatedEquippedItems = equippedItems.filter(
    (equippedItem) => equippedItem.name !== itemToUnequip.name
  );

  return [
    ...updatedEquippedItems,
    { name: '', type: itemToUnequip.type, id: itemToUnequip.type }
  ];
};

export const addItemToCharInv = (inventory, itemToAdd) => {
  itemToAdd = { ...itemToAdd, ...{ id: uuidv4() } };
  return [...inventory, itemToAdd];
};

export const removeItemFromCharInv = (inventory, itemToRemove) => {
  return inventory.filter((item) => item.id !== itemToRemove.id);
};

export const equipItemChar = (inventory, equipment, itemToEquip) => {
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
