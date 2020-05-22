// import React, { Component } from "react";

// function ListItems(props) {
//   let val = props.value;
//   return <li>{val}</li>;
// }

// function NumberList(props) {
//   let numbers = props.numbers;
//   let list = numbers.map((val) => {
//     return <ListItems value={val} key={val.toString()} />;
//   });
//   return <ul>{list}</ul>;
// }

// class Test extends Component {
//   mapNumber = () => {
//     const numbers = [1, 2, 3, 4, 5];
//     const mapVal = numbers.map((val) => {
//       return val * 2;
//     });
//     return mapVal;
//   };

//   render() {
//     const numbers = [1, 2, 3, 4, 5];

//     return (
//       <div>
//         <NumberList numbers={numbers} />
//       </div>
//     );
//   }
// }

// export default Test;

// Next Example

import React, { Component } from "react";

function Blog(props) {
  console.log("value", props.posts[0].title);
  const sidebar = (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );

  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));

  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

class Test extends Component {
  render() {
    const posts = [
      { id: 1, title: "Hello World", content: "Welcome to learning React!" },
      {
        id: 2,
        title: "Installation",
        content: "You can install React from npm.",
      },
    ];

    return (
      <div>
        <Blog posts={posts} />
      </div>
    );
  }
}

export default Test;
