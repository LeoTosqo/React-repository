import React from "react";
import { Link } from "react-router-dom";

const NoteFound = () => {
  return (
    <div className="text-center py-7">
      <h1 className="text-4xl">Error 404</h1>
      <p>page NOT found</p>
      <Link to="/"  >Back To Home</Link>
    </div>
  );
};

export default NoteFound;
