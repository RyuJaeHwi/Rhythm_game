import React, { useEffect, useRef, useState } from "react";
import smartphoneNote from "./smartphone_note";

const RhythmNote = ({ isPlaying }) => {
  const canvasRef = useRef(null);
  const [notes, setNotes] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const noteSpeed = 3;
  const laneWidth = 400 / 3;
  const noteWidth = laneWidth - 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // 노트 생성 함수
    const createNote = (lane) => {
      const x = lane * laneWidth + 5;
      const color = lane === 0 ? "#e272d5" : lane === 1 ? "#cc9cf3" : "#ff97fb";
      setNotes((prevNotes) => [
        ...prevNotes,
        { x, y: 0, color, width: noteWidth, height: 20 },
      ]);
    };

    const drawNotes = () => {
      ctx.fillStyle = "#fdc6df";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "#ffb9dc";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(laneWidth, 0);
      ctx.lineTo(laneWidth, canvas.height);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(laneWidth * 2, 0);
      ctx.lineTo(laneWidth * 2, canvas.height);
      ctx.stroke();

      // 판정선
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#fe61a9";
      ctx.strokeStyle = "#ff8dc9";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, canvas.height - 50);
      ctx.lineTo(canvas.width, canvas.height - 50);
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.shadowColor = "transparent";

      // 노트 그리기
      notes.forEach((note, index) => {
        note.y += noteSpeed;
        ctx.fillStyle = note.color;
        ctx.fillRect(note.x, note.y, note.width, note.height);

        // 노트가 화면을 벗어나면 제거
        if (note.y > canvas.height) {
          setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
        }
      });
    };

    // 애니메이션 실행
    const animate = (timestamp) => {
      if (!startTime) setStartTime(timestamp);
      const elapsedTime = (timestamp - startTime) / 1000; // 경과 시간 (초)

      // 노트 생성 로직: 경과 시간에 맞춰 노트 생성
      smartphoneNote.notes.forEach((note) => {
        if (
          elapsedTime >= note.time &&
          elapsedTime < note.time + noteSpeed / 100
        ) {
          createNote(note.lane);
        }
      });

      drawNotes();
      animationFrameId = requestAnimationFrame(animate);
    };

    if (isPlaying) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [notes, isPlaying, laneWidth, noteWidth, startTime]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={600}
      style={{
        position: "absolute",
        left: "550px",
        top: "80px",
        border: "10px solid #f8d9ea",
        zIndex: 2,
      }}
    />
  );
};

export default RhythmNote;
