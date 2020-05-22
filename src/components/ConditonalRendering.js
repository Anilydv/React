// import React, { Component } from "react";

// class Test extends Component {
//   state = { isLoggedIn: false };

//   handleClick = () => {
//     this.setState({
//       isLoggedIn: true,
//     });
//   };
//   handleClick1 = () => {
//     this.setState({
//       isLoggedIn: false,
//     });
//   };

//   UserGreeting = () => {
//     return (
//       <div>
//         <h1>Welcome back! USER</h1>

//         <div>
//           <button onClick={this.handleClick1}>Logout </button>
//         </div>
//       </div>
//     );
//   };

//   GuestGreeting = () => {
//     return (
//       <div>
//         <h1>Please sign up.</h1>
//         <div>
//           <button onClick={this.handleClick}>Register </button>
//         </div>
//       </div>
//     );
//   };

//   render() {
//     return (
//       <div>
//         {this.state.isLoggedIn ? this.UserGreeting() : this.GuestGreeting()}
//       </div>
//     );
//   }
// }

// export default Test;

// Next Example

// import React, { Component } from "react";

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return (
//     <div className="conditional_compo  ">
//       <div className="conditional_compo_cell">Warning!</div>
//     </div>
//   );
// }

// class Test extends Component {
//   state = { showWarning: true };

//   handleToggleClick = () => {
//     this.setState({
//       showWarning: !this.state.showWarning,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? "Hide" : "Show"}
//         </button>
//       </div>
//     );
//   }
// }

// export default Test;

// Next Example

import React, { Component } from "react";

class Test extends Component {
  state = { showWarning: true };

  WarningBanner = (props) => {
    return (
      <div>
        <div className="conditional_compo  ">
          <div className="conditional_compo_cell">Warning!</div>
        </div>
        <div>
          <button
            style={{ backgroundColor: "green" }}
            onClick={this.handleToggleClick}
          >
            Hide
          </button>
        </div>
      </div>
    );
  };

  handleToggleClick = () => {
    this.setState({
      showWarning: !this.state.showWarning,
    });
  };

  render() {
    return (
      <div>
        {this.state.showWarning ? (
          this.WarningBanner()
        ) : (
          <button
            style={{ backgroundColor: "green" }}
            onClick={this.handleToggleClick}
          >
            Show
          </button>
        )}
      </div>
    );
  }
}

export default Test;
