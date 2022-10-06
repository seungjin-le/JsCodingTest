import React from 'react';

// [3차] 파일명 정렬

const SortFileNames = () => {
  const solution = (files) => {
    // 정규식을 이용.
    // d+는 숫자로 된 문자 1개 이상인 문자열을 의미하고 g는 모든 패턴을 찾으라는 의미
    const regex = /\d+/g;
    // files를 정렬하기 위해 sort함수를 사용
    files.sort((a, b) => {
      // match함수를 이용해 길이가 1이상으로 이루어진 숫자를 배열로 반환고
      // 반환받은 배열의 0번째 요소만 변수에 할당;
      // 예) '123qwe456' => ['123', '456']
      let [matchA, matchB] = [a.match(regex)[0], b.match(regex)[0]];
      // 첫번째 숫자 앞자리는 head이니 문자열의 0번째 인덱스부터
      // matchA, matchB 가 있는 인덱스까지 자르고 소문자로 치환
      const [headA, headB] = [
        a.slice(0, a.indexOf(matchA)).toLowerCase(),
        b.slice(0, b.indexOf(matchB)).toLowerCase(),
      ];
      // matchA, matchB를 숫자형으로 형변환;
      [matchA, matchB] = [+matchA, +matchB];
      // 문제의 요구대로 head부터 비교
      // headA 보다 headB가 크다면 -1
      return headA < headB
        ? -1
        : // headA 가 headB보다 크다면 1
        headA > headB
        ? 1
        : // 위에 두조건문에 부합하지 않다면 둘은 같다는거니 head뒤에 숫자를 비교
        // matchA 보다 matchB가 크다면 -1
        matchA < matchB
        ? -1
        : // matchA 가 matchB모다 크다면 1
        matchA > matchB
        ? 1
        : // 앞에 4가지 조건을 모두 통과하면 그대로 리턴
          0;
    });
    return files;
  };
  return <div></div>;
};

export default SortFileNames;
