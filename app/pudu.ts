const repo = 'https://github.com/Doribelove/pudu_robot_ws';
const snapshot = `${repo}/blob/6a4405d5dbe64c498c3bb4e672600a7332ea1acb`;

// Both releases measured the same 100 map/query pairs over three rounds.
export const p6 = {
  version: '3YDL3-V13-P6',
  source: `${repo}/tree/main/3YDL3-V13-P6-delivery`,
  report: `${snapshot}/3YDL3-V13-P6-delivery/report/RESULTS.md`,
  figure: '/media/pudu-p6-static300.png',
  medianSeconds: 0.857,
  p95Seconds: 3.674,
  medianPeakMiB: 844.25,
};

export const r3 = {
  version: 'V11-r3',
  report: `${snapshot}/research/3ydl3_v11_r3/report/RESULTS.md`,
  medianSeconds: 0.816,
  p95Seconds: 3.657,
  medianPeakMiB: 990.39,
};

export const peakMemoryReduction = (
  100 * (1 - p6.medianPeakMiB / r3.medianPeakMiB)
).toFixed(1);
