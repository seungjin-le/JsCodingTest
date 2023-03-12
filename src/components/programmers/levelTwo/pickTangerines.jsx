import React from 'react';

// 귤 고르기

const PickTangerines = () => {
  const solution = (k, tangerine) => {
    // 상자에 담을 최소한의 귤 크기 갯수를 를 담을 변수
    let answer = 0;
    // 귤의 크기마다 가지고 있는 개수를 담을 배열
    let arr = [];
    // 귤의 크기가 담긴 배열에서 중복을 제거
    const set = [...new Set(tangerine)];
    // 귤의 크기마다 가지고 있는 갯수를 를 구분할 객체
    const obj = {};
    // 만약 상자에 담을 굴의 개수(k) 가 귤의 총개수(tangerine) 와 같다면 중복을 제거한 귤의 크기 배열의 길이를 리턴
    if (k === tangerine.length) return set.length;

    // 귤의 크기가 담긴 배열 tangerine 순회
    tangerine.map((v) => {
      // obj에 v라는 크기가 있다면 obj[귤의 크기] + 1, 없다면 obj[귤의 크기] = 1
      obj.hasOwnProperty(v) ? obj[v]++ : (obj[v] = 1);
    });
    // 귤의 크기 종류를 담은 배열 set 순회
    // arr에 크기마다 가지고 있는 개수를 추가
    set.map((v) => arr.push(obj[v]));
    // 귤의 크기마다 가지고있는 개수를 내림차순으로 정렬
    arr = arr.sort((a, b) => b - a);

    // arr의 길이만큼 반복문 실행
    for (let a = 0, b = 0; a < arr.length; a++) {
      // 변수 b에 귤에 갯수를 더해줍니다.
      b += arr[a];
      // (a + 1) = 상자에 담을 귤의 종류
      answer = a + 1;
      // 만약 b가 상자에 담을 귤에 개수(k)와 같거나 그보다 크다면 answer 리턴
      if (b >= k) return answer;
    }
    return answer;
  };

  return <div></div>;
};

export default PickTangerines;
