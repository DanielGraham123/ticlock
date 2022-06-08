import React, { useEffect } from "react";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function App() {
  useEffect(() => {
    fetch("/users.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("data: ", data);
      });
  }, []);

  return (
    <div>
      <Nav />
      <h1>This is the home page</h1>

      <Outlet />
    </div>
  );
}

export default App;
