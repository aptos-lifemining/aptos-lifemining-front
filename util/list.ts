export const division = (list: any[], n: number) => {
  const length = list.length;
  const divide = Math.floor(length / n) + (Math.floor(length % n) > 0 ? 1 : 0);
  const newArray = [];

  for (let i = 0; i <= divide; i++) {
    // 배열 0부터 n개씩 잘라 새 배열에 넣기
    newArray.push(list.splice(0, n));
  }

  return newArray;
};
