module.exports = (string, subString) => {
  string += '';
  subString += '';
  if (subString.length <= 0)  {
    return (string.length + 1);
  }

  let n = 0;
  let pos = 0;
  let step = subString.length;

  while (true) {
    pos = string.indexOf(subString, pos);
    if (pos >= 0) {
      ++n;
      pos += step;
    } else {
      break;
    }
  }

  return n;
};
