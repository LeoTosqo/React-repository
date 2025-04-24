import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <section className="flex h-screen">
        {/* sidebar */}
        <div className="w-[20%] bg-gray-400">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <nav className="flex flex-col gap-3 font-bold text-2xl">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "border border-blue-500" : ""
              } end

            >
              Home
            </NavLink>
            <NavLink
              to="trash"
              className={({ isActive }) =>
                isActive ? "border border-blue-500" : ""
              }
            >
              Trash
            </NavLink>
            <NavLink
              to="spam"
              className={({ isActive }) =>
                isActive ? "border border-blue-500" : ""
              }
            >
              spam
            </NavLink>
          </nav>
        </div>
        {/* outlet */}
        <div className="w-[80%] p-4">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;

// import React from 'react'
// import { Outlet } from 'react-router-dom'

// const DashboardLayout = () => {
//   return (
//     <div>
//       <section className="flex h-screen">
//         {/* sidebar */}
//         <div className="w-[20%] bg-gray-400">
//           <h1 className="text-2xl font-bold">Dashboard</h1>
//           <nav className="flex flex-col gap-3 font-bold text-2xl">
//             <Link>Home</Link>
//             <Link>Trash</Link>
//             <Link>spam</Link>
//           </nav>
//         </div>
//         {/* outlet */}
//         <div className="w-[80%] p-4">
//           <Outlet />
//         </div>
//       </section>
//     </div>
//   );
// }

// export default DashboardLayout
