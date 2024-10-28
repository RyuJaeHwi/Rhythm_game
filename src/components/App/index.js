/* module & 각 페이지 불러오기 */
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomeScene from "../Home/HomeScene";
import ListScene from "../List/ListScene";
import PlayScene from "../Play/PlayScene";
import ResultScene from "../Result/ResultScene";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeScene />} />
        <Route path="/list" element={<ListScene />} />
        <Route path="/play" element={<PlayScene />} />
        <Route path="/result" element={<ResultScene />} />
      </Routes>
    </Router>
  );
};

export default App;
