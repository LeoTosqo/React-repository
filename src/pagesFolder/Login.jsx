import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";


//johndoe@gmail.com password---password

const loginFormValidation = yup.object().shape({
  email: yup
    .string()
    .email("invalid email address")
    .required("Email is Required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormValidation),
  });
  const redirect = useNavigate()
  const [error,setError] = useState(false)
  const onLogin = (data) => {
  console.log(data);
  const { email, password } = data;
  if (email === "johndoe@gmail.com" && password === "password") {
    //redirect
    redirect("/timeline")
    //
  } else {
    //show error
    setError(true)
  };
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onLogin)} className="myform shadow-2xl">
        <h1 className="text-2xl">Login to continue</h1>
        <input
          type="email"
          className="input mt-2 w-full"
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-sm text-red-500 mt-0.5">{errors.email?.message}</p>
        <input
          type="password"
          className="input mt-2 w-full"
          placeholder="Password"
          {...register("password")}
        />
        <p className="text-red-500">
          {errors.password && errors.password?.message}
        </p>
        {error && (
          <div className="rounded-md w-full bg-red-300 p-3 my-2">
            <p className="text-red-500">Invalid Email or password</p>
          </div>
        )}
        <button className="btn btn-primary w-full mt-2">Login</button>
      </form>
    </div>
  );
};

export default Login;

// import React from 'react'
// import {useForm} from "react-hook-form";

// //
// const Login = () => {
// const {
//     register,
//     handleSubmit,
//     formState: {errors},
// }= useForm();
// const onLogin = (data) => {};

//   return (
//     <div>
//       <form onSubmit= {handleSubmit(onLogin)}className="myform shadow-2xl">
//         <h1 className='text-2xl'>Login to continue</h1>
//         <input
//           type="email"
//           className="input mt-2 w-full"
//           placeholder="Email Address"
//         />
//         <input type="password" className="input mt-2 w-full" placeholder = "Password" />
//         <button className='btn btn-primary w-full mt-2'>Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login

// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// //

// const loginFormValidation = yup.object().shape({
//   email: yup
//     .string()
//     .email("invalid email address")
//     .required("Email is Required"),
//   password: yup.string().required("Password is required"),
// });

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(loginFormValidation),
//   });
//   const onLogin = (data) => {};
//   console.log(data);
//   const{email,password} = data

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onLogin)} className="myform shadow-2xl">
//         <h1 className="text-2xl">Login to continue</h1>
//         <input
//           type="email"
//           className="input mt-2 w-full"
//           placeholder="Email Address"
//           {...register("email")}
//         />
//         <p className="text-sm text-red-500 mt-0.5">{errors.email?.message}</p>
//         <input
//           type="password"
//           className="input mt-2 w-full"
//           placeholder="Password"
//         />
//         <p className="text-red-500">{errors.password && errors.password.message}</p>
//         <button className="btn btn-primary w-full mt-2">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;








// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";


// //john

// const loginFormValidation = yup.object().shape({
//   email: yup
//     .string()
//     .email("invalid email address")
//     .required("Email is Required"),
//   password: yup.string().required("Password is required"),
// });

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(loginFormValidation),
//   });
  
//   const [error,setErrror] = useState(false)
//   const onLogin = (data) => {
//   console.log(data);
//   const { email, password } = data;
//   if (email === "johndoe@gmail.com" && password === "password") {
//     //redirect
//   } else {
//     //show error
//     setErrror(true)
//   };
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit(onLogin)} className="myform shadow-2xl">
//         <h1 className="text-2xl">Login to continue</h1>
//         <input
//           type="email"
//           className="input mt-2 w-full"
//           placeholder="Email Address"
//           {...register("email")}
//         />
//         <p className="text-sm text-red-500 mt-0.5">{errors.email?.message}</p>
//         <input
//           type="password"
//           className="input mt-2 w-full"
//           placeholder="Password"
//         />
//         <p className="text-red-500">
//           {errors.password && errors.password.message}
//         </p>{ error &&
//         <div className="rounded-md w-full bg-red-300 p-3 my-2">
//           <p className="text-red-500">Invalid Email or password</p>
//         </div>}
//         <button className="btn btn-primary w-full mt-2">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
