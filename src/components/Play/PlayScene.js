// src/components/Play/PlayScene.js
/* module & 각 페이지 불러오기 */
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { drawPlayDesign } from "../PlayDesign/PlayDesign";
import RhythmNote from "../GameControl/Rhythm_note"; // RhythmNote 임포트

const PlayScene = () => {
  const canvasRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { song } = location.state; // ListScene.js에서 전달된 음악 데이터
  const audioRef = useRef(null); // 오디오 객체 참조를 위한 useRef 사용
  const [showResultButton, setShowResultButton] = useState(false); // 결과 버튼 상태 관련
  const [currentTime, setCurrentTime] = useState(0); // 재생된 시간 관련 옵션
  const [duration, setDuration] = useState(0); // 오디오 전체 길이 관련 옵션
  const [isPlaying, setIsPlaying] = useState(false); // 음악 및 노트 애니메이션 상태 제어

  // 오디오 및 재생 시간 바 관련 설정
  useEffect(() => {
    const audio = new Audio(song.audio); // 선택된 음악의 오디오 파일(.mp3) 호출
    audioRef.current = audio; // audioRef에 저장

    // 오디오 메타데이터 로드 시 오디오의 전체 길이 설정
    audioRef.current.onloadedmetadata = () => {
      setDuration(audioRef.current.duration);
    };

    // 오디오 재생 시간이 변할 때마다 currentTime 업데이트
    audioRef.current.ontimeupdate = () => {
      setCurrentTime(audioRef.current.currentTime);
    };

    // 음악이 끝났을 때 '결과보기' 버튼을 표시하는 로직
    audioRef.current.onended = () => {
      setIsPlaying(false); // 음악이 끝나면 재생 중단
      setShowResultButton(true); // 결과 버튼 표시
    };

    // cleanup : 컴포넌트가 언마운트될 때 오디오 중지 및 시간 초기화
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; // 오디오 재생 시간 초기화
      }
    };
  }, [song]);

  // 캔버스 디자인 적용 로직
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // 캔버스 크기를 창 크기와 일치시키기
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // 타이틀의 x, y 위치 설정 (원하는 위치로 조정)
      const titleX = 80; // 왼쪽으로 80px 이동
      const titleY = 230; // 상단에서 240px 아래로 이동
      drawPlayDesign(ctx, canvas, song.title, song.cover, titleX, titleY);
    };

    // 초기 캔버스 크기 설정
    resizeCanvas();

    // 창 크기 변경 시 캔버스 크기 재조정
    window.addEventListener("resize", resizeCanvas);

    // cleanup : 컴포넌트 언마운트 시 이벤트 제거
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [song]);

  // 음악 재생 버튼
  const handlePlayClick = async () => {
    try {
      await audioRef.current.play();
      setIsPlaying(true); // 음악과 함께 노트 애니메이션 시작
    } catch (error) {
      console.error("Audio play error:", error);
    }
  };

  // 음악 일시정지 버튼
  const handlePauseClick = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false); // 노트 애니메이션도 중단
    }
  };

  // '결과보기' 버튼 클릭 시 /result 페이지로 이동
  const handleResultClick = () => {
    navigate("/result");
  };

  // 스크롤바 제거
  useEffect(() => {
    document.body.style.overflow = "hidden"; // 스크롤바 제거
    return () => {
      document.body.style.overflow = ""; // cleanup: 컴포넌트가 언마운트될 때 스크롤바 재생성
    };
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* 캔버스 요소 */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // 캔버스를 뒤로 보내기
        }}
      />
      {/* 타임 바 (남은 재생 시간 시각화) */}
      <div
        style={{
          position: "absolute",
          top: "150px",
          right: "90px",
          zIndex: 1,
        }}
      >
        <p
          style={{
            fontSize: "35px",
            color: "#fce8f9",
            fontWeight: "bold",
            //textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)",
            marginBottom: "20px",
            WebkitTextStroke: "2px #f7acd7",
          }}
        >
          Time Left
        </p>
        <div
          style={{
            width: "300px",
            height: "20px",
            backgroundColor: "#efa8d7",
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0px 4px 6px rgba(218, 35, 141, 0.5)",
          }}
        >
          <div
            style={{
              width: `${(currentTime / duration) * 100}%`,
              height: "100%",
              backgroundColor: "black",
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>
      {/* RhythmNote 컴포넌트 */}
      <RhythmNote isPlaying={isPlaying} />{" "}
      {/* 노트는 상태에 따라 애니메이션 실행 */}
      {/* 재생 및 일시정지 버튼을 동시에 표시 */}
      <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
        <div
          style={{
            position: "absolute",
            top: "400px",
            right: "170px",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* 재생 버튼 */}
          <button
            onClick={handlePlayClick}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d2a3c0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#efbfe2")}
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              padding: "15px 25px", // 버튼 안쪽 여백
              cursor: "pointer",
              backgroundColor: "#efbfe2",
              color: "#ff55cc",
              border: "2px solid #f4c8d0",
              borderRadius: "20px",
              boxShadow: "0px 4px 6px rgba(250, 69, 195, 0.5)",
              transition: "background-color 0.3s ease",
              marginBottom: "20px", // 버튼 사이 간격 추가
            }}
          >
            재생
          </button>

          {/* 일시정지 버튼 */}
          <button
            onClick={handlePauseClick}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d2a3c0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#efbfe2")}
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              padding: "15px 25px", // 버튼 안쪽 여백
              cursor: "pointer",
              backgroundColor: "#efbfe2",
              color: "#ff55cc",
              border: "2px solid #f4c8d0",
              borderRadius: "20px",
              boxShadow: "0px 4px 6px rgba(250, 69, 195, 0.5)",
              transition: "background-color 0.3s ease",
            }}
          >
            일시정지
          </button>

          {/* 음악이 끝나면 나타나는 '결과 확인' 버튼 */}
          {showResultButton && (
            <button
              onClick={handleResultClick}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d2a3c0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#efbfe2")}
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                padding: "15px 25px", // 버튼 안쪽 여백
                cursor: "pointer",
                backgroundColor: "#efbfe2",
                color: "#ff55cc",
                border: "2px solid #f4c8d0",
                borderRadius: "20px",
                boxShadow: "0px 4px 6px rgba(250, 69, 195, 0.5)",
                transition: "background-color 0.3s ease",
                marginTop: "20px",
              }}
            >
              결과 확인
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayScene;
