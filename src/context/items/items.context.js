//import { createContext } from 'react';
import { equipStatTypes } from '../../statTypes';

import HEAD_ITEMS from './data/head';
import CHEST_ITEMS from './data/chest';
import LEGS_ITEMS from './data/legs';
import HANDS_ITEMS from './data/hands';

const mergeMap = {
  head: HEAD_ITEMS,
  chest: CHEST_ITEMS,
  legs: LEGS_ITEMS,
  hands: HANDS_ITEMS
};
//const merge = Object.keys(mergeMap).map((key) => mergeMap[key]);

//console.log(mergeMap);
// console.log(merge);

/*const typeFormat = (items) => {
  const formatedItems = items.map((item) => (item = { ...item, type: 'head' }));
  return formatedItems;
};*/
// const typeFormat2 = (items) => {
//   const formatedItems = Object.keys(items).map((key) =>
//     items[key].map((item) => (item = { ...item, type: key }))
//   );
//   return formatedItems;
// };

const typeFormat3 = (items) => {
  return /*const formatedItems =*/ Object.keys(items).map((key) =>
    items[key].map((item) => {
      let itemEq = {};
      equipStatTypes.map((statType) => {
        return item[statType]
          ? item[statType]
          : (itemEq = { ...itemEq, [statType]: 0 });
      });
      return (item = { ...item, ...itemEq, type: key });
    })
  );
  //return formatedItems;
};

const mid1 = typeFormat3(mergeMap);
//console.log(typeFormat2(mergeMap));
//console.log(typeFormat3(mergeMap));

const back2obj = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return { ...obj, [item[0][key]]: item };
  }, initialValue);
};

const finalForm = back2obj(mid1, 'type');
//console.log(finalForm);

//const headF = typeFormat(merge);

//const ItemsContext = createContext();

export const loadItem = (name, type) => {
  return finalForm[type].find(
    (item) => item.name.toLowerCase() === name.toLowerCase()
  );
};

//export default ItemsContext;
