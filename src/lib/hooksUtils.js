const updateSingleStateValue = (setStateFn, objKey, value) => {
  setStateFn((prevContact) => ({
    ...prevContact,
    objKey: value,
  }));
};
