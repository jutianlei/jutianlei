/**
 * 时间转换
 */
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

/**
 * @returns 生成随机数
 */
const randomMode = (length: number) => {
  const min = 0; // 最小值
  const max = length - 1; // 最大值
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min; // 生成随机数
  console.log(randomNum);
  return randomNum;
};

/**
 *
 * @returns 列表循环播放
 */
const listMode = (length: number, index: number) => {
  const nextIndex = index + 1;
  if (nextIndex === length) {
    return 0;
  }
  return nextIndex;
};

/**
 * @returns 顺序模式
 */
const orderMode = (length: number, index: number) => {
  const nextIndex = index + 1;
  if (nextIndex === length) {
    return 0;
  }
  return nextIndex;
};
export { formatTime, randomMode, listMode };
