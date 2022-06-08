import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link> |{"  "}
      <Link to="/invoices">Invoices</Link> |{"  "}
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
