import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import data from "./data";

function App() {
  const locations = data.map((item, index) => {
    return <Card key={index} item={item} />;
  });
  return (
    <>
      <Header />

      <div className="main">{locations}</div>
    </>
  );
}

export default App;
