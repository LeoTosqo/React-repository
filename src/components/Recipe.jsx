import { FadeLoader } from "react-spinners";
import { useFetch } from "../Hooks/useFetch";

// display name,image, ingredient to make each meal, instruction to prepare y

const Recipe = () => {

  const{
    data: {recipes},
    isLoading,
  }= useFetch ("https://dummyjson.com/recipes");

  if (isLoading){
    return<FadeLoader/>;
  }

  return (
    <div>
      <div>List of recipes and how to prepare it </div>
      <section>
        {recipes.map((recipe) => {
          const { id, image, name,ingredients, instructions, prepTimeMinutes, mealType } = recipe;
          return (
            <div className="w-full">
            <div key={id}>
              <h1 >name: {name}</h1>
              <img src={image} alt={name} />
              <p>Preparation Time: {prepTimeMinutes} minute</p>
              <ol>
                {ingredients.map((ing, i) => {
                  return <li key={i}>{ing}</li>;
                })}
              </ol>
              <h1>How to prepare it</h1>
              <ol className="list-decimal">
                {instructions.map((ing, i) => {
                  return <li key={i}>{ing}</li>;
                })}
              </ol>
              <div>
                <p>
                    {
                        mealType.map((meal,i)=>{
                            return(
                                <ol key={i}> {meal}</ol>
                            )
                        })
                    }
                </p>
              </div>
            </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Recipe;












// import React from "react";
// import { useState, useEffect } from "react";
// import { FadeLoader } from "react-spinners";

// // display name,image, ingredient to make each meal, instruction to prepare it
// const url = "https://dummyjson.com/recipes";

// const Recipe = () => {
//   const [recipes, setRecipes] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     const getRecipes = async () => {
//       const res = await fetch(url);
//       const data = await res.json();
//       setIsLoading(false);
//       setRecipes(data.recipes);
//     };
//     getRecipes();
//   }, []);
//   if (isLoading) {
//     return (
//       <div>
        
//         <FadeLoader />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div>List of recipes and how to prepare it </div>
//       <section>
//         {recipes.map((recipe) => {
//           const { id, image, name,ingredients, instructions, prepTimeMinutes, mealType } = recipe;
//           return (
//             <div key={id}>
//               <h1>name: {name}</h1>
//               <img src={image} alt={name} />
//               <p>Preparation Time: {prepTimeMinutes} minute</p>
//               <ol>
//                 {ingredients.map((ing, i) => {
//                   return <li key={i}>{ing}</li>;
//                 })}
//               </ol>
//               <h1>How to prepare it</h1>
//               <ol className="list-decimal">
//                 {instructions.map((ing, i) => {
//                   return <li key={i}>{ing}</li>;
//                 })}
//               </ol>
//               <div>
//                 <p>
//                     {
//                         mealType.map((meal,i)=>{
//                             return(
//                                 <ol key={i}> {meal}</ol>
//                             )
//                         })
//                     }
//                 </p>
//               </div>
//             </div>
            
//           );
//         })}
//       </section>
//     </div>
//   );
// };

// export default Recipe;
