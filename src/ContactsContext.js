import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ContactsContext = createContext(null);

export const ContactsProvider = (props) => {
  const { children } = props;

  const [allContacts, setAllContacts] = useState({
    contacts: [
      {
        id: 1,
        initials: 'HH',
        firstName: 'Hunter',
        surName: 'Helmsley',
        gender: 'Male',
        phone: 12345678,
      },
      {
        id: 2,
        initials: 'JJ',
        firstName: 'Jolyn',
        surName: 'Joutaro',
        gender: 'Female',
        phone: 123459876,
      },
      {
        id: 3,
        initials: 'SJ',
        firstName: 'Souchi',
        surName: 'Joutaro',
        gender: 'Male',
        phone: 987651234,
      },
      {
        id: 4,
        initials: 'JO',
        firstName: 'Jimmy',
        surName: 'Olsen',
        gender: 'Male',
        phone: 975318642,
      },
      {
        id: 5,
        initials: 'NR',
        firstName: 'Nico',
        surName: 'Robin',
        gender: 'Female',
        phone: 135792468,
      },
      {
        id: 6,
        initials: 'CK',
        firstName: 'Clark',
        surName: 'Kent',
        gender: 'Male',
        phone: 918273645,
      },
      {
        id: 7,
        initials: 'DP',
        firstName: 'Diana',
        surName: 'Prince',
        gender: 'Female',
        phone: 192837465,
      },
      {
        id: 8,
        initials: 'BN',
        firstName: 'Buzz',
        surName: 'Lightyear',
        gender: 'Male',
        phone: 876345123,
      },
      {
        id: 9,
        initials: 'FD',
        firstName: 'Fleur',
        surName: 'Delacour',
        gender: 'Female',
        phone: 86745123,
      },
      {
        id: 10,
        initials: 'JJ',
        firstName: 'Jun',
        surName: 'Jie',
        gender: 'Male',
        phone: 87654321,
      },
      {
        id: 11,
        initials: 'AC',
        firstName: 'Arthur',
        surName: 'Curry',
        gender: 'Male',
        phone: 12345678,
      },
      {
        id: 12,
        initials: 'GZ',
        firstName: 'God',
        surName: 'Zilla',
        gender: 'Male',
        phone: 123459876,
      },
      {
        id: 13,
        initials: 'IJ',
        firstName: 'Indiana',
        surName: 'Jones',
        gender: 'Male',
        phone: 987651234,
      },
      {
        id: 14,
        initials: 'KE',
        firstName: 'Kara',
        surName: 'El',
        gender: 'Female',
        phone: 975318642,
      },
      {
        id: 15,
        initials: 'LL',
        firstName: 'Lois',
        surName: 'Lane',
        gender: 'Female',
        phone: 135792468,
      },
      {
        id: 16,
        initials: 'MS',
        firstName: 'Mandy',
        surName: 'Starfire',
        gender: 'Female',
        phone: 918273645,
      },
      {
        id: 17,
        initials: 'OJ',
        firstName: 'Orion',
        surName: 'James',
        gender: 'Male',
        phone: 192837465,
      },
      {
        id: 18,
        initials: 'PJ',
        firstName: 'Phenom',
        surName: 'Jackson',
        gender: 'Male',
        phone: 876345123,
      },
      {
        id: 19,
        initials: 'RC',
        firstName: 'Rain',
        surName: 'Cloud',
        gender: 'Female',
        phone: 86745123,
      },
      {
        id: 20,
        initials: 'BW',
        firstName: 'Bruce',
        surName: 'Wayne',
        gender: 'Male',
        phone: 87654321,
      },
      {
        id: 21,
        initials: 'MH',
        firstName: 'Muhammad',
        surName: 'Hafiz',
        gender: 'Male',
        phone: 81866649,
      },
      {
        id: 22,
        initials: 'JE',
        firstName: 'Jor',
        surName: 'El',
        gender: 'Male',
        phone: 246813579,
      },
    ],
  });
  // const [newContact, setNewContact] = useState({
  //   id: '',
  //   fullName: '',
  //   initials: '',
  //   firstName: '',
  //   surname: '',
  //   phone: '',
  //   gender: 'other',
  // });
  const [newContact, setNewContact] = useState({
    isCreated: false,
    gender: 'other',
  });
  const [existingFields, setExistingFields] = useState({
    name: false,
    phone: false,
  });
  const [errorMsg, setErrorMsg] = useState({
    name: 'That name already exists',
    phoneMsg: 'That number already exists',
  });

  const [searchedContacts, setSearchedContacts] = useState({});
  const [selectedContact, setSelectedContact] = useState({
    selected: false,
    contactId: null,
    contact: {},
  });

  return (
    <ContactsContext.Provider
      value={[
        [allContacts, setAllContacts],
        [newContact, setNewContact],
        [existingFields, setExistingFields],
        [errorMsg, setErrorMsg],
        [searchedContacts, setSearchedContacts],
        [selectedContact, setSelectedContact],
      ]}
    >
      {children}
    </ContactsContext.Provider>
  );
};

ContactsProvider.propTypes = {
  children: PropTypes.node,
};
