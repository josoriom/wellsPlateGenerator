'use strict';

const wellsPlateGenerator = require('./index');

let configuration = {
  parameters: {
    extracts: [
      { value: 'extract1', id: 1 },
      { value: 'extract2', id: 2 },
      { value: 'extract3', id: 3 },
      { value: 'extract4', id: 4 },
      { value: 'extract5', id: 5 },
    ],
    concentration: [{ value: 0.666 }, { value: 0.333 }, { value: 0.165 }],
    strain: [
      { value: 'strain1', id: 1 },
      { value: 'strain2', id: 2 },
    ],
  },
  controls: [
    {
      strain: { value: 'strain1', id: 1 },
      concentration: { value: 0.333 },
      id: 11,
    },
    {
      strain: { value: 'strain2', id: 1 },
      concentration: { value: 0.333 },
      id: 22,
    },
    {
      extract: { value: 'extract1', id: 1 },
      concentration: { value: 0.333 },
      id: 12,
    },
    {
      extract: { value: 'extract2', id: 2 },
      concentration: { value: 0.333 },
      id: 22,
    },
  ],
};

// let configuration = {
//   parameters: {
//     extracts: ['extract1', 'extract2', 'extract3', 'extract4', 'extract5'],
//     concentration: [0.666, 0.333, 0.165],
//     strain: ['strain1', 'strain2'],
//   },
//   controls: [
//     {
//       strain: 'strain1',
//       concentration: 0.333,
//       id: 11,
//     },
//     {
//       strain: 'strain2',
//       concentration: 0.333,
//       id: 22,
//     },
//     { extract: 'extract1', concentration: 0.333, id: 12 },
//     { extract: 'extract2', concentration: 0.333, id: 22 },
//   ],
// };

let options = {
  rows: 8,
  columns: 10,
  replicates: 3,
  plates: 2,
  initPlate: 1,
  color: undefined,
  random: false,
  direction: 'horizontal',
};

let data = new wellsPlateGenerator(configuration, options);

// eslint-disable-next-line no-console
// console.log(data.getSamples());
// eslint-disable-next-line no-console
console.log(JSON.stringify(data.getWellsList()));
