import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">TESTYANTRA</div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/allusers">Users</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
