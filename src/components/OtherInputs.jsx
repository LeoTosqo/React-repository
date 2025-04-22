import React from "react";
import { useState } from "react";

const OthersInput = () => {
  const [review, setReview] = useState("");
  const [agree, setAgree] = useState(false);
  const [picture, setPicture] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
  };
  const [preview, setPreview] = useState(null);
  const handleFileChange = (e) => {
    setPicture(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div>
      <form onSubmit={handleForm} className="myform">
        <label htmlFor="pic">Upload Photo</label>
        <input
          type="file"
          id="pic"
          className="myinput"
          onChange={handleFileChange}
        //   accept="image/png"
        />

        {preview && (
          <img
            src={preview}
            alt="your photo"
            className="h-16 w-16 object-cover rounded-md"
          />
        )}
        <textarea
          name=""
          placeholder="write your message"
          className="myinput"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        <input
          type="checkbox"
          id="agree"
          value={agree}
          onChange={(e) => setAgree(e.target.checked)}
        />
        <label htmlFor="agree" className="ml-2">
          Agree to terms and condition
        </label>
        <button type="submit" className="mybtn block">
          submit
        </button>
      </form>
    </div>
  );
};

export default OthersInput;

// import React from "react";
// import { useState } from "react";

// const OthersInput = () => {
//   const [review, setReview] = useState("");
//   const [agree, setAgree] = useState(false);
//   const [picture, setPicture] = useState(null);

//   const handleForm = (e) => {
//     e.preventDefault();
//   };
//   const [preview, setPreview] = useState(null);
//   const handleFileChange = (e) => {
//     setPicture(e.target.files[0]);
//     setPreview(URL.createObjectURL(e.target.files[0]));
//   };
//   return (
//     <div>
//       <form onSubmit={handleForm} className="myform">
//         <label htmlFor="pic">Upload Photo</label>
//         <input
//           type="file"
//           id="pic"
//           className="myinput"
//           value={picture}
//           onChange={handleFileChange}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="your photo"
//             className="h-16 w-16 object-cover rounded-md"
//           />
//         )}
//         <textarea
//           name=""
//           placeholder="write your message"
//           className="myinput"
//           value={review}
//           onChange={(e) => setReview(e.target.value)}
//         ></textarea>
//         <input
//           type="checkbox"
//           id="agree"
//           className="myinput"
//           value={agree}
//           onChange={(e) => setAgree(e.target.checked)}
//         />
//         <label htmlFor="agree" className="ml-2">
//           Agree to terms and condition
//         </label>
//         <button type="submit" className="mybtn block">
//           submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default OthersInput;
