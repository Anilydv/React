import React from "react";
// import FilterableProductTable from "./thinkInReact/FilterableProductTable";
// import Test from "./components/Test";
import TodoApp from "./todoListApp/TodoApp";
import "./App.css";

function App() {
  // const PRODUCTS = [
  //   {
  //     category: "Sporting Goods",
  //     price: "$49.99",
  //     stocked: true,
  //     name: "Football",
  //   },
  //   {
  //     category: "Electronics",
  //     price: "$199.99",
  //     stocked: true,
  //     name: "Nexus 7",
  //   },
  //   {
  //     category: "Sporting Goods",
  //     price: "$9.99",
  //     stocked: true,
  //     name: "Baseball",
  //   },
  //   {
  //     category: "Sporting Goods",
  //     price: "$29.99",
  //     stocked: false,
  //     name: "Basketball",
  //   },
  //   {
  //     category: "Electronics",
  //     price: "$99.99",
  //     stocked: true,
  //     name: "iPod Touch",
  //   },
  //   {
  //     category: "Electronics",
  //     price: "$399.99",
  //     stocked: false,
  //     name: "iPhone 5",
  //   },
  // ];
  return (
    <div className="App">
      {/* <FilterableProductTable products={PRODUCTS} /> */}
      {/* <Test /> */}
      <TodoApp />
    </div>
  );
}

export default App;
