import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav />

      <h1>This is the home page</h1>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<h1>This is the Blog page</h1>}></Route>
        </Routes>
      </BrowserRouter> */}

      <Outlet />
    </div>
  );
}

export default App;
