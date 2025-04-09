import React from "react";
import { useState } from "react";

const User = () => {
  const [user, setUser] = useState(false);
  const handleLogin = () => {
    setUser(true);
  };

  return (
    <>
      {!user ? (
        <div>
          <h1>you are not logged in</h1>
          <button className="mybtn" onClick={handleLogin}>
            Log in
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome to your dashboard</h1>
          <button className="mybtn" onClick={() => setUser(false)}>
            Logout
          </button>
        </div>
      )}
    </>
  );
};

export default User;
