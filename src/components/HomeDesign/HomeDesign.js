// src/components/HomeDesign/HomeDesign.js
/* /home 페이지 디자인 관련 외부 모듈 코드 */
export const drawHomeDesign = (ctx, canvas) => {
  // 캔버스 배경색
  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 배경 이미지(.jpg)
  const background = new Image();
  background.src = require("../../assets/pink_background.png");
  background.onload = () => {
    ctx.shadowBlur = 0;
    ctx.drawImage(background, -15, -15, canvas.width, canvas.height);

    // 로고(Title) 배치
    drawLogo(ctx, canvas);

    // 버튼('시작하기') 배치
    //drawStartButton(ctx, canvas);
  };
};

/* Title 관련 캔버스 코드 */
const drawLogo = (ctx, canvas) => {
  // 텍스트 옵션
  ctx.font = "bold 60px Arial";
  ctx.textAlign = "center";

  // 텍스트 그림자 관련 옵션
  ctx.shadowColor = "#fa76c3";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // 텍스트 테두리 옵션
  ctx.strokeStyle = "#ffd3f4";
  ctx.lineWidth = 3;
  ctx.strokeText("Drum Rhythm Game", canvas.width / 2, 250);

  // 텍스트 내부 옵션
  ctx.fillStyle = "#ffdff4";
  ctx.fillText("Drum Rhythm Game", canvas.width / 2, 250);
};
