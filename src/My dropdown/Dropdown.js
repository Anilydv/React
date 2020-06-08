import React, { useState } from "react";

function Dropdown({ title, items }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <div className="dd-wrapper">
      <div
        // tabIndex is used for focus Active
        tabIndex={0}
        className="dd-header"
        role="button"
        onClick={() => toggle(!open)}
      >
        <div>
          <p className="title--bold">{title}</p>
        </div>
        <div>
          <p>{open ? "Close" : "Open"}</p>
        </div>
      </div>
      {open && (
        <ul className="dd-list">
          {items.map((item) => (
            <li key={item.id}>
              <div>{item.value}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
