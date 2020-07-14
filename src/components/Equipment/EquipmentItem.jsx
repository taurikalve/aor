import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';
import { equipStatTypes } from '../../types/statTypes';

const EquipmentItem = ({ equippedItem }) => {
  const { name, type } = equippedItem;
  const { unequipItem, modStat } = useContext(CharContext);

  const unequip = (itemToUnequip) => {
    unequipItem(itemToUnequip);
    equipStatTypes.map((stat) => {
      return modStat([stat], -1 * itemToUnequip[stat]);
    });
  };

  return (
    <div>
      {type.toUpperCase() + ' : '}
      <b>{name}</b>
      {name.length ? (
        <button
          onClick={() => {
            unequip(equippedItem);
          }}
        >
          X
        </button>
      ) : (
        <i>Empty</i>
      )}
    </div>
  );
};

export default EquipmentItem;
