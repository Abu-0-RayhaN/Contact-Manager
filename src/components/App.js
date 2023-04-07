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
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  //Fetching all the Data from the api
  const retriveContacts = async () => {
    const response = await api.get(`/contacts`);
    return response.data;
  };
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();
  });
  //

  //
  //Creating New Data to the api
  const AddContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact,
    };
    const response = await api.post(`/contacts`, request);
    setContacts([...contacts, response.data]);
  };

  //
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

  //
  //Delete Data from api
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);
  };

  //
  //Search bar functionalities
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newContactList);
    } else {
      setSearchResult(contacts);
    }
  };

  //

  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            {(props) => (
              <ContactList
                {...props}
                contacts={searchTerm.length < 1 ? contacts : searchResult}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
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
