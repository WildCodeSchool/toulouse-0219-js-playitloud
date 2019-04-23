function convertTime(MS) {
  const minute = (MS / 60000).toFixed(0);
  const second = ((MS % 60000) / 1000).toFixed(0);
  return `${minute}min ${second}s`;
}

export default convertTime;
