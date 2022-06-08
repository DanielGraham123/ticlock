import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function User() {
  const { username } = useParams();
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch("/users.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log("data: ", data);
        setUserData(data[username]);
      });
  }, [username]);

  return (
    <div>
      <p>Name: {userData?.name} </p>
      <p>Age: {userData?.age} </p>
    </div>
  );
}
