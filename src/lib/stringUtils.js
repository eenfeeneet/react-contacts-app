// The crypto module on npm has been deprecated in favour of Node's
// So I this is pulling in the module crypto-browserify
// We should keep that up-to-date (although this project is not so security sensitive)
const crypto = require('crypto');

export function getVeryRandomFloat() {
  const numBytes = 6;
  const max = Math.pow(256, numBytes);
  const val = parseInt(crypto.randomBytes(numBytes).toString('hex'), 16);
  return val / max;
}

export function generateRandomStringFromAlphabet(alphabet, length) {
  if (typeof length !== 'number') {
    length = 20;
  }
  let token = '';
  for (let i = 0; i < length; i++) {
    const j = Math.floor(alphabet.length * getVeryRandomFloat());
    const c = alphabet[j];
    token = token + c;
  }
  return token;
}

export function generateRandomString(length) {
  const alphabet =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return generateRandomStringFromAlphabet(alphabet, length);
}

export function generateRandomPassword(length) {
  const alphabet =
    'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890';
  return generateRandomStringFromAlphabet(alphabet, length);
}

export function prettyNumber(num, digits = 0) {
  return Number(num).toLocaleString(undefined, {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function splitNames(fName) {
  const out = {};
  const arrFullName = fName.split(' ');
  if (arrFullName.length === 1) {
    out.firstName = arrFullName[0];
    out.surName = '';
  }
  if (arrFullName.length === 2) {
    out.firstName = arrFullName[0];
    out.surName = arrFullName[1];
  }
  if (arrFullName.length === 3) {
    out.firstName = arrFullName[0];
    out.surName = arrFullName[2];
    out.middleName = arrFullName[1];
  }
  return out;
}

export function getInitials(fName) {
  const out = {};
  const arrFullName = fName.split(' ');
  if (arrFullName.length === 1) {
    out.initials =
      arrFullName[0][0].toUpperCase() + arrFullName[0][1].toUpperCase();
  }
  if (arrFullName.length === 2) {
    out.initials =
      arrFullName[0][0].toUpperCase() + arrFullName[1][0].toUpperCase();
  }
  if (arrFullName.length === 3) {
    out.initials =
      arrFullName[0][0].toUpperCase() + arrFullName[2][0].toUpperCase();
  }
  return out;
}
