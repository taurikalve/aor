import React, { useContext } from 'react';
import { CharContext } from '../../context/char/char.context';

import EquipmentItem from './EquipmentItem';

const Equipment = () => {
  const { equipment, addItemToInv } = useContext(CharContext);

  const wizardHat = {
    name: 'wizard hat',
    type: 'head',
    armor: 5,
    magicResistance: 50,
    magic: 50
  };

  const strawHat = {
    name: 'straw hat',
    type: 'head'
  };

  const potionX = {
    name: 'potion x',
    type: 'potion'
  };

  return (
    <div>
      <h2>Equipment "screen"</h2>
      {equipment.map((equippedItem) => (
        <EquipmentItem key={equippedItem.id} equippedItem={equippedItem} />
      ))}
      <br />
      <br />
      <button
        onClick={() => {
          addItemToInv(potionX);
        }}
      >
        Add <b>Potion X</b> to inv
      </button>{' '}
      <br />
      <br />
      <button
        onClick={() => {
          addItemToInv(wizardHat);
        }}
      >
        Add <b>Wizard hat</b> to inv
      </button>
      <button
        onClick={() => {
          addItemToInv(strawHat);
        }}
      >
        Add <b>Straw hat</b> to inv
      </button>
    </div>
  );
};

export default Equipment;
