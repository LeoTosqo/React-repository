import React from "react";
import { useState } from "react";

const films = [
  {
    id: 1,
    image:
      "https://th.bing.com/th/id/OIP._HL_Xuo52KUTV_LNokHJeQHaLH?rs=1&pid=ImgDetMain",
    title: "Mission Impossible 1",
  },
  {
    id: 2,
    image:
      "https://th.bing.com/th/id/OIP.1ZGjvPcV6qvkyA8LGsa7BQHaLF?rs=1&pid=ImgDetMain",
    title: "Die Hard",
  },
  {
    id: 3,
    image: "https://images.igdb.com/igdb/image/upload/t_cover_big/co9b8f.webp",
    title: "Mortal Kombat",
  },
];

const ExampleArray = () => {
  const [movies, setMovies] = useState([]);

  if (movies.length === 0) {
    return (
      <div className="w-full max-w-[400px] mx-auto my-4 p-2.5 text-center shadow-2xl">
        <h1>NO MOVIE FOUND YET</h1>
        <button onClick={() => setMovies(films)} className="mybtn">
          Get Movies
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="my-4 font-bold text-3xl">Movies Available</h1>
      <section className="flex gap-3">
        {movies.map((movie) => {
          return <div key={movie.id} className="w-full max-w-[300px]"> 
          <img src={movie.image} alt="title" />
          <p>{movie.title}</p>
          </div>;
        })}
      </section>
    </div>
  );
};

export default ExampleArray;


//     <div>
//       <h1>Movies Available</h1>
//       <section>
//         {movies.map((movie) => {
//           return (
// <Leo key={movie.id} {...movie}/>
//           );
//         })}
//       </section>
//     </div>
//   );
// };