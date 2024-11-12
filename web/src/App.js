import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import MainPage from "./components/MainPage";
import SelectPage from "./components/SelectPage";
import MyPage from "./components/MyPage";
// App.js | 2024.10.30 '연습하기' 페이지 (/practice) 추가
import PracticePage from "./components/Practice/PracticePage";

/* GamePage  경로 임시 추가 */
import GamePage from "./components/GamePage";

/* 2024.11.9 | Game_SelectPage 경로 추가 (추가된 부분) */
import GameSelectPage from "./components/GameSelectPage";

import ResultPage from "./components/ResultPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* App.js | 2024.10.30 '연습하기' 페이지 (/practice) 추가 */}
        <Route path="/practice" element={<PracticePage />} />

        {/* GamePage  경로 임시 추가 */}
        <Route path="/game" element={<GamePage />} />

        {/* Game_SelectPage 경로 추가 (추가된 부분) */}
        <Route path="/game_select" element={<GameSelectPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
