// import React, { Component } from "react";

// class Test extends Component {
//   state = {
//     isGoing: true,
//     numberOfGuests: 2,
//   };

//   handleInputChange = (event) => {
//     const target = event.target;
//     const value = target.name === "isGoing" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     alert(
//       "Your favorite flavor is: " +
//         this.state.numberOfGuests +
//         this.state.isGoing
//     );
//   };

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Is going:
//             <input
//               name="isGoing"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <br />
//           <label>
//             Number of guests:
//             <input
//               name="numberOfGuests"
//               type="number"
//               value={this.state.numberOfGuests}
//               onChange={this.handleInputChange}
//             />
//           </label>
//           <button>Register</button>
//         </form>
//       </div>
//     );
//   }
// }
// export default Test;

import React, { Component } from "react";

class Test extends Component {
  state = {
    name: "",
    email: "",
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    alert("Your favorite flavor is: " + this.state.name + this.state.email);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </label>
          <button>Register</button>
        </form>
      </div>
    );
  }
}
export default Test;
