const getRandomInRange = (min, max) => {
  const rand = Math.floor(Math.random() * (max - min)) + min;
  return rand;
};
export default getRandomInRange;
