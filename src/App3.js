import React, { useState } from "react";

let globalID = 0;

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState([]);

  function createTodoTask(event) {
    event.preventDefault();
    console.log(`input task is: ${task}`);
    setTodo((todos) => {
      setTask("");
      return [...todos, { todo: task, id: globalID++ }];
    });
  }

  function deleteItem(itemID) {
    console.log("delete id; ", itemID);

    setTodo((todos) => todos.filter((item) => item.id !== itemID));
  }

  return (
    <>
      <header>
        <h1>My Simple Todo App</h1>
      </header>

      <main>
        <form onSubmit={createTodoTask}>
          <input
            type="text"
            value={task}
            onChange={(event) => {
              setTask(event.target.value);
            }}
          />
          <button type="submit">Create Task</button>
        </form>

        <ul>
          {todos.map((item, index) => {
            return (
              <div>
                <li key={item.id}>
                  {item.todo} ({item.id})
                </li>

                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </div>
            );
          })}
        </ul>
      </main>
    </>
  );
}
