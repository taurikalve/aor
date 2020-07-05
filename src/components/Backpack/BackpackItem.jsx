import React, { useContext } from 'react';

import { CharContext } from '../../context/char/char.context';

const BackpackItem = ({ item }) => {
  const { name, type } = item;
  const {
    equipItem,
    //equipment,
    /*modArmor,
    modMagicResistance,
    modMagic,
    modAttack,
    modRanged,*/
    removeItemFromInv
  } = useContext(CharContext);

  const isEquippable = (type) => {
    if (
      type === 'head' ||
      type === 'chest' ||
      type === 'legs' ||
      type === 'hands'
    ) {
      return true;
    }
  };

  const equip = (itemToEquip) => {
    equipItem(itemToEquip);

    // if (itemToEquip.armor) {
    //   modArmor(itemToEquip.armor);
    // }
    // if (itemToEquip.magicResistance) {
    //   modMagicResistance(itemToEquip.magicResistance);
    // }
    // if (itemToEquip.magic) {
    //   modMagic(itemToEquip.magic);
    // }
    // if (itemToEquip.attack) {
    //   modAttack(itemToEquip.attack);
    // }
    // if (itemToEquip.ranged) {
    //   modRanged(itemToEquip.ranged);
    // }
  };

  return (
    <div className='item'>
      <h4>{name}</h4>
      <p>{type}</p>
      <button
        onClick={() => {
          removeItemFromInv(item);
        }}
      >
        X
      </button>
      {isEquippable(type) ? (
        <button
          onClick={() => {
            equip(item);
          }}
        >
          Equip
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default BackpackItem;
