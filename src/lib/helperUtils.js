const sContacts = contacts.sort((a, b) => -b.name.localeCompare(a.name));
const order = (a, b) => {
  return a < b ? -1 : a > b ? 1 : 0;
};
