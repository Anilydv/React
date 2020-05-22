import React, { Component } from "react";

class Test extends Component {
  state = { isToggleOn1: true, isToggleOn2: true };

  handleClick(e) {
    e.preventDefault();
    console.log("The link was clicked.");
  }
  // while binding this you can use arrow function
  handleClickToogle1 = () => {
    this.setState({
      isToggleOn1: !this.state.isToggleOn1,
    });
  };
  //   or call with arrow function
  handleClickToogle2() {
    this.setState({
      isToggleOn2: !this.state.isToggleOn2,
    });
  }
  deleteRow1(id) {
    console.log(id);
  }
  deleteRow2 = (id) => {
    console.log(id);
  };

  render() {
    let id = "anil";
    let id1 = "kancha";
    return (
      <div>
        <h1>hello Anil</h1>
        <a href="#" onClick={this.handleClick}>
          Click me
        </a>
        {/* arrow function declared */}
        <div>
          <button onClick={this.handleClickToogle1}>
            {this.state.isToggleOn1 ? "ON" : "OFF"}
          </button>
        </div>
        {/* call with arrow */}
        <div>
          <button onClick={() => this.handleClickToogle2()}>
            {this.state.isToggleOn2 ? "ON" : "OFF"}
          </button>
        </div>
        {/* passing arguments to event handlers */}
        <button onClick={() => this.deleteRow1(id)}>Delete Row1</button>
        <button onClick={this.deleteRow2.bind(this, id1)}>Delete Row2</button>
      </div>
    );
  }
}

export default Test;
