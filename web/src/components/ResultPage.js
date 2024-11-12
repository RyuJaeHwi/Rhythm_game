// src/components/Result/ResultPage.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ResultPage.css"; // 스타일링이 필요한 경우

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { accuracy } = location.state || {};

  // 게임 선택 페이지로 돌아가는 함수
  const handleBackToSelect = () => {
    navigate("/game_select");
  };

  return (
    <div className="result_page">
      <h1>게임 결과</h1>
      {accuracy !== undefined ? (
        <>
          <h2>정확도: {accuracy}%</h2>
          <p>축하합니다! 이번 게임에서 얻은 점수를 확인하세요.</p>
        </>
      ) : (
        <p>게임 결과를 불러올 수 없습니다.</p>
      )}
      <button onClick={handleBackToSelect} className="back_button">
        게임 선택으로 돌아가기
      </button>
    </div>
  );
};

export default ResultPage;
