import React from "react";
import moment from "moment";
import logo from "./assets/Ticlock.png";

function App() {
  return (
    <div className="w-full h-screen flex justify-center flex-col text-center bg-[#050A30]">
      <div className="">
        <img
          src={logo}
          alt="logo image"
          className="mx-auto"
          style={{ width: "80px" }}
        />
      </div>

      <h1 className="py-8 text-lg text-gray-500">Hello There</h1>

      <div className=" pb-2 px-4">
        <small className="text-teal-700">Today is:</small>
        <h1 className="text-2xl md:text-3xl duration-300 text-gray-500">
          {moment(new Date().toLocaleDateString()).format("dddd, MMMM Do YYYY")}
        </h1>
      </div>

      <div className="pt-6 pb-8 px-4">
        <small className="text-red-800">The time is:</small>
        <h3 className="text-4xl md:text-6xl font-medium duration-300 text-gray-500">
          {new Date().toLocaleTimeString()}
        </h3>
      </div>
    </div>
  );
}

export default App;
