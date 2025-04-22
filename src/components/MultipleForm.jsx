import React from "react";
import { useState } from "react";

const MultipleForm = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    age: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { fullName, email, age } = user;
    if (!fullName.trim() || !email.trim || !age) {
      // display message
      setError("please provide all value");
      return;
    }
    // do what you want to do
    console.log(user);
    // default back to the beginning
    setError("");
    setUser({
      fullName: "",
      email: "",
      age: "",
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="myform">
        <h1>submit your details</h1>
        <p className="text-red-500">{Error}</p>
        <input
          type="text"
          className="myinput"
          placeholder="Full Name"
          name="fullName"
          value={user.fullName}
          onChange={handleChange}
        />
        <input
          type="email"
          className="myinput"
          placeholder="Email Address"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="number"
          className="myinput"
          placeholder="Age"
          name="age"
          value={user.age}
          onChange={handleChange}
        />
        <button className="mybtn">Submit</button>
      </form>
    </div>
  );
};

export default MultipleForm;

// import React from 'react'
// import { useState } from 'react'

// const MultipleForm = () => {
// const[user, setUser]=useState({

//     fullName:"",
//     email:"",
//     age:""
// })
// const handleChange=(event)=>{
// const name=event.target.name
// const value=event.target.value
// setUser({...user, [name]:value})

// }

//     const handleSubmit=(event)=>{
// event.preventDefault()
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="myform">
//         <h1>submit your details</h1>
//         <input
//           type="text"
//           className="myinput"
//           placeholder="Full Name"
//           name="fullName"
//           value={user.fullName}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           className="myinput"
//           placeholder="Email Address"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           className="myinput"
//           placeholder="Age"
//           name="age"
//           value={user.age}
//           onChange={handleChange}
//         />
//         <button className="btn">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default MultipleForm

// import React from "react";
// import { useState } from "react";

// const MultipleForm = () => {
//   const [user, setUser] = useState({
//     fullName: "",
//     email: "",
//     age: "",
//   });
//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="myform">
//         <h1>submit your details</h1>
//         <input
//           type="text"
//           className="myinput"
//           placeholder="Full Name"
//           name="fullName"
//           value={user.fullName}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           className="myinput"
//           placeholder="Email Address"
//           name="email"
//           value={user.email}
//           onChange={handleChange}
//         />
//         <input
//           type="number"
//           className="myinput"
//           placeholder="Age"
//           name="age"
//           value={user.age}
//           onChange={handleChange}
//         />
//         <button className="btn">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default MultipleForm;
