import React from "react";
import { useFetch } from "../Hooks/useFetch";
import { BounceLoader } from "react-spinners";





const url = "https://example-data.draftbit.com/authors?_limit=10";
const GetAuto = () => {
  const [authors, setAuthors] = useState([]);

if (isLoading) {
  return <BounceLoader/>
}

  return (
    <div>
      <h1>List of Authors</h1>
      <div className="flex flex-wrap items-center justify-between ">
        {authors.map((author) => {
          const { imgUrl, person, professions, description, articleUrl, id } =
            author;
          return (
            <div key={id} className="w-[320px]">
              <img src={imgUrl} alt={person} className="w-full h-60" />
              <p>{person}</p>
              <p>{professions}</p>
              <p>{description}</p>
              <p>{articleUrl}</p>
              <a href={author.articleUrl} target="_blank"></a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetAuto;















// import React from "react";
// import { useState, useEffect } from "react";

// const url = "https://example-data.draftbit.com/authors?_limit=10";
// const GetAuto = () => {
//   const [authors, setAuthors] = useState([]);

//   useEffect(() => {
//     const fetchAuthors = async () => {
//       const res = await fetch(url);
//       const data = await res.json();
//       setAuthors(data);
//     };
//     fetchAuthors();
//   }, []);

//   return (
//     <div>
//       <h1>List of Authors</h1>
//       <div className="flex flex-wrap items-center justify-between ">
//         {authors.map((author) => {
//           const { imgUrl, person, professions, description, articleUrl, id } =
//             author;
//           return (
//             <div key={id} className="w-[320px]">
//               <img src={imgUrl} alt={person} className="w-full h-60" />
//               <p>{person}</p>
//               <p>{professions}</p>
//               <p>{description}</p>
//               <p>{articleUrl}</p>
//               <a href={author.articleUrl} target="_blank"></a>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default GetAuto;

