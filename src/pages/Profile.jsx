import React from "react";
import Nav from "../Nav";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      {/* <Nav /> */}
      <h1>Profile</h1>

      <ul>
        <li>
          <Link to="daniel">daniel</Link>
        </li>
        <li>
          <Link to="john">john</Link>
        </li>
        <li>
          <Link to="codedamn">codedamn</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
