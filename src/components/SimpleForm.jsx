import React from "react";
import { useState } from "react";
//controlled input- set up state values from all input fild
//value, onclick
const SimpleForm = () => {
    const [firstName,setFirstname] = useState("");
    const [LastName, setLastname] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit} className="myform">
        <h1 className="text-2xl font-medium">Submit Name</h1>
        <input
          type="text"
          placeholder="First Name"
          className="myinput"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Last Name"
          className="myinput"
          value={LastName}
          onChange={(e) => setLastname(e.target.value)}
        />
        <button type="submit" className="mybtn">
          Submit
        </button>
      </form>
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
