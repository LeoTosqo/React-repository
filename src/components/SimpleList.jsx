import React from "react";

const SimpleList = () => {
  const customers = ["ade", "john", "peter", "jane"];
  const users = ["john", "ade", "joe", "smart", "henry"];
  const list = ["phone", "tv", "laptop", "watch"];
  return (
    <div>
      <h1>Outputting List in React</h1>
      <div>
        {
        customers.map((customer, index) => {
          return <p key={index}>{customer}</p>;
        })
        }
      </div>
      <div>
        <h1>list of users</h1>
        {users.map((user, index) => {
          return (
            <h1 key={index} className="text-green-600">
              {" "}
              {user}{" "}
            </h1>
          );
        })}
      </div>

      
    </div>
  );
};

export default SimpleList;
