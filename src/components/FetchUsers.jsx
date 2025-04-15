import React from "react";

import { FadeLoader } from "react-spinners";
import { useFetch } from "../Hooks/useFetch";

// const url = "https://dummyjson.com/users";

const FetchUsers = () => {
  const {
    data: { users },
    isLoading
  } = useFetch("https://dummyjson.com/recipes");

  // const [users, setUsers] = useState([]);
  // const [isLoading,setIsLoading] = useState(true)
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     console.log(data.users);
  //     setIsLoading(false)
  //     setUsers(data.users);
  //   };
  //   getUsers();
  // }, []);
if (isLoading){
  return (
    <div >
      <FadeLoader/>
    </div>
  )
}

  

  return (
    <div>
      <h1>FetchUser</h1>
      <section className=" grid grid-cols-6 justify-center gap-6 layout   ">
        {users.map((user) => {
          const {
            id,
            firstName,
            lastName,
            image,
            gender,
            address: { address, city, state },
          } = user;
          return (
            <div key={id}>
              <img src={image} alt="image" />
              <p>
                <strong> Name: </strong>
                {firstName} {lastName}
              </p>
              <p>
                <strong>Address:  </strong> {address} {city} {state}
              </p>
              <p>
                {" "}
                <strong>Gender: </strong>
                {gender}
              </p>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchUsers;









// import React from "react";
// import { useState, useEffect } from "react";
// import { FadeLoader } from "react-spinners";

// const url = "https://dummyjson.com/users";

// const FetchUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading,setIsLoading] = useState(true)
//   useEffect(() => {
//     const getUsers = async () => {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data.users);
//       setIsLoading(false)
//       setUsers(data.users);
//     };
//     getUsers();
//   }, []);
// if (isLoading){
//   return (
//     <div >
//       <FadeLoader/>
//     </div>
//   )
// }

  

//   return (
//     <div>
//       <h1>FetchUser</h1>
//       <section className=" grid grid-cols-6 justify-center gap-6 layout   ">
//         {users.map((user) => {
//           const {
//             id,
//             firstName,
//             lastName,
//             image,
//             gender,
//             address: { address, city, state },
//           } = user;
//           return (
//             <div key={id}>
//               <img src={image} alt="image" />
//               <p>
//                 <strong> Name: </strong>
//                 {firstName} {lastName}
//               </p>
//               <p>
//                 <strong>Address:  </strong> {address} {city} {state}
//               </p>
//               <p>
//                 {" "}
//                 <strong>Gender: </strong>
//                 {gender}
//               </p>
//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// };

// export default FetchUsers;

