import AddContact from "./AddContact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import ContactList from "./ContactList";
// import ContactCard from './ContactCard'
import ContactDetails from "./ContactDetails";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const AddContactHandler = (contact) => {
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([...contacts, contact])
    );
  };
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newContactList));
  };

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
          <Route path="/contact/:id" component={ContactDetails}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
