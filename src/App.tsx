import React from "react";
import "./App.css";
import Product from "./components/Product";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="wrapper">
      <SideBar />
      <Product />
    </div>
  );
}

export default App;
