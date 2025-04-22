import React from "react";
import { useState } from "react";
//controlled input- set up state values from all input fild
//value, onclick
const SimpleForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //function
    console.log(firstName, lastName);
    if (!firstName.trim() || !lastName.trim()) {
      //display error message
      setError("please fill all the fields");
      return;
    }
    //add new user to users array
    setError([...users, { firstName, lastName }]);
    setFirstName("");
    setLastName("");
    setError("");
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium">Submit Name</h1>
        <p className="text-red-500">{error}</p>
        <input
          type="text"
          placeholder="First Name"
          className="myinput outline-0 my-2"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          className="myinput outline-0 my-2"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit" className="mybtn">
          Submit
        </button>
      </form>
      {users.length > 0 && (
        <div className="myform text-red-500">
          <h1>List of Users</h1>
          {users.map((user, index) => {
            return (
              <p key={index}>
                {user.firstName}
                {user.lastName}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SimpleForm;

// import React from 'react'

// const SimpleForm = () => {
//   return (
//     <div>
//         <form className='myform'>
//             <h1 className='text-2xl font-medium'>Submit</h1>
//             <input type="text" placeholder='First Name' className='myinput' />
//             <input type="text" placeholder='Last Name' className='myinput'/>
//             <button type='submit' className='mybtn'>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default SimpleForm

// import React from "react";
// import { useState } from "react";
// //controlled input- set up state values from all input fild
// //value, onclick
// const SimpleForm = () => {
//     const [firstName,setFirstName] = useState("");
//     const [LastName, setLastName] = useState("");
//     const [error,setError] = useState ("");

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     // function
//     console.log(firstName,lastName);
//     if(!firstName.trim || !lastName.trim()){
//         //display error message
//         setError("please fill all the fields")
//     }

//   };
//   return (
//     <div>
//       <form onSubmit={handleFormSubmit} className="myform">
//         <h1 className="text-2xl font-medium">Submit Name</h1>
//         <p className="text-red-500">{error}</p>
//         <input
//           type="text"
//           placeholder="First Name"
//           className="myinput"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Last Name"
//           className="myinput"
//           value={LastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <button type="submit" className="mybtn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SimpleForm;














// import React from "react";
// import { useState } from "react";
// //controlled input- set up state values from all input fild
// //value, onclick
// const SimpleForm = () => {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [error, setError] = useState("");
//   const [users, setUsers] = useState([]);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     //function
//     console.log(firstName, lastName);
//     if (!firstName.trim || !lastName.trim()) {
//       //display error message
//       setError("please fill all the fields");
//       return;
//     }
//     //add new user to users array
//     setError([...users, { firstName, lastName }]);
//     setFirstName("");
//     setLastName("");
//     setError("");
//   };
//   return (
//     <div>
//       <form onSubmit={handleFormSubmit} className="myform">
//         <h1 className="text-2xl font-medium">Submit Name</h1>
//         <p className="text-red-500">{error}</p>
//         <input
//           type="text"
//           placeholder="First Name"
//           className="myinput"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />

//         <input
//           type="text"
//           placeholder="Last Name"
//           className="myinput"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <button type="submit" className="mybtn">
//           Submit
//         </button>
//       </form>
//       <div className="myform">
//         <h1>List of Users</h1>
//       </div>
//     </div>
//   );
// };

// export default SimpleForm;
