import React, { useState } from "react";

const initialList = ["Learn React", "Learn Firebase", "Learn GraphQL"];

function ListWithAddItem() {
  const [val, setValue] = useState("");
  const [list, setList] = useState(initialList);

  const handleChange = (event) => {
    setValue(event.target);
    console.log(event.target);
  };

  // const handleSubmit = (event) => {
  //   console.log(value);

  //   if (value) {
  //     setList(list.concat(value));
  //   }

  //   setValue("");

  //   event.preventDefault();
  // };

  return (
    <div>
      {/* <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul> */}

      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <input type="text" value={val} onChange={handleChange} />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default ListWithAddItem;
