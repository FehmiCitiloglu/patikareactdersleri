import React from "react";

function List({ todos, addTodos }) {
  return (
    <div>
      <ul>
        {todos.map((todo, i) => (
          <div key={i}>
            <input type="checkbox" id={"todo-" + { i }} checked={todo.check} />

            <li>{todo.text}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default List;
