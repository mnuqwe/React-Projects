import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import Test from './useRef';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => { 
    console.log(contact);
    setContacts([...contacts, contact]);
  }

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) {
      setContacts(retriveContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div  className = "ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} /> 
      <Test />
    </div>
  );
}

export default App;
