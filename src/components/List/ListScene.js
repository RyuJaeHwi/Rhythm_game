// src/components/List/ListScene.js
/* module & 각 페이지 불러오기 */
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { drawListDesign } from "../ListDesign/ListDesign";

const ListScene = () => {
  const canvasRef = useRef(null); // DOM 요소(</> 태그)는 초기엔 존재X
  const [selectedSong, setSelectedSong] = useState(null); // 선택된 음악 데이터(.mp3)
  const [selectedSongCover, setSelectedSongCover] = useState(null); // 선택된 음악의 앨범 커버(.png)
  const navigate = useNavigate();

  // 음악 플레이리스트 (.mp3, .png 경로 필수)
  const playlist = [
    {
      title: "SMARTPHONE",
      artist: "최예나",
      cover: require("../../assets/smartphone_cover.png"),
      audio: require("../../assets/SMARTPHONE_YENA.mp3"),
    },
    {
      title: "Hate Rodrigo",
      artist: "최예나",
      cover: require("../../assets/hate_rodrigo_cover.png"),
      audio: require("../../assets/Hate_Rodrigo_YENA.mp3"),
    },
    // 더 추가 가능...
  ];

  // useEffect(() => {
  //   const canvas = canvasRef.current;
  //   const ctx = canvas.getContext("2d");

  //   // 여기에 원하는 크기를 명시적으로 지정합니다.
  //   canvas.width = window.innerWidth * 0.7; // 캔버스를 더 크게 조정
  //   canvas.height = window.innerHeight * 0.8;

  //   // 초기 화면 그리기 (선택된 곡이 없을 경우 기본 이미지)
  //   drawListDesign(ctx, canvas, selectedSongCover);

  //   const handleResize = () => {
  //     canvas.width = window.innerWidth * 0.7; // 창 크기에 따라 비율 유지
  //     canvas.height = window.innerHeight * 0.8;
  //     drawListDesign(ctx, canvas, selectedSongCover);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [selectedSongCover]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 캔버스 크기를 윈도우 창 크기와 일치시키기
    const resizeCanvas = () => {
      canvas.width = window.innerWidth; // 창 너비에 맞게 설정
      canvas.height = window.innerHeight; // 창 높이에 맞게 설정
      drawListDesign(ctx, canvas, selectedSongCover); // 선택 화면 디자인 (ListDesign.js)
    };

    // 초기 캔버스 크기 설정
    resizeCanvas();

    // 창 크기가 바뀌면 캔버스 크기를 다시 window에 맞게 조정
    window.addEventListener("resize", resizeCanvas);

    // cleanup : 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [selectedSongCover]);

  // 음악 선택 기능
  const handleSongSelect = (song) => {
    setSelectedSong(song); // 선택된 음악 데이터(.mp3)
    setSelectedSongCover(song.cover); // 선택된 음악의 앨범 커버(.png)
  };

  // '시작하기' 버튼 클릭 시 '/play'(PlayScene.js)으로 이동
  const handleStartClick = () => {
    if (selectedSong) {
      navigate("/play", { state: { song: selectedSong } }); // 선택된 음악 데이터 (.mp3)를 /play로 전달
    }
  };

  // '메인으로' 버튼 클릭 시 홈 화면이었던 '/home'(HomeScene.js)으로 이동
  const handleGoHomeClick = () => {
    navigate("/home");
  };

  // 스크롤바 제거 (HomeScene.js와 동일한 방식)
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

      {/* 플레이리스트 박스 디자인 설정 */}
      <div
        style={{
          position: "absolute",
          top: "150px",
          left: "70%",
          transform: "translateX(-50%)",
          width: "300px",
          backgroundColor: "#f4cfe0",
          border: "5px solid #f4a8e0",
          borderRadius: "30px",
          padding: "20px",
        }}
      >
        {/* 'PLAYLIST' Title 디자인 설정 */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "50px",
            fontSize: "30px",
            color: "#e366bf",
          }}
        >
          PLAYLIST
        </h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {playlist.map((song, index) => (
            <li key={index} style={{ marginBottom: "20px" }}>
              <button
                onClick={() => handleSongSelect(song)}
                style={{
                  fontSize: "15px",
                  padding: "10px",
                  color: "#d30588",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  backgroundColor: "#ffd0e0",
                  border: "3px solid #ffb4e0",
                  borderRadius: "20px",
                }}
              >
                {/* "노래제목 - 아티스트"로 음악 데이터 제목 배치 */}
                <span>{`${song.title} - ${song.artist}`}</span>
                <span>▶</span>
              </button>
            </li>
          ))}
        </ul>

        {/* 'start!' 버튼 디자인 설정 (노래를 선택한 경우에만 표시됨) */}
        {selectedSong && (
          <button
            onClick={handleStartClick}
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              color: "#e6059d",
              padding: "10px 20px",
              marginTop: "40px",
              cursor: "pointer",
              display: "block",
              width: "50%",
              backgroundColor: "#f9abd2",
              border: "3px solid #f994e2",
              borderRadius: "15px",
              margin: "40px auto 0 auto", // 수평 중앙 정렬
            }}
          >
            start!
          </button>
        )}
      </div>

      {/* '홈 화면으로' 버튼 */}
      <button
        // 커서 움직임 관련 옵션
        onMouseOver={(e) => (e.target.style.backgroundColor = "#f4b3d0")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#efbfe2")}
        onClick={handleGoHomeClick}
        style={{
          position: "fixed",
          bottom: "50px",
          right: "50px",
          fontSize: "20px",
          fontWeight: "bold",
          color: "#ff55cc",
          padding: "15px 20px",
          cursor: "pointer",
          backgroundColor: "#efbfe2",
          border: "2px solid #f4c8d0",
          borderRadius: "10px",
          boxShadow: "0px 4px 6px rgba(250, 69, 195, 0.5)",
          transition: "background-color 0.3s ease",
        }}
      >
        홈 화면으로
      </button>
    </div>
  );
};

export default ListScene;
