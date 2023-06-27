import React from "react";
import Globe from "../assets/globe.svg";

export default function Header() {
  return (
    <nav className="header">
      <img className="logo" src={Globe} />
      <p className="title">my travel journal.</p>
    </nav>
  );
}
