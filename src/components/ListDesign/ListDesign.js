// src/components/ListDesign/ListDesign.js
/* /list 페이지 디자인 관련 외부 모듈 코드 */
export const drawListDesign = (ctx, canvas, selectedSongCover) => {
  // 캔버스 초기화 (새로운 페이지 로딩 시 필요)
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 배경 이미지(.jpg)
  const background = new Image();
  background.src = require("../../assets/pink_background.png");
  background.onload = () => {
    ctx.shadowBlur = 0;
    ctx.drawImage(background, -15, -15, canvas.width, canvas.height);

    // 앨범 커버 배치 (배경이 로드된 후, 음악 선택 시)
    drawAlbumCover(ctx, canvas, selectedSongCover);
  };
};

/* 앨범 커버(.png) 관련 캔버스 코드 */
const drawAlbumCover = (ctx, canvas, selectedSongCover) => {
  // 기본 앨범 커버 이미지 배치 (선택되지 않았을 때)
  const defaultCover = new Image();
  defaultCover.src = require("../../assets/no_song_cover.png");

  // 선택된 음악의 앨범 커버 이미지(.png) 배치
  // 해당 음악의 앨범 커버 이미지 데이터가 없다면, 기본 앨범 커버 이미지로 대체
  const selectcover = new Image();
  selectcover.src = selectedSongCover ? selectedSongCover : defaultCover.src;

  selectcover.onload = () => {
    // 앨범 커버 이미지 크기 설정
    const coverSize = canvas.height * 0.7; // ex) 캔버스 높이의 70%로 설정
    const coverX = (canvas.width / 2 - coverSize) / 2 + 30;
    const coverY = (canvas.height - coverSize) / 2;
    ctx.drawImage(selectcover, coverX, coverY, coverSize, coverSize);

    // 앨범 커버 이미지 테두리 설정
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#f4a8e0";
    ctx.strokeRect(coverX, coverY, coverSize, coverSize);
  };

  // cover.onload = () => {
  //   const coverSize = canvas.height * 0.9; // 앨범 커버 크기
  //   const coverX = (canvas.width / 2 - coverSize) / 2 + 150;
  //   const coverY = (canvas.height - coverSize) / 2; // y 위치를 조정 (100 제거)
  //   ctx.drawImage(cover, coverX, coverY, coverSize, coverSize);
  // };
};
