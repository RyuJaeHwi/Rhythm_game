// src/components/PlayDesign/PlayDesign.js
/* /play 페이지 디자인 관련 외부 모듈 코드 */
export const drawPlayDesign = (
  ctx,
  canvas,
  songTitle,
  selectedSongCover,
  titleX,
  titleY
) => {
  // 배경 이미지(.jpg)
  const background = new Image();
  background.src = require("../../assets/pink_background.png");
  background.onload = () => {
    ctx.shadowBlur = 0;
    ctx.drawImage(background, 0, -15, canvas.width, canvas.height);

    // 음악 Title 배치
    drawSongTitle(ctx, canvas, songTitle, titleX, titleY);

    // 앨범 커버 배치 (배경이 로드된 후)
    drawAlbumCover(ctx, canvas, selectedSongCover);
  };
};

/* 음악 Title 관련 캔버스 코드 */
const drawSongTitle = (ctx, canvas, songTitle, x, y) => {
  ctx.fillStyle = "white"; // 연보라색 텍스트 색상
  ctx.font = "bold 40px Arial"; // 굵은 폰트와 60px 크기
  ctx.textAlign = "left"; // 텍스트 정렬
  ctx.fillText(`< ${songTitle} >`, x, y); // 선택된 노래 제목 출력
  ctx.strokeStyle = "#efa8d7"; // 검정색 외곽선
  ctx.lineWidth = 2; // 외곽선 두께
  ctx.strokeText(`< ${songTitle} >`, x, y); // 외곽선 그리기
};

/* 앨범 커버 이미지 관련 캔버스 코드 */
const drawAlbumCover = (ctx, canvas, selectedSongCover) => {
  // 기본 앨범 커버 이미지 배치 (선택되지 않았을 때)
  const defaultCover = new Image();
  defaultCover.src = require("../../assets/no_song_cover.png");

  // 선택된 음악의 앨범 커버 이미지(.png) 배치
  const coverImage = new Image();
  coverImage.src = selectedSongCover ? selectedSongCover : defaultCover.src;

  coverImage.onload = () => {
    // 앨범 커버 이미지 크기 및 위치 설정
    const coverSize = canvas.height * 0.35; // ex) 캔버스 높이의 35%로 설정
    const coverX = 125; // 왼쪽에서 125px 떨어진 위치
    const coverY = canvas.height / 2.6; // 위에서 1/2.5 위치에 배치

    // 이미지 그리기
    ctx.drawImage(coverImage, coverX, coverY, coverSize, coverSize);

    // 앨범 커버 이미지 테두리 설정
    ctx.lineWidth = 5;
    ctx.strokeStyle = "#f3c2e2";
    ctx.strokeRect(coverX, coverY, coverSize, coverSize);
  };
};
