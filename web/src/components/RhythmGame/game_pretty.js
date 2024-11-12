// src/components/RhythmGame/game_pretty.js
import React, { useState, useEffect, useCallback } from "react";
import "./game_pretty.css"; // CSS 파일 불러오기
import prettyNotes from "./note_pretty"; // 채보 데이터 불러오기

const GamePretty = ({ isPlaying, onGameEnd }) => {
  const [isAKeyPressed, setIsAKeyPressed] = useState(false);
  const [isSKeyPressed, setIsSKeyPressed] = useState(false);
  const [isDKeyPressed, setIsDKeyPressed] = useState(false);
  const [notes, setNotes] = useState([]);
  const [hitResult, setHitResult] = useState({ a: "", s: "", d: "" });
  const [score, setScore] = useState(0);
  const [totalNotes, setTotalNotes] = useState(0);

  // 기준선 y 좌표 (아래에 위치한 기준선의 y 값) - 값을 더 위쪽으로 조정
  const targetLineY = 530; // 기존 550에서 500으로 변경하여 기준선을 더 위로 올립니다.
  // 직사각형의 하단 y 좌표보다 조금 위쪽으로 설정
  const bottomLineY = 580;

  // 키보드 이벤트 핸들러 함수 (useCallback으로 감싸기)
  const handleKeyDown = useCallback((event) => {
    if (event.key === "a") {
      setIsAKeyPressed(true);
      checkNoteHit("a");
    } else if (event.key === "s") {
      setIsSKeyPressed(true);
      checkNoteHit("s");
    } else if (event.key === "d") {
      setIsDKeyPressed(true);
      checkNoteHit("d");
    }
  }, []);

  const handleKeyUp = useCallback((event) => {
    if (event.key === "a") {
      setIsAKeyPressed(false);
    } else if (event.key === "s") {
      setIsSKeyPressed(false);
    } else if (event.key === "d") {
      setIsDKeyPressed(false);
    }
  }, []);

  // 노트가 기준선 근처에 있는지 확인하는 함수
  const checkNoteHit = (position) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => {
        if (note.position === position) {
          const distance = Math.abs(note.y - targetLineY);

          let result = "";
          let points = 0;
          // 거리 차이에 따라 결과 판정
          if (distance <= 20) {
            result = "Perfect";
            points = 10;
          } else if (distance <= 50) {
            result = "Good";
            points = 5;
          } else if (distance <= 100) {
            result = "Bad";
            points = 0;
          } else {
            return true; // 거리가 너무 멀면 제거하지 않음
          }

          // 판정 결과 상태 업데이트 및 점수 추가
          setHitResult((prev) => ({ ...prev, [position]: result }));
          setScore((prevScore) => prevScore + points);
          setTotalNotes((prevTotal) => prevTotal + 1);

          // 일정 시간 후 판정 결과 제거
          setTimeout(() => {
            setHitResult((prev) => ({ ...prev, [position]: "" }));
          }, 300);

          return false; // 노트 제거
        }
        return true;
      })
    );
  };

  // 이벤트 리스너 등록 및 해제
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  // 노트 이동 로직 및 채보 데이터에 따라 노트 추가
  useEffect(() => {
    let animationFrame;

    const moveNotes = () => {
      setNotes((prevNotes) =>
        prevNotes
          .map((note) => ({ ...note, y: note.y + 5 }))
          .filter((note) => {
            if (note.y > bottomLineY) {
              console.log("Bad - Missed the note");
              setHitResult((prev) => ({ ...prev, [note.position]: "Bad" }));
              setTotalNotes((prevTotal) => prevTotal + 1);
              setTimeout(() => {
                setHitResult((prev) => ({ ...prev, [note.position]: "" }));
              }, 500);
              return false; // 노트가 화면 아래로 내려가기 전에 제거
            }
            return true;
          })
      );
      animationFrame = requestAnimationFrame(moveNotes);
    };

    if (isPlaying) {
      // 게임이 시작될 때 채보 데이터에 따라 노트 추가
      setNotes([]); // 기존 노트 초기화
      prettyNotes.forEach((note) => {
        setTimeout(() => {
          setNotes((prevNotes) => [
            ...prevNotes,
            { id: Date.now(), position: note.position, y: 0 },
          ]);
        }, note.time * 1000);
      });
      animationFrame = requestAnimationFrame(moveNotes);
    } else {
      cancelAnimationFrame(animationFrame);
    }

    return () => cancelAnimationFrame(animationFrame);
  }, [isPlaying]);

  // 게임 종료 시 결과 계산 및 전송
  useEffect(() => {
    if (!isPlaying && totalNotes > 0) {
      const accuracy = ((score / (totalNotes * 10)) * 100).toFixed(2);
      onGameEnd(accuracy);
    }
  }, [isPlaying, totalNotes, score, onGameEnd]);

  return (
    <div className="game_container">
      <div
        className="square1"
        style={{ backgroundColor: isAKeyPressed ? "#ffffff" : "#cab7cb" }}
      >
        {/* 기준선 추가 */}
        <div
          className="horizontal_line"
          style={{ top: `${targetLineY}px` }} // 기준선 위치 조정
        ></div>
        {/* 판정 결과 표시 */}
        {hitResult.a && (
          <div className="hit_result" style={{ top: `${targetLineY - 30}px` }}>
            {hitResult.a}
          </div>
        )}
        {notes
          .filter((note) => note.position === "a")
          .map((note) => (
            <div
              key={note.id}
              className="note_a"
              style={{ top: `${note.y}px` }}
            ></div>
          ))}
      </div>
      <div
        className="square2"
        style={{ backgroundColor: isSKeyPressed ? "#ffffff" : "#b2c9ab" }}
      >
        {/* 기준선 추가 */}
        <div
          className="horizontal_line"
          style={{ top: `${targetLineY}px` }} // 기준선 위치 조정
        ></div>
        {/* 판정 결과 표시 */}
        {hitResult.s && (
          <div className="hit_result" style={{ top: `${targetLineY - 30}px` }}>
            {hitResult.s}
          </div>
        )}
        {notes
          .filter((note) => note.position === "s")
          .map((note) => (
            <div
              key={note.id}
              className="note_s"
              style={{ top: `${note.y}px` }}
            ></div>
          ))}
      </div>
      <div
        className="square3"
        style={{ backgroundColor: isDKeyPressed ? "#ffffff" : "#abc2e8" }}
      >
        {/* 기준선 추가 */}
        <div
          className="horizontal_line"
          style={{ top: `${targetLineY}px` }} // 기준선 위치 조정
        ></div>
        {/* 판정 결과 표시 */}
        {hitResult.d && (
          <div className="hit_result" style={{ top: `${targetLineY - 30}px` }}>
            {hitResult.d}
          </div>
        )}
        {notes
          .filter((note) => note.position === "d")
          .map((note) => (
            <div
              key={note.id}
              className="note_d"
              style={{ top: `${note.y}px` }}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default GamePretty;
