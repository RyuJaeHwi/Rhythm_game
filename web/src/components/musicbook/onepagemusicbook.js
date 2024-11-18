// src/components/musicbook/onepagemusicbook.js
import React, { useEffect, useState, useRef, useCallback } from "react";
import noMusicImage from "../musicbook/no_musicbook.png";
import onepage_Image1 from "../musicbook/DAY6_onepage_1.png";
import onepage_Image2 from "../musicbook/DAY6_onepage_2.png";
import onepage_Image3 from "../musicbook/DAY6_onepage_3.png";
import onepage_Image4 from "../musicbook/DAY6_onepage_4.png";
import onepage_Image5 from "../musicbook/DAY6_onepage_5.png";
import onepage_Image6 from "../musicbook/DAY6_onepage_6.png";
import onepage_Image7 from "../musicbook/DAY6_onepage_7.png";
import onepage_Image8 from "../musicbook/DAY6_onepage_8.png";
import onepage_Image9 from "../musicbook/DAY6_onepage_9.png";
import onepage_Image10 from "../musicbook/DAY6_onepage_10.png";
import onepage_Image11 from "../musicbook/DAY6_onepage_11.png";
import onepage_Image12 from "../musicbook/DAY6_onepage_12.png";
import onepage_Image13 from "../musicbook/DAY6_onepage_13.png";
import onepage_Image14 from "../musicbook/DAY6_onepage_14.png";
import onepage_Image15 from "../musicbook/DAY6_onepage_15.png";
import onepage_Image16 from "../musicbook/DAY6_onepage_16.png";
import onepage_Image17 from "../musicbook/DAY6_onepage_17.png";
import "./onepagemusicbook.css";

// 설명주석은 prettymusicbook.js 코드파일에 대신 적음

const OnePageMusicBook = () => {
  const [currentScoreImage, setCurrentScoreImage] = useState(noMusicImage);
  const [highlightedMeasure, setHighlightedMeasure] = useState(null);
  const timers = useRef([]);
  const musicStartTime = useRef(null);

  const handleMusicStart = useCallback(() => {
    musicStartTime.current = Date.now();

    const changeScoreImage = [
      { time: 0, image: onepage_Image1 },
      { time: 5500, image: onepage_Image2 },
      { time: 10700, image: onepage_Image3 },
      { time: 16500, image: onepage_Image4 },
      { time: 21900, image: onepage_Image5 },
      { time: 27400, image: onepage_Image6 },
      { time: 32900, image: onepage_Image7 },
      { time: 38500, image: onepage_Image8 },
      { time: 43900, image: onepage_Image9 },
      { time: 49500, image: onepage_Image10 },
      { time: 54900, image: onepage_Image11 }, // 후렴구 시작
      { time: 60510, image: onepage_Image12 },
      { time: 66000, image: onepage_Image13 },
      { time: 71200, image: onepage_Image14 },
      { time: 77000, image: onepage_Image15 },
      { time: 82000, image: onepage_Image16 },
      { time: 88000, image: onepage_Image17 },
    ];

    const highlightTiming = [
      /* ---------------------------------------------------- */
      /* page1 */
      { time: 0, measure: 1 },
      { time: 1500, measure: 2 },
      { time: 2800, measure: 3 },
      { time: 4100, measure: 4 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page2 */
      { time: 5500, measure: 5 },
      { time: 6700, measure: 6 },
      { time: 8300, measure: 7 },
      { time: 9600, measure: 8 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page3 */
      { time: 10700, measure: 9 },
      { time: 12500, measure: 10 },
      { time: 13930, measure: 11 },
      { time: 15200, measure: 12 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page4 */
      { time: 16500, measure: 13 },
      { time: 18070, measure: 14 },
      { time: 19130, measure: 15 },
      { time: 20530, measure: 16 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page5 */
      { time: 21900, measure: 17 },
      { time: 23300, measure: 18 },
      { time: 24970, measure: 19 },
      { time: 26420, measure: 20 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page6 */
      { time: 27400, measure: 21 },
      { time: 28800, measure: 22 },
      { time: 30200, measure: 23 },
      { time: 31600, measure: 24 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page7 */
      { time: 32900, measure: 25 },
      { time: 34300, measure: 26 },
      { time: 35700, measure: 27 },
      { time: 37100, measure: 28 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page8 */
      { time: 38500, measure: 29 },
      { time: 39900, measure: 30 },
      { time: 41300, measure: 31 },
      { time: 42600, measure: 32 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page9 */
      { time: 43900, measure: 33 },
      { time: 45300, measure: 34 },
      { time: 46700, measure: 35 },
      { time: 48100, measure: 36 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page10 */
      { time: 49500, measure: 37 },
      { time: 50900, measure: 38 },
      { time: 52300, measure: 39 },
      { time: 53700, measure: 40 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page11 */
      // 후렴구 시작 (43번째 부터...)
      { time: 54900, measure: 41 },
      { time: 56200, measure: 42 },
      { time: 57600, measure: 43 },
      { time: 59000, measure: 44 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page12 */
      { time: 60510, measure: 45 },
      { time: 61910, measure: 46 },
      { time: 63310, measure: 47 },
      { time: 64710, measure: 48 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page13 (아무걱정도 ~) */
      { time: 66000, measure: 49 },
      { time: 67400, measure: 50 },
      { time: 68800, measure: 51 },
      { time: 70200, measure: 52 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page14 */
      { time: 71200, measure: 53 },
      { time: 72600, measure: 54 },
      { time: 74000, measure: 55 },
      { time: 75400, measure: 56 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page15 */
      { time: 77000, measure: 57 },
      { time: 78400, measure: 58 },
      { time: 79800, measure: 59 },
      { time: 81200, measure: 60 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page16 */
      { time: 82000, measure: 61 },
      { time: 83400, measure: 62 },
      { time: 84800, measure: 63 },
      { time: 86200, measure: 64 },
      /* ---------------------------------------------------- */

      /* ---------------------------------------------------- */
      /* page17 */
      { time: 88000, measure: 65 },
      { time: 89400, measure: 66 },
      { time: 90800, measure: 67 },
      { time: 92200, measure: 68 },
      /* ---------------------------------------------------- */
    ];

    changeScoreImage.forEach(({ time, image }) => {
      const delay = time - (Date.now() - musicStartTime.current);
      const timer = setTimeout(
        () => setCurrentScoreImage(image),
        Math.max(0, delay)
      );
      timers.current.push(timer);
    });

    highlightTiming.forEach(({ time, measure }) => {
      const delay = time - (Date.now() - musicStartTime.current);
      const timer = setTimeout(
        () => setHighlightedMeasure(measure),
        Math.max(0, delay)
      );
      timers.current.push(timer);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("musicStart", handleMusicStart);
    const savedTimers = timers.current;

    return () => {
      window.removeEventListener("musicStart", handleMusicStart);
      savedTimers.forEach(clearTimeout);
    };
  }, [handleMusicStart]);

  return (
    <div className="onepage_musicbook">
      <div className="onepage_imagebox_field">
        <img
          src={currentScoreImage}
          alt="Score Sheet"
          className="sheet_image"
        />
        {highlightedMeasure && (
          <div
            className={`onepage_red_box onepage_measure-${highlightedMeasure}`}
          ></div>
        )}
      </div>
    </div>
  );
};

export default OnePageMusicBook;
