import React from "react";
import { useParams } from "react-router-dom";

export default function Invoice() {
  const { invoiceId } = useParams();
  return (
    <div>
      <h2>Invoice ID: {invoiceId}</h2>
    </div>
  );
}
