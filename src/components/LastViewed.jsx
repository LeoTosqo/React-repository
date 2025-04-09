import React from "react";

const LastViewed = () => {
  const itemsView = [
    {
      id: 1,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/94/5136773/1.jpg?2578",
      title: "Realme phone",
      price: 7900,
    },
    {
      id: 2,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/72/332204/1.jpg?3519",
      title: "lux shocks",
      price: 10200,
    },
    {
      id: 3,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/93/8053412/1.jpg?9661",
      title: "bh towel",
      price: 7500,
    },
    {
      id: 4,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/828597/1.jpg?7145",
      title: "agro chem",
      price: 4500,
    },
    {
      id: 5,
      image:
        "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/49/9042213/1.jpg?8588",
      title: "soil tester",
      price: 50000,
    },
  ];
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="bg-purple-500 text-3xl font-bold p-3 rounded -t-2xl text-white">
        <h1>Last Viewed</h1>
      </div>
      <div>
        {itemsView.map((item) => {
          const { id, image, title, price } = item;
          return (
            <div key={id}>
              <img src={image} alt={title} />
            </div>
            
          );
        })}
      </div>
    </div>
  );
};

export default LastViewed;
