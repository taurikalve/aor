import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

const EquipmentItem = ({ equippedItem }) => {
  const { unequipItemToInv } = useContext(CharContext);
  const { name, type } = equippedItem;
  return (
    <div>
      {type.toUpperCase() + ' : '}
      <b>{name}</b>
      {name.length ? (
        <button
          onClick={() => {
            unequipItemToInv(equippedItem);
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
