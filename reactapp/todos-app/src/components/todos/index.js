import List from "./List";
import Form from "./Form";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function Todos() {
  const [todos, setTodos] = useState([
    {
      text: "",
      checked: false,
    },
  ]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <Form todos={todos} addTodos={setTodos} />
      <List todos={todos} addTodos={setTodos} />
      <Footer />
    </div>
  );
}

export default Todos;
