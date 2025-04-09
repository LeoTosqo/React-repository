import React from "react";
const SingleProduct = ({ image, price, title }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p className="text-xl font-medium">{title}</p>
      <p className="text-2xl font-bold">{price}</p>
    </div>
  );
};

const JumiaClone = () => {
  return (
    <div>
      <h1>All Product</h1>
      <div className="flex gap-3">
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/63/142576/1.jpg?3604"
          }
          price={7000}
          title={"android hd tv"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/72/332204/1.jpg?3519"
          }
          price={3000}
          title={"blood pressure monitor"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/00/2196283/1.jpg?7935"
          }
          price={4000}
          title={"kettle"}
        />
      </div>
    </div>
  );
};

export default JumiaClone;
