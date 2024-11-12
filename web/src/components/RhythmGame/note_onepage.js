// src/components/RhythmGame/note_onepage.js

// "한 페이지가 될 수 있게 - DAY6" 채보 데이터
const onepageNotes = [
  // Day6_onepage_1.png
  // 1-1
  // 00:00.47
  { time: 0.47, position: "d" },
  { time: 0.87, position: "d" },
  // 1-2
  // 00:01.61
  { time: 1.61, position: "a" },
  //{ time: 1.91, position: "s" },
  { time: 2.11, position: "s" },
  //{ time: 2.41, position: "s" },
  // 1-3
  // 00:02.87
  { time: 2.87, position: "a" },
  //{ time: 3.17, position: "s" },
  { time: 3.47, position: "s" },
  //{ time: 3.77, position: "s" },
  // 1-4
  // 00:04.28
  { time: 4.28, position: "a" },
  //{ time: 4.58, position: "s" },
  { time: 4.88, position: "s" },
  //{ time: 5.18, position: "s" },

  // Day6_onepage_2.png
  // 2-1
  // 00:05.57
  { time: 5.57, position: "a" },
  //{ time: 5.87, position: "s" },
  { time: 6.17, position: "s" },
  //{ time: 6.47, position: "s" },
  // 2-2
  // 00:06.97
  { time: 6.97, position: "a" },
  //{ time: 7.27, position: "s" },
  { time: 7.57, position: "s" },
  //{ time: 7.87, position: "s" },
  // 2-3
  // 00:08.26
  { time: 8.26, position: "a" },
  //{ time: 8.56, position: "s" },
  { time: 8.86, position: "s" },
  //{ time: 9.26, position: "s" },
  // 2-4
  // 00:09.74
  { time: 9.74, position: "a" },
  //{ time: 10.04, position: "s" },
  { time: 10.34, position: "s" },
  //{ time: 10.64, position: "s" },

  // Day6_onepage_3.png
  // 3-1
  // 00:10.99
  { time: 10.99, position: "s" },
  //{ time: 11.49, position: "s" },
  { time: 11.69, position: "s" },
  //{ time: 11.99, position: "d" },
  // 3-2
  // 00:12.46
  { time: 12.46, position: "a" },
  //{ time: 12.86, position: "s" },
  { time: 13.26, position: "a" },
  //{ time: 13.56, position: "d" },
  // 3-3
  // 00:13.80
  { time: 13.8, position: "a" },
  //{ time: 14.1, position: "s" },
  { time: 14.5, position: "a" },
  //{ time: 14.8, position: "d" },
  // 3-4
  // 00:15.17
  { time: 15.17, position: "a" },
  //{ time: 15.57, position: "s" },
  { time: 15.87, position: "a" },
  //{ time: 16.17, position: "d" },

  // Day6_onepage_4.png
  // 4-1
  // 00:16.57
  { time: 16.57, position: "a" },
  //{ time: 16.87, position: "s" },
  { time: 17.17, position: "a" },
  //{ time: 17.57, position: "d" },
  // 4-2
  // 00:17.98
  { time: 17.98, position: "a" },
  //{ time: 18.38, position: "s" },
  { time: 18.68, position: "a" },
  //{ time: 18.98, position: "d" },
  // 4-3
  // 00:19.29
  { time: 19.29, position: "a" },
  //{ time: 19.69, position: "s" },
  { time: 19.99, position: "a" },
  //{ time: 20.39, position: "d" },
  // 4-4
  // 00:20.69
  { time: 20.69, position: "a" },
  //{ time: 20.99, position: "s" },
  { time: 21.39, position: "a" },
  //{ time: 21.69, position: "d" },

  // Day6_onepage_5.png
  // 5-1
  // 00:22.08
  { time: 22.08, position: "a" },
  //{ time: 22.48, position: "s" },
  { time: 22.78, position: "s" },
  //{ time: 23.08, position: "s" },
  // 5-2
  // 00:23.40
  { time: 23.4, position: "a" },
  //{ time: 23.8, position: "s" },
  { time: 24.2, position: "a" },
  //{ time: 24.5, position: "s" },
  // 5-3
  // 00:24.88
  { time: 24.88, position: "a" },
  //{ time: 25.28, position: "s" },
  { time: 25.58, position: "a" },
  //{ time: 25.98, position: "s" },
  // 5-4
  // 00:26.22
  { time: 26.22, position: "a" },
  //{ time: 26.52, position: "s" },
  { time: 26.82, position: "a" },
  //{ time: 27.12, position: "s" },

  // Day6_onepage_6.png
  // 6-1
  // 00:27.52
  { time: 27.52, position: "a" },
  //{ time: 27.82, position: "s" },
  { time: 28.12, position: "a" },
  //{ time: 28.52, position: "s" },
  // 6-2
  // 00:28.95
  { time: 28.95, position: "a" },
  //{ time: 28.25, position: "s" },
  { time: 28.55, position: "a" },
  //{ time: 28.85, position: "s" },
  // 6-3
  // 00:30.26
  { time: 30.26, position: "a" },
  //{ time: 30.56, position: "s" },
  { time: 30.86, position: "a" },
  //{ time: 31.26, position: "s" },
  // 6-4
  // 00:31.64
  { time: 31.64, position: "a" },
  //{ time: 31.94, position: "d" },
  { time: 32.34, position: "s" },
  //{ time: 32.64, position: "s" },

  // Day6_onepage_7.png
  // 7-1
  // 00:33.03
  { time: 33.03, position: "s" },
  //{ time: 33.33, position: "a" },
  { time: 33.63, position: "s" },
  //{ time: 34.03, position: "s" },
  // 7-2
  // 00:34.32
  { time: 34.32, position: "a" },
  //{ time: 34.62, position: "s" },
  { time: 34.92, position: "a" },
  //{ time: 35.32, position: "d" },
  // 7-3
  // 00:35.71
  { time: 35.71, position: "a" },
  //{ time: 36.11, position: "s" },
  { time: 36.41, position: "a" },
  //{ time: 36.71, position: "d" },
  // 7-4
  // 00:37.13
  { time: 37.13, position: "a" },
  //{ time: 37.43, position: "s" },
  { time: 37.73, position: "a" },
  //{ time: 38.03, position: "d" },

  // Day6_onepage_8.png
  // 8-1
  // 00:38.39
  { time: 38.39, position: "a" },
  //{ time: 38.69, position: "s" },
  { time: 39.09, position: "a" },
  //{ time: 39.49, position: "d" },
  // 8-2
  // 00:39.80
  { time: 39.8, position: "a" },
  //{ time: 40.2, position: "s" },
  { time: 40.5, position: "a" },
  //{ time: 40.8, position: "s" },
  // 8-3
  // 00:41.20
  { time: 41.2, position: "a" },
  //{ time: 41.5, position: "s" },
  { time: 41.8, position: "a" },
  //{ time: 42.1, position: "s" },
  // 8-4
  // 00:42.50
  { time: 42.5, position: "a" },
  //{ time: 42.8, position: "s" },
  { time: 43.1, position: "a" },
  //{ time: 43.5, position: "s" },

  // Day6_onepage_9.png
  // 9-1
  // 00:43.89
  { time: 43.89, position: "a" },
  //{ time: 44.29, position: "s" },
  { time: 44.59, position: "s" },
  //{ time: 44.89, position: "s" },
  // 9-2
  // 00:45.27
  { time: 45.27, position: "a" },
  //{ time: 45.57, position: "s" },
  { time: 45.87, position: "s" },
  //{ time: 46.27, position: "s" },
  // 9-3
  // 00:46.67
  { time: 46.67, position: "a" },
  //{ time: 47.07, position: "s" },
  { time: 47.37, position: "s" },
  //{ time: 47.67, position: "s" },
  // 9-4
  // 00:48.03
  { time: 48.03, position: "a" },
  //{ time: 48.33, position: "s" },
  { time: 48.63, position: "s" },
  //{ time: 49.03, position: "s" },

  // Day6_onepage_10.png
  // 10-1
  // 00:49.48
  { time: 49.48, position: "a" },
  //{ time: 49.88, position: "s" },
  { time: 50.28, position: "s" },
  //{ time: 50.58, position: "s" },
  // 10-2
  // 00:50.85
  { time: 50.85, position: "a" },
  //{ time: 51.15, position: "s" },
  { time: 51.45, position: "s" },
  //{ time: 51.85, position: "s" },
  // 10-3
  // 00:52.22
  { time: 52.22, position: "a" },
  //{ time: 52.52, position: "s" },
  { time: 52.82, position: "a" },
  //{ time: 53.22, position: "s" },
  // 10-4
  // 00:53.55
  { time: 53.55, position: "a" },
  //{ time: 53.85, position: "s" },
  { time: 54.15, position: "a" },
  //{ time: 54.55, position: "s" },

  // Day6_onepage_11.png
  // 11-1
  // 00:54.91
  { time: 54.91, position: "s" },
  //{ time: 55.21, position: "s" },
  { time: 55.61, position: "s" },
  // 11-2
  // 00:56.33
  { time: 56.33, position: "a" },
  //{ time: 56.63, position: "s" },
  { time: 56.93, position: "s" },
  //{ time: 57.33, position: "s" },
  // 11-3
  // 00:57.71
  { time: 57.71, position: "s" },
  //{ time: 58.01, position: "a" },
  { time: 58.31, position: "s" },
  //{ time: 58.61, position: "a" },
  // 11-4
  // 00:59.01
  { time: 59.01, position: "s" },
  //{ time: 59.31, position: "a" },
  { time: 59.61, position: "s" },
  //{ time: 59.01, position: "a" },

  // Day6_onepage_12.png
  // 12-1
  // 01:00.36
  { time: 60.36, position: "s" },
  //{ time: 60.66, position: "a" },
  { time: 60.96, position: "s" },
  //{ time: 60.36, position: "a" },
  // 12-2
  // 01:01.75
  { time: 61.75, position: "s" },
  //{ time: 62.05, position: "a" },
  { time: 62.35, position: "s" },
  //{ time: 62.65, position: "a" },
  // 12-3
  // 01:03.09
  { time: 63.09, position: "s" },
  //{ time: 63.39, position: "a" },
  { time: 63.79, position: "s" },
  //{ time: 64.09, position: "a" },
  // 12-4
  // 01:04.46
  { time: 64.46, position: "s" },
  //{ time: 64.76, position: "a" },
  { time: 65.06, position: "s" },
  //{ time: 65.46, position: "a" },

  // Day6_onepage_13.png
  // 13-1
  // 01:05.84
  { time: 65.84, position: "s" },
  //{ time: 66.14, position: "a" },
  { time: 66.54, position: "s" },
  //{ time: 66.84, position: "a" },
  // 13-2
  // 01:07.22
  { time: 67.22, position: "a" },
  //{ time: 67.52, position: "s" },
  { time: 67.82, position: "s" },
  //{ time: 68.22, position: "s" },
  // 13-3
  // 01:08.61
  { time: 68.61, position: "a" },
  //{ time: 68.91, position: "s" },
  { time: 69.31, position: "a" },
  //{ time: 69.61, position: "s" },
  // 13-4
  // 01:09.96
  { time: 69.96, position: "a" },
  //{ time: 70.36, position: "s" },
  { time: 70.76, position: "a" },
  //{ time: 71.06, position: "s" },

  // Day6_onepage_14.png
  // 14-1
  // 01:11.31
  { time: 71.31, position: "a" },
  //{ time: 71.61, position: "s" },
  { time: 71.91, position: "a" },
  //{ time: 72.31, position: "s" },
  // 14-2
  // 01:12.78
  { time: 72.78, position: "a" },
  //{ time: 73.08, position: "s" },
  { time: 73.38, position: "a" },
  //{ time: 73.78, position: "s" },
  // 14-3
  // 01:14.05
  { time: 74.05, position: "a" },
  //{ time: 74.35, position: "s" },
  { time: 74.75, position: "a" },
  //{ time: 75.15, position: "s" },
  // 14-4
  // 01:15.53
  { time: 75.53, position: "a" },
  //{ time: 75.83, position: "s" },
  { time: 76.13, position: "a" },
  //{ time: 76.53, position: "s" },

  // Day6_onepage_15.png
  // 15-1
  // 01:16.90
  { time: 76.9, position: "a" },
  //{ time: 77.2, position: "s" },
  { time: 77.5, position: "a" },
  //{ time: 77.9, position: "s" },
  // 15-2
  // 01:18.27
  { time: 78.27, position: "a" },
  //{ time: 78.57, position: "s" },
  { time: 78.87, position: "a" },
  //{ time: 79.27, position: "s" },
  // 15-3
  // 01:19.56
  { time: 79.56, position: "a" },
  //{ time: 79.96, position: "s" },
  { time: 79.36, position: "a" },
  //{ time: 79.66, position: "s" },
  // 01:21.02
  // 15-4
  { time: 81.02, position: "a" },
  //{ time: 81.32, position: "s" },
  { time: 81.62, position: "s" },
  //{ time: 81.92, position: "s" },

  // Day6_onepage_16.png
  // 16-1
  // 01:22.31
  { time: 82.31, position: "a" },
  { time: 82.61, position: "s" },
  { time: 82.91, position: "a" },
  { time: 83.31, position: "s" },
  // 16-2
  // 01:23.71
  { time: 83.71, position: "a" },
  { time: 84.01, position: "s" },
  { time: 84.31, position: "a" },
  { time: 84.71, position: "s" },
  // 16-3
  // 01:25.02
  { time: 85.02, position: "a" },
  //{ time: 85.32, position: "s" },
  { time: 85.62, position: "a" },
  //{ time: 86.02, position: "s" },
  // 16-4
  // 01:26.44
  { time: 86.44, position: "a" },
  //{ time: 86.84, position: "s" },
  { time: 87.24, position: "a" },
  //{ time: 87.54, position: "s" },

  // Day6_onepage_17.png
  // 17-1
  // 01:27.82
  { time: 87.82, position: "a" },
  //{ time: 88.12, position: "s" },
  { time: 88.52, position: "a" },
  //{ time: 88.82, position: "d" },
  // 17-2
  // 01:29.15
  { time: 89.15, position: "a" },
  //{ time: 89.45, position: "s" },
  { time: 89.75, position: "a" },
  //{ time: 90.05, position: "d" },
  // 17-3
  // 01:30.47
  { time: 90.47, position: "a" },
  //{ time: 90.87, position: "s" },
  { time: 90.17, position: "a" },
  //{ time: 90.47, position: "d" },
  // 17-4
  // 01:31.89
  { time: 90.89, position: "a" },
  //{ time: 91.19, position: "s" },
  { time: 91.49, position: "s" },
  //{ time: 91.89, position: "s" },
];

// 채보 데이터를 외부로 내보내기
export default onepageNotes;
