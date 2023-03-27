import React from "react";

// 2개 이하로 다른 비트

const NoMoreThanTwoDifferentBits = () => {
  const solution = (numbers) => {
    // ex ) numbers = [ 2, 7 ]
    return numbers.map((v) => {
      // numbers의 요소인 v를 2진수로 만들고 배열로 치환한 뒤 배열을 뒤집고 가장 가까운 "0"의 index를 찾습니다
      // ex) 2 => "10" => [ "1", "0" ] => [ "0", "1" ] => 0 = 가장 가까운 0의 Index
      let toStr = v.toString(2).split('').reverse().indexOf('0')

      // indexOf 함수로 "0"을 찾을 수 없다면 -1이기 때문에 2진수로 치환한 문자열의 길이 - 1값을
      // 2에 거듭제곱해 준 후 10진수인 v( 7 )에 더해줍니다
      // ex ) 7 = "111" => "111".length = 3 => 2 ** (3 - 1) = 4 => v( 7 ) + 4 = 11
      if (toStr === -1) return v + 2 ** (v.toString(2).length - 1)

      // 0의 index를 - 1 해준 값을 2에 거듭제곱을 해주고 올림 함수를 이용해 올림 해주고
      // 10진수인 v( 2 )에 더해줍니다
      return v + Math.ceil(2 ** (toStr - 1))
    });
  }
  return;
}

export default NoMoreThanTwoDifferentBits;

// 1, 2, 4, 8, 16


// 1 = 0001
// 2 = 0010
// 3 = 0011
// 4 = 0100
// 5 = 0101
// 6 = 0110
// 7 = 0111
// 8 = 1000
// 9 = 1001
// 10 = 1010
// 11 = 1011
// 12 = 1100
// 13 = 1101
// 14 = 1110
// 15 = 1111
// 16 = 0001 0000

//