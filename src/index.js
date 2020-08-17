import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContactsProvider } from './ContactsContext';

ReactDOM.render(
  <React.StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
