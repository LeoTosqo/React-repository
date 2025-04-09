import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-black text-white h-screen max-h-[600px]">
      <div className="container h-full flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="max-w-[600px]">
          <h1 className="text-2xl md:text-4xl"></h1>
          <p className="my-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi cum
            quo repellat sit placeat fugiat aspernatur id debitis facere error
            optio, maxime mollitia et ducimus enim assumenda temporibus
            repellendus non!
          </p>
          <button className="bg-white text-black rounded-sm h-[40px] cursor-pointer">button</button>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1683134240084-ba074973f75e?q=80&w=1990&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="exotic car!"
          className="hidden md:block rounded-md w-[350px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
