// 2 X N 타일링

const TwoNTiling = () => {
  const solution = (n) => {
    // 타일링 가짓수를 담은 배열
    let arr = [0, 1, 2];
    // n의 값이 3까지는 타일링을 배치할수 있는 가짓수도 같으므로 그대로 리턴
    if (n <= 3) return n;

    // 타일링의 가짓수는 피보나치 수열처럼 이전 값들을 더하면 됩니다,
    for (let a = 3; a <= n; a++) {
      // arr[1] => a-2, arr[2] = a-1
      // arr[1]에 이전값(a - 1)을 넣기 위해 미리 arr[0]에 arr[1]과 arr[2]를
      // 더한후 1,000,000,007을 나눈값으로 변경
      // ex ) a = 3, arr = [ 0, 1, 2 ]
      arr[0] = (arr[1] + arr[2]) % (10 ** 9 + 7);
      // arr[1]을 a-2 값으로 변경
      arr[1] = arr[2];
      // arr[2]를 a-1 값으로 변경
      arr[2] = arr[0];
      // ex ) a = 3, arr = [ 3, 2, 3 ]
    }
    return arr[0];
  };
  // 0 -> 0
  // 1 = 0 + 1 -> 1
  // 2 = 1 + 1 -> 2
  // 3 = 1 + 2 -> 3
  // 4 = 2 + 3 -> 5
  // 5 = 3 + 5 -> 8
  // 6 = 5 + 8 -> 13
  // 7 = 8 + 13 -> 21
  // 8 = 13  + 21 -> 34
  // 9 = 21 + 34 -> 55
  // 10 = 34 + 55 -> 89
  // 11 = 55 + 89 -> 144
  // 12 = 89 + 144 -> 233
  // 13 = 144 + 233 -> 377
  return TwoNTiling;
};
export default TwoNTiling;