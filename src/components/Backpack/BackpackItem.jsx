import React, { useContext } from 'react';

import { CharContext } from '../../context/char/char.context';

import { equipStatTypes } from '../../statTypes';

const BackpackItem = ({ item }) => {
  const { name, type } = item;
  const {
    equipment,
    //stats: { armor },
    equipItem,
    removeItemFromInv,
    modStat
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

  //WIP - programmatic stat modification
  // statTypes.map((statType) => console.log(statType));

  const equip = (itemToEquip) => {
    const currentItem = equipment.find(
      (equippedItem) => equippedItem.type === itemToEquip.type
    );

    equipStatTypes.map((statType) => {
      console.log(statType);
      console.log(itemToEquip[statType] - currentItem[statType]);
      return modStat([statType], itemToEquip[statType] - currentItem[statType]);
    });
    //modStat('armor', itemToEquip.armor - currentItem.armor);

    equipItem(itemToEquip);

    // if (itemToEquip.modMaxHealth) {
    //   modMaxHealth(itemToEquip.maxHealth);
    // }
    // if (itemToEquip.maxMana) {
    //   modMaxMana(itemToEquip.maxMana);
    // }

    //if (itemToEquip.armor) {

    //}

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
