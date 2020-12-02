export const calcRuntime = (time) => {
  const num = time.split(' ')[0];
  const hours = Math.floor(num / 60);
  const mins = num % 60;
  return `${hours}hr ${mins}min`;
};
