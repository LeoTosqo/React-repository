import React from "react";

const EventHandling = () => {
  const handleclick = () => {
    alert("welcome");
  };

  const handleClickAgain = (name)=>{
    alert("hello user")
  }
  return (
    <div className="text-center py-10">
      <h1 className="text-3xl mb-4">Responding to user intersction</h1>
      <button onClick={handleclick} className="mybtn">
        click Me
      </button>
      <button onClick={() => handleClickAgain("john")} className="mybtn ml-3"> click again</button>
    </div>
  );
};

export default EventHandling;
