import AddContact from "./AddContact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import ContactList from "./ContactList";
// import ContactCard from './ContactCard'
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/contacts";
function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //Fetching all the Data from the api
  const retriveContacts = async () => {
    const response = await api.get(`/contacts`);
    return response.data;
  };
  //Creating New Data to the api
  const AddContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post(`/contacts`, request);
    setContacts([...contacts, response.data]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...contacts, contact])
    );
  };
  //update Contact Function
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  });

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            )}
          </Route>
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} AddContactHandler={AddContactHandler} />
            )}
          />
          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}
              />
            )}
          />
          <Route path="/contact/:id" component={ContactDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
