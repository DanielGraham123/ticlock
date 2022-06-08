import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Nav";

export default function Invoices() {
  return (
    <div>
      {/* <Nav /> */}
      <h1>Invoices</h1>

      <Outlet />
    </div>
  );
}
