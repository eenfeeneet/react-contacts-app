import matchSorter from 'match-sorter';

export const mapProps = (obj, mapFn) => {
  const out = {};
  Object.entries(obj).forEach(([key, value]) => {
    out[key] = mapFn(value);
  });
  return out;
};

export const filterProps = (obj, filterFn) => {
  const out = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (filterFn(value)) {
      out[key] = value;
    }
  });
  return out;
};

export const sortProps = (cArray, objKey, input) => {
  const res = matchSorter(cArray, input, {
    threshold: matchSorter.rankings.EQUAL,
    keys: [objKey],
  });

  return Array.isArray(res) && res.length;
};

export const checkForMatch = (cArray, objKey, input) => {
  const out = {};
  const res = matchSorter(cArray, input, {
    threshold: matchSorter.rankings.EQUAL,
    keys: [objKey],
  });
  out.data = res;
  out.length = res.length;

  return out;
};

export const sortAscending = (objList, objKey) => {
  const out = {};
  const res = matchSorter(objList, '', {
    keys: [objKey],
  });
  out.data = res;

  return out;
};

// Typecast the variable to Boolean, where str is a variable.
// It returns false for null,undefined,0,000,"",false.
// It returns true for string "0" and whitespace " ".
const checkStrInputFields = (str) => {
  if (Boolean(str)) {
    return true;
  } else {
    return false;
  }
};

export const compareAscending = (a, b) => {
  return a < b ? -1 : a > b ? 1 : 0;
};
export const compareDescending = (a, b) => {
  return b < a ? -1 : b > a ? 1 : 0;
};
