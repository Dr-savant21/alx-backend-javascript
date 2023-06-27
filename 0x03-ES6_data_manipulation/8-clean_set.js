// export default function cleanSet(set, startString) {
//   if (!startString || typeof startString !== 'string' || typeof set !== 'object') return '';
//   return [...set]
//     .filter((el) => el.startsWith(startString))
//     .map((el) => el.slice(startString.length))
//     .join('-');
// }

export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  set.forEach((i) => {
    if (i && i.startsWith(startString)) result += `${i.slice(startString.length)}-`;
  });
  return result.slice(0, result.length - 1);
}
