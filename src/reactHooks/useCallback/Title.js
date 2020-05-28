import React from "react";

function Title({ text }) {
  console.log("Rendered Title", text);
  return <h1>{text}</h1>;
}

export default React.memo(Title);
