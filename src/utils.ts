/* eslint-disable camelcase */
const random_in_range = (max: number) => Math.floor(Math.random() * max);

const select_one_from_many = (things: string[]): string => things[random_in_range(things.length)];

const love_or_like = (the_thing_i_might_love: string) => {
  switch (the_thing_i_might_love) {
    case 'gorb':
    case 'trashbag':
    case 'cammie':
      return 'love';
    default:
      return 'like';
  }
};

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
  const thing_it_chose = select_one_from_many(the_things_i_like);
  return `i ${love_or_like(thing_it_chose)} ${thing_it_chose}`;
};
