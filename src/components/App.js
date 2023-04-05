import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import AddContact from "./AddContact";
// import ContactCard from './ContactCard'
import ContactList from "./ContactList";
function App() {
  const contacts = [
    { id: "1", name: "Dipash", email: "mavlig@gmail.com" },
    { id: "2", name: "Omi", email: "Omig@gmail.com" },
  ];
  return (
    <div className="container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
