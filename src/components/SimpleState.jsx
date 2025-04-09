import React from "react";
import { useState } from "react";

const SimpleState = () => {
  const [name, setName] = useState("Declan");
  const handleNameChange = () => {
    if (name === "Declan") {
      setName("saka");
    } else {
      setName("Declan");
    }
  };
  const [num, setNum] = useState(0);

  // increaase
  const handleIncrease = () => {
    setNum(num + 1);
  };

  // decrease
  const handleDecrease = () => {
    setNum(num - 1);
  };
  const details = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, iure a. Quo labore repellendus iusto tempora, quam harum laboriosam, illum dolores, facilis eaque enim similique nesciunt pariatur adipisci dolor magni. Reprehenderit non beatae magnam hic, fugiat natus labore explicabo eius adipisci commodi tenetur! Officia blanditiis quos iste impedit expedita aperiam.`;
  const [show, setShow] = useState(false);
  const handleShowDetails = () => {
    setShow(!show);
  };

  return (
    <div className="py-10 text-center">
      <h1 className="text-3xl font-bold">UseState 1</h1>
      <p className="m-4 font-bold">my name is {name}</p>
      <button onClick={handleNameChange} className="mybtn m-6">
        Change name
      </button>
      <h1 className="text-4xl my-3.5">{num}</h1>
      <button className="mybtn " onClick={handleIncrease}>
        increase
      </button>
      <button className="mybtn m-6 !bg-green-600" onClick={() => setNum(0)}>
        reset
      </button>
      <button className="mybtn " onClick={handleDecrease}>
        Decrease
      </button>
      <div className="max-w[600px] mx-auto p-3 shadow-lg">
        <h1 className="text-4xl font-bold"> Top Football News</h1>
        <h2 className="text-2xl text-red-500 my-2">
          Madrid demolish at the Emirates stadium
        </h2>
        <p>{show ? details : details.substr(0, 100) +('.....')}</p>
        <button onClick={handleShowDetails} className="mybtn ">{show?  "Show Less"  : "Show More"}</button>
      </div>
    </div>
  );
};

export default SimpleState;
