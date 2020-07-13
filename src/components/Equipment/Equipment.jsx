import React, { useContext } from 'react';

import { CharContext } from '../../context/char/char.context';
import { loadItem } from '../../context/items/items.context';
//import ItemsContext from '../../context/items/items.context';

import EquipmentItem from './EquipmentItem';

const Equipment = () => {
  const { equipment, addItemToInv } = useContext(CharContext);

  //const itemsMap = useContext(ItemsContext);
  // const items = Object.keys(itemsMap).map((key) => itemsMap[key]);

  //console.log(itemsMap);

  /*const loadItem = (name, type) => {
    return itemsMap[type].find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
  };*/

  //console.log(itemsMap.head[0].name);
  //console.log(loadItem('wizard Hat', 'head'));

  /*class HeadItem {
    constructor(name, type, stats = {}) {
      this.name = name;
      this.type = type;
      //this.stats = stats;
      Object.assign(
        this,
        {
          armor: 0,
          magicResistance: 0
        },
        stats
      );
    }
  }

  let classHat = new HeadItem('Classical monocle', 'head', {
    armor: 5
  });
  const myArray = [1, 2, 3];
  const myArray0 = [0, 4];
  const myArray3 = [...myArray, ...myArray0, classHat];

  console.log(classHat);
  //console.log(classHat.name);
  console.log(myArray3[5].name);*/

  // const myObj = { key1: 1, key2: 2 };
  // const add2Obj = (obj, key) => {
  //   obj[key] += 10;
  //   return obj;
  // };
  // console.log(add2Obj(myObj, 'key1'));

  const potionX = {
    name: 'potion x',
    type: 'potion'
  };

  // const calcArmorStats = equipment.reduce(
  //   (armorSum, item) => armorSum + item.armor,
  //   0
  // );

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
