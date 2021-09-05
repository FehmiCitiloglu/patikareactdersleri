import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";
function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Fehmi",
      phone_number: "131165",
    },
    {
      fullname: "Ali",
      phone_number: "32663211",
    },
    {
      fullname: "Ahmet",
      phone_number: "669665465",
    },
    {
      fullname: "Ayşe",
      phone_number: "66955",
    },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <Form addContacts={setContacts} contacts={contacts} />
      <List contacts={contacts} />
    </div>
  );
}

export default Contacts;
