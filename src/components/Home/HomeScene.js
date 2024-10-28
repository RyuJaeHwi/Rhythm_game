// src/components/Home/HomeScene.js
/* module & 각 페이지 불러오기 */
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { drawHomeDesign } from "../HomeDesign/HomeDesign";

const HomeScene = () => {
  const canvasRef = useRef(null); // DOM 요소(</> 태그)는 초기엔 존재 X
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current; // canvasRef로 현재 캔버스 DOM 요소 호출
    const ctx = canvas.getContext("2d"); // '2D'로 각 요소 설정

    // 캔버스 크기를 윈도우 창 크기와 일치시키기
    const resizeCanvas = () => {
      canvas.width = window.innerWidth; // window와 동일하게 캔버스 너비 설정
      canvas.height = window.innerHeight; // window와 동일하게 캔버스 높이 설정
      drawHomeDesign(ctx, canvas); // 홈 화면 디자인 (HomeDesign.js)
    };

    // 초기 캔버스 크기 설정
    resizeCanvas();

    // //윈도우 창 크기가 변할 때마다 resize 함수를 호출
    // 아래 주석처리 코드는 클래스 기반(옛날 방식...useEfffect와 안맞음)이니 사용 X
    // window.addEventListener('resize', this.resize.bind(this));
    // this.resize();

    // 창 크기가 바뀌면 캔버스 크기를 다시 window에 맞게 조정
    window.addEventListener("resize", resizeCanvas);

    // cleanup : 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  // 'Start' 버튼 클릭 시 '/list'(ListScene.js)으로 이동
  const handleStartClick = () => {
    navigate("/list");
  };

  // 스크롤바 제거
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 스크롤바 제거
    return () => {
      document.body.style.overflow = ""; // cleanup: 컴포넌트가 언마운트될 때 스크롤바 재생성
    };
  }, []);

  /* UI 구성 */
  return (
    <div style={{ position: "relative" }}>
      {/* HTML5 Canvas을 화면에 렌더링(변환) -> 시각적으로.... */}
      <canvas ref={canvasRef} style={{ display: "block" }}></canvas>

      {/* '게임 시작' 버튼의 위치(</div>) & 디자인(</button>) 설정 */}
      <div
        style={{
          textAlign: "center", // 텍스트 중앙 정렬
          marginTop: "10px", // 위쪽에 30px 여백
          position: "absolute", // 절대 위치 지정
          top: "400px", // 화면의 위쪽에서 600px 아래로 위치 설정
          width: "100%", // 너비를 100%로 설정해 화면 전체에 맞춤
        }}
      >
        <button
          onClick={handleStartClick}
          // 커서 움직임 관련 옵션
          onMouseOver={(e) => (e.target.style.backgroundColor = "#f4b3d0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#efbfe2")}
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            padding: "15px 25px", // 버튼 안쪽 여백
            cursor: "pointer",
            backgroundColor: "#efbfe2",
            color: "#ff55cc",
            border: "2px solid #f4c8d0",
            borderRadius: "20px",
            boxShadow: "0px 4px 6px rgba(250, 69, 195, 0.5)", // 그림자 색상 변경
            transition: "background-color 0.3s ease",
          }}
        >
          게임 시작
        </button>
      </div>
    </div>
  );
};

export default HomeScene;
