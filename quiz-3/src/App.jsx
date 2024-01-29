import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/play-quiz" element={<Quiz />}></Route>
        <Route path="/finish-quiz" element={<Result />}></Route>
      </Routes>
    );
  }
}