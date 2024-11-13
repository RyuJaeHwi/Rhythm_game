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
  const [perfectCount, setPerfectCount] = useState(0);
  const [goodCount, setGoodCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const targetLineY = 530;
  const bottomLineY = 580;

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

  const checkNoteHit = (position) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => {
        if (note.position === position) {
          const distance = Math.abs(note.y - targetLineY);

          let result = "";
          let points = 0;
          if (distance <= 20) {
            result = "Perfect";
            points = 10;
            setPerfectCount((prev) => prev + 1);
          } else if (distance <= 50) {
            result = "Good";
            points = 5;
            setGoodCount((prev) => prev + 1);
          } else if (distance <= 100) {
            result = "Bad";
            points = 0;
            setBadCount((prev) => prev + 1);
          } else {
            return true;
          }

          setHitResult((prev) => ({ ...prev, [position]: result }));
          setScore((prevScore) => prevScore + points);
          setTotalNotes((prevTotal) => prevTotal + 1);

          setTimeout(() => {
            setHitResult((prev) => ({ ...prev, [position]: "" }));
          }, 300);

          return false; // 노트 제거
        }
        return true;
      })
    );
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

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
              setBadCount((prev) => prev + 1);
              setTotalNotes((prevTotal) => prevTotal + 1);
              setTimeout(() => {
                setHitResult((prev) => ({ ...prev, [note.position]: "" }));
              }, 500);
              return false;
            }
            return true;
          })
      );
      animationFrame = requestAnimationFrame(moveNotes);
    };

    if (isPlaying) {
      setNotes([]);
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
      const maxScore = totalNotes * 10; // 최대 점수는 총 노트 수 * 10
      const accuracy = ((score / maxScore) * 100).toFixed(2); // 정확도 계산
      onGameEnd({
        accuracy,
        score,
        totalNotes,
        perfectCount,
        goodCount,
        badCount,
      });
    }
  }, [
    isPlaying,
    totalNotes,
    score,
    onGameEnd,
    perfectCount,
    goodCount,
    badCount,
  ]);

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
