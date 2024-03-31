import React from 'react';

// [1차] 캐시

const Cash = () => {
  const solution = (cacheSize, cities) => {
    // cacheSize가 0일경우 cache hit이 나올수가 없으니 5 * (배열의 길이)를 리턴
    if (cacheSize === 0) return 5 * cities.length;
    // 실행시간 카운트하는 변수
    let answer = 0;
    // cacheSize만큼의 길이를 가진 배열 생성
    let arr = new Array(cacheSize).fill('');
    // 도시 이름이 담긴 배열 cities를 순회
    cities.map((v) => {
      // 같은 도시라도 대문자, 소문자가 다르게 구성된 값이 존재하므로 평등하게 전부 소문자로 치환
      const lowCase = v.toLowerCase();
      // arr안에 소문자로 치환된 도시 이름이 존재할경우
      if (arr.includes(lowCase)) {
        // arr안에 있는 도시를 삭제
        arr.splice(arr.indexOf(lowCase), 1);
        // arr의 첫번째 요소로 소문자로 치환된 도시이름 추가
        arr.unshift(lowCase);
        // arr안에 도시이름이 존재하니 cache hit이므로 answer + 1
        answer++;
      } else {
        // arr안에 도시 이름이 없을경우
        // arr의 마지막 요소 삭제
        arr.pop();
        // arr의 첫번째 요소로 소문자로 치환된 도시이름 추가
        arr.unshift(lowCase);
        // arr안에 도시이름이 없으니 cache miss이므로 answer + 5
        answer += 5;
      }
    });

    return answer;
  };
  return <div></div>;
};

export default Cash;
