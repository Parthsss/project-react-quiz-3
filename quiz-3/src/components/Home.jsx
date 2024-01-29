import React from "react";
import "./Home.css"
import { Link } from "react-router-dom";

export default function Home(){

  return(
    <div className="home">
      <h3 className="home-heading">Quiz App</h3>
      <Link to="play-quiz" className="home-bt">
        <button className="home-bt">Play</button>
      </Link>
    </div>
  )
}