import React from "react";
import { useEffect, useState } from "react";
import { GridLoader } from "react-spinners";

//product ---> product(api)
//loading(true) ==> loading(false)
const url = "https://dummyjson.com/products";

const FetchData = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.products);
      setIsLoading(false);
      setProducts(data.products);
    };
    getProducts();
  }, []);
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <GridLoader />
      </div>
    );
  }

  return (
    <div>
      <h1>List of products</h1>
      <section className="flex items-center gap-2.5 flex-wrap">
        {products.map((product) => {
          const {
            id,
            title,
            price,
            image,
            stock,
            warrantyInformation,
            rating,
          } = product;
          return (
            <div key={id} className="w-full max-w-[320px] h-[370px] shadow-md">
              <img
                src={image}
                alt={title} 
                className="w-full object-cover h-[80%]"
              />
              <p className="text-xl font-semibold">{title}</p>
              <div className="text-2xl font-medium">
                <p>${price}</p>
                <p className={stock >= 30 ? "text-green-400" : "text-red-400"}>
                  {stock} left in stock
                </p>
              </div>
              <div className="flex h-[30px]">
                <p>{warrantyInformation} </p>
                <p
                  className={rating >= 3.5 ? "text-red-600" : "text-green-400"}
                >
                  {rating}
                </p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default FetchData;

// import React from 'react'
// import { useEffect } from "react";

// const url = "https://dummyjson.com/products";

// const FetchData = () => {
// useEffect(()=> {
// const getProducts = async () => {
//     const res = await fetch (url);
//     const data = await res.json();
//     console.log(data.products);

// };
// getProducts();
// }, []);
//   return (
//     <div>FetchData</div>
//   )
// }

// export default FetchData

// import React from "react";
// import { useEffect, useState } from "react";

// //product ---> product(api)
// const url = "https://dummyjson.com/products";

// const FetchData = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const getProducts = async () => {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data.products);
//       setProducts(data.products);
//     };
//     getProducts();
//   }, []);
//   return (
//     <div>
//       <h1>List of products</h1>
//       <section className="flex items-center gap-2.5 flex-wrap">
//         {products.map((product) => {
//           const { id, title, price, image } = product;
//           return (
//             <div key={id} className="w-full max-w-[320px] h-[300px] shadow-md">
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-full object-cover h-[80%]"
//               />
//               <p className="text-xl font-semibold">{title}</p>
//               <p className="text-2xl font-bold">{price}</p>

//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// };

// export default FetchData;

// import React from "react";
// import { useEffect, useState } from "react";

// //product ---> product(api)
// const url = "https://dummyjson.com/products";

// const FetchData = () => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const getProducts = async () => {
//       const res = await fetch(url);
//       const data = await res.json();
//       console.log(data.products);
//       setProducts(data.products);
//     };
//     getProducts();
//   }, []);

//   return (
//     <div>
//       <h1>List of products</h1>
//       <section className="flex items-center gap-2.5 flex-wrap">
//         {products.map((product) => {
//           const { id, title, price, image,stock } = product;
//           return (
//             <div key={id} className="w-full max-w-[320px] h-[300px] shadow-md">
//               <img
//                 src={image}
//                 alt={title}
//                 className="w-full object-cover h-[80%]"
//               />
//               <p className="text-xl font-semibold">{title}</p>
//               <p className="text-2xl font-bold">${price}</p>
//               <p >{stock} left in stock </p>

//             </div>
//           );
//         })}
//       </section>
//     </div>
//   );
// };

// export default FetchData;

