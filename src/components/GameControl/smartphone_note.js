// smartphone_note.js
const smartphoneNote = {
  bpm: 88, // SMARTPHONE_YENA 곡의 BPM
  notes: [
    { time: 0.5, lane: 0 }, // 0.5초에 첫 번째 라인 (a 키)로 노트가 떨어짐
    { time: 1.1, lane: 1 }, // 1.5초에 두 번째 라인 (s 키)로 노트가 떨어짐
    { time: 1.9, lane: 2 }, // 2.5초에 세 번째 라인 (d 키)로 노트가 떨어짐
    // '터져대는 플래시~'
    { time: 3.0, lane: 1 },
    { time: 3.5, lane: 1 },
    { time: 5.4, lane: 2 },
    { time: 5.8, lane: 2 },
    // '환히 웃다가도~ (9초)'
    { time: 8.1, lane: 0 },
    { time: 9.1, lane: 1 },
    { time: 9.9, lane: 2 },
    // '세상은 내게~ (15초)
    { time: 12.9, lane: 1 },
  ],
};

export default smartphoneNote;
