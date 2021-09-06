import { useState } from "react";

const initialFormValue = { text: "" };
function Form({ todos, addTodos }) {
  const [form, setForm] = useState(initialFormValue);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.text === "") {
      return false;
    }

    addTodos([...todos, form]);
    setForm(initialFormValue);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="text"
          placeholder="What need to be done"
          value={form.text}
          onChange={onChangeInput}
        />
      </form>
    </div>
  );
}

export default Form;
