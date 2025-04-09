import React from "react";

const ComplexList = () => {
  const staff = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
      name: "John Doe",
      role: "Chief Operating Officer",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlJTIwZmFjZXN8ZW58MHx8MHx8fDA%3D",
      name: "John joe",
      role: "Head of Finance",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZSUyMGZhY2VzfGVufDB8fDB8fHww",
      name: "Peter Pan",
      role: "Head of marketing",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1509868918748-a554ad25f858?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZSUyMGZhY2VzfGVufDB8fDB8fHww",
      name: "Jane Doe",
      role: "Creative Officer",
    },
    {
      id: 5,
      image:
        "https://media.istockphoto.com/id/1191193169/photo/portrait-of-a-confident-young-woman-at-the-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=xuL5z1fnQt8NT18S4-8Y-lD6sIHp1BUJZ8kJ8rbVlGw=",
      name: "Liu KIng",
      role: "Admin Officer",
    }
  ];

  return (
    <div className="bg-blue-200 py-10">
      <h1 className="text-center text-blue-900 text-4xl font-bold">
        Meet The Team
      </h1>
      <p className="my-5 text-center  text-md text-black w-[600px] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
        ducimus labore dolorum aliquid voluptas reiciendis deserunt eum, vero
        velit modi.
      </p>
      <div className="flex gap-3.5 max-w-[1000px] flex-wrap mx-auto">
        {staff.map((member) => {
            const {id,image,name,role} = member
          return (
            <div key={id} className="w-[320px] bg-white p-2.5 round-md relative">
              <img
                src={image}
                alt={name}
                className="rounded-md h-[300px] w-full object-cover"
              />
              <h1 className="text-blue-900 font-bold text-2xl mt-3">
                {name}
              </h1>
              <p className="text-grey-400 mt-2 font-semibold">{role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComplexList;
