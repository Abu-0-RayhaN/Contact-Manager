import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import AddContact from "./AddContact";
// import ContactCard from './ContactCard'
import ContactList from "./ContactList";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...contacts, contact])
    );
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  return (
    <div className="container">
      <Header />
      <AddContact AddContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

export default App;
