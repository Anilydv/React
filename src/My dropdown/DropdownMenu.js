import React from "react";
import "./Dropdown.css";
import Dropdown from "./Dropdown";

const items = [
  {
    id: 1,
    value: "Pulp Fiction",
  },
  {
    id: 2,
    value: "The Prestige",
  },
  {
    id: 3,
    value: "Blade Runner 2049",
  },
];

function DropdownMenu() {
  return (
    <div className="container">
      <Dropdown title="Select movie" items={items} />
      <Dropdown title="Select movie" items={items} />
      <Dropdown title="Select movie" items={items} />
      <Dropdown title="Select movie" items={items} />
    </div>
  );
}

export default DropdownMenu;
