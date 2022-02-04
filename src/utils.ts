/* eslint-disable camelcase */
const random_in_range = (max: number) => Math.floor(Math.random() * max);

const select_one_from_many = (things: string[]): string => things[random_in_range(things.length)];

export const some_of_the_things_i_like = () => {
  const the_things_i_like = [
    'bikes',
    'drones',
    'cars',
    'cammie',
    'gorb',
    'the desert',
    'audio equipment',
    'drums',
    'trashbag',
  ];
  return select_one_from_many(the_things_i_like);
};
