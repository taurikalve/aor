import React, { useContext } from 'react';

import { CharContext } from '../../context/char/char.context';

import { equipStatTypes, consumeStatTypes } from '../../types/statTypes';

const BackpackItem = ({ item }) => {
  const { name, type } = item;
  const {
    equipment,
    stats: { health, maxHealth, mana, maxMana },
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
  const isConsumeable = (type) => {
    if (type === 'consumable') {
      return true;
    }
  };

  const equip = (itemToEquip) => {
    const currentItem = equipment.find(
      (equippedItem) => equippedItem.type === itemToEquip.type
    );

    equipStatTypes.map((statType) => {
      //console.log(statType);
      //console.log(itemToEquip[statType] - currentItem[statType]);
      return modStat([statType], itemToEquip[statType] - currentItem[statType]);
    });

    equipItem(itemToEquip);
  };

  const use = (itemToUse) => {
    removeItemFromInv(itemToUse);

    return consumeStatTypes.map((stat) => {
      if (stat === 'health') {
        console.log(stat);
        const healthGap = maxHealth - health;
        if (healthGap < itemToUse.health) {
          return modStat('health', healthGap);
        }
        return modStat('health', itemToUse.health);
      }
      if (stat === 'mana') {
        const manaGap = maxMana - mana;
        if (manaGap < itemToUse.mana) {
          return modStat('mana', manaGap);
        }
        return modStat('mana', itemToUse.mana);
      }
    });
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
      {isConsumeable(type) ? (
        <button
          onClick={() => {
            use(item);
          }}
        >
          Use
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default BackpackItem;
