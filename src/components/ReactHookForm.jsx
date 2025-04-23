import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

//useForm - register, handleSubmit
//yup, zod

//define our validation scheme
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("invalid Email address").required("Email required"),
  password: yup
  .string()
  .required("Password is required")
  .min(7, "Minimum password length is 7")
});

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({ resolver: yupResolver(validationSchema) });
  const [isSubmitting,setIsSubmitting] = useState(false);

  const handleFormSubmit = (data) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log(data);
      //after doing what we are meant to do we invoke function
      setIsSubmitting(false);
          reset();
    }, 5000);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="myform bg-white"
      >
        <h1>Submit your Details</h1>

        <input
          type="text"
          className="input mt-2 w-full"
          placeholder="first Name"
          {...register("firstName")}
        />
        <p className="text-red-500">
          {errors.firstName && errors.firstName.message}
        </p>

        <input
          type="text"
          className="input mt-2 w-full"
          placeholder="last Name"
          {...register("lastName")}
        />
        <p className="text-red-500">
          {errors.lastName && errors.lastName.message}
        </p>

        <input
          type="email"
          className="input mt-2 w-full"
          placeholder="Email Address"
          {...register("email")}
        />
        <p className="text-red-500">{errors.email && errors.email.message}</p>
        

        <input
          type="text"
          className="input mt-2 w-full"
          placeholder="password"
          {...register("password")}
        />
        <p className="text-red-500">
          {errors.password && errors.password.message}
        </p>
        <button type="submit" className="btn btn-accent w-full mt-2.5">
          {isSubmitting? "Submitting...":"Submit"}
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// //useForm - register, handleSubmit
// //yup, zod

// //define our validation scheme
// const validationSchema = yup.object().shape({
//   firstName: yup.string().required("First Name is required"),
//   lastName: yup.string().required("Last Name is required"),
// });

// const ReactHookForm = () => {

//   const { register, handleSubmit, formState: {errors}} = useForm();

//   const handleFormSubmit =(data)=>{
//     console.log(data);

//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(handleFormSubmit)}
//         className="myform bg-white"
//       >
//         <h1>Submit your Details</h1>
//         <p className="text-red-500">
//           {errors.firstName && errors.firstName.message}
//         </p>
//         <input
//           type="text"
//           className="input mt-2 w-full"
//           placeholder="first Name"
//           {...register("firstName", { required: "First Name is required" })}
//         />
//         <p className="text-red-500">
//           {errors.lastName && errors.lastName.message}
//         </p>
//         <input
//           type="text"
//           className="input mt-2 w-full"
//           placeholder="last Name"
//           {...register("lastName", { required: "Last Name is required" })}
//         />
//         <p className="text-red-500">
//           {errors.firstName && errors.email.message}
//         </p>
//         <input
//           type="email"
//           className="input mt-2 w-full"
//           placeholder="Email Address"
//           {...register("email", { required: "Email is required" })}
//         />
//         <button type="submit" className="btn btn-accent w-full mt-2.5">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReactHookForm;




// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// //useForm - register, handleSubmit
// //yup, zod

// //define our validation scheme
// const validationSchema = yup.object().shape({
//   firstName: yup.string().required("First Name is required"),
//   lastName: yup.string().required("Last Name is required"),
//   email: yup.string().email("invalid Email address").required("Email required"),
//   password: yup
//   .string()
//   .required("Password is required")
//   .min(7, "Minimum password length is 7")
// });

// const ReactHookForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(validationSchema) });

//   const handleFormSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(handleFormSubmit)}
//         className="myform bg-white"
//       >
//         <h1>Submit your Details</h1>

//         <input
//           type="text"
//           className="input mt-2 w-full"
//           placeholder="first Name"
//           {...register("firstName")}
//         />
//         <p className="text-red-500">
//           {errors.firstName && errors.firstName.message}
//         </p>

//         <input
//           type="text"
//           className="input mt-2 w-full"
//           placeholder="last Name"
//           {...register("lastName")}
//         />
//         <p className="text-red-500">
//           {errors.lastName && errors.lastName.message}
//         </p>

//         <input
//           type="email"
//           className="input mt-2 w-full"
//           placeholder="Email Address"
//           {...register("email")}
//         />
//         <p className="text-red-500">{errors.email && errors.email.message}</p>

//         <input
//           type="text"
//           className='input mt-2 w-full'
//           placeholder="password"
//           {...register('password')}
//         />
//         <p className="text-red-500">
//           {errors.password && errors.password.message}
//         </p>
//         <button type="submit" className="btn btn-accent w-full mt-2.5">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReactHookForm;




// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// //useForm - register, handleSubmit
// //yup, zod

// //define our validation scheme
// const validationSchema = yup.object().shape({
//   firstName: yup.string().required("First Name is required"),
//   lastName: yup.string().required("Last Name is required"),
//   email: yup.string().email("invalid Email address").required("Email required"),
//   password: yup
//   .string()
//   .required("Password is required")
//   .min(7, "Minimum password length is 7")
// });

// const ReactHookForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset
//   } = useForm({ resolver: yupResolver(validationSchema) });

//   const handleFormSubmit = (data) => {
//     console.log(data);
//     //after doing what we are meant to do we invoke function
//     reset();
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit(handleFormSubmit)}
//         className="myform bg-white"
//       >
//         <h1>Submit your Details</h1>

//         <input
//           type="text"
//           className="input mt-2 w-full"
//           placeholder="first Name"
//           {...register("firstName")}
//         />
//         <p className="text-red-500">
//           {errors.firstName && errors.firstName.message}
//         </p>

//         <input
//           type="text"
//           className="input mt-2 w-full"
//           placeholder="last Name"
//           {...register("lastName")}
//         />
//         <p className="text-red-500">
//           {errors.lastName && errors.lastName.message}
//         </p>

//         <input
//           type="email"
//           className="input mt-2 w-full"
//           placeholder="Email Address"
//           {...register("email")}
//         />
//         <p className="text-red-500">{errors.email && errors.email.message}</p>
        

//         <input
//           type="text"
//           className="input mt-2 w-full"
//           placeholder="password"
//           {...register("password")}
//         />
//         <p className="text-red-500">
//           {errors.password && errors.password.message}
//         </p>
//         <button type="submit" className="btn btn-accent w-full mt-2.5">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ReactHookForm;