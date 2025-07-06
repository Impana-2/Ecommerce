// import React from "react";
// import { NavLink } from "react-router-dom";
// import { assets } from "../assets/assets";
// import "../styles/sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar-container">
//       <div className="sidebar-links">
//         <NavLink to="/add" className="sidebar-link">
//           <img src={assets.add_icon} className="sidebar-icon" alt="Add Icon" />
//           <p className="sidebar-text">Add Items</p>
//         </NavLink>

//         <NavLink to="/list" className="sidebar-link">
//           <img src={assets.order_icon} className="sidebar-icon" alt="List Icon" />
//           <p className="sidebar-text">List Items</p>
//         </NavLink>

//         <NavLink to="/orders" className="sidebar-link">
//           <img src={assets.parcel_icon} className="sidebar-icon" alt="Orders Icon" />
//           <p className="sidebar-text">Orders Items</p>
//         </NavLink>

//          <NavLink to="/subscribers" className="sidebar-link">
//           <img src={assets.gmail} className="sidebar-icon" alt="mail Icon" />
//           <p className="sidebar-text">Subscribers</p>
//         </NavLink>

//       </div>
//     </div>
//   );
// };

// export default Sidebar;



import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/add", icon: assets.add_icon, label: "Add Items" },
    { to: "/list", icon: assets.order_icon, label: "List Items" },
    { to: "/orders", icon: assets.parcel_icon, label: "Orders Items" },
    { to: "/subscribers", icon: assets.gmail, label: "Subscribers" },
  ];

  const closeSidebar = () => setOpen(false);

  return (
    <>
      {/* Hamburger Icon */}
      <div className="hamburger-menu" onClick={() => setOpen(true)}>
        ☰
      </div>

      {/* Overlay when sidebar is open */}
      {open && <div className="sidebar-overlay" onClick={closeSidebar}></div>}

      <div className={`sidebar-container ${open ? "open" : ""}`}>
        <div className="sidebar-links">
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.to}
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              onClick={closeSidebar}
            >
              <img src={link.icon} alt="icon" className="sidebar-icon" />
              <p className="sidebar-text">{link.label}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
