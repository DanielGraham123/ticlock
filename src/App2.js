import React, { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState(["eat", "drink", "sleep"]);

  function createTodoTask() {
    console.log(`input task is: ${task}`);
    setTodo((todos) => [...todos, task]);
  }

  return (
    <>
      <header>
        <h1>My Simple Todo App</h1>
      </header>

      <main>
        <input
          type="text"
          value={task}
          onChange={(event) => {
            setTask(event.target.value);
          }}
        />
        <button onClick={createTodoTask}>Create Task</button>

        <ul>
          {todos.map((todo) => {
            return <li key={todo}>{todo}</li>;
          })}
        </ul>
      </main>
    </>
  );
}
