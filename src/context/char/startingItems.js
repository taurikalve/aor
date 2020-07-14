import { equipStatTypes } from '../../types/statTypes';

let STARTING_ITEMS = [
  {
    name: 'linen underwear',
    type: 'legs',
    id: 'placeholderLegs'
  },
  { name: 'straw hat', type: 'head', id: 'placeholderHead' },
  {
    name: 'dirty shirt',
    type: 'chest',
    id: 'placeholderChest'
  },
  { name: '', type: 'hands', id: 'hands' }
];

STARTING_ITEMS = STARTING_ITEMS.map((item) => {
  let itemEq = {};
  equipStatTypes.map((stat) => {
    return item[stat] ? item[stat] : (itemEq = { ...itemEq, [stat]: 0 });
  });
  return { ...item, ...itemEq };
});

export default STARTING_ITEMS;
