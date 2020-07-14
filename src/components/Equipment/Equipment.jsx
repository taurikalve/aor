import React, { useContext } from 'react';

import { CharContext } from '../../context/char/char.context';
import loadItem from '../../db/items/items.db';
//import ItemsContext from '../../context/items/items.context';

import EquipmentItem from './EquipmentItem';

const Equipment = () => {
  const { equipment, addItemToInv } = useContext(CharContext);

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
          addItemToInv(loadItem('healing potion', 'consumable'));
        }}
      >
        Add <b>Health Potion</b> to inv
      </button>
      <button
        onClick={() => {
          addItemToInv(loadItem('rejuvenating potion', 'consumable'));
        }}
      >
        Add <b>Rejuvenating Potion</b> to inv
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          addItemToInv(loadItem('wizard hat', 'head'));
        }}
      >
        Add <b>Wizard hat</b> to inv
      </button>
      <button
        onClick={() => {
          addItemToInv(loadItem('wizard robe', 'chest'));
        }}
      >
        Add <b>Wizard robe</b> to inv
      </button>
      <button
        onClick={() => {
          addItemToInv(loadItem('wizard staff', 'hands'));
        }}
      >
        Add <b>Wizard staff</b> to inv
      </button>
      <br />
      <button
        onClick={() => {
          addItemToInv(loadItem('straw hat', 'head'));
        }}
      >
        Add <b>Straw hat</b> to inv
      </button>
      <button
        onClick={() => {
          addItemToInv(loadItem('cotton shorts', 'legs'));
        }}
      >
        Add <b>Cotton shorts</b> to inv
      </button>
    </div>
  );
};

export default Equipment;
