import React from 'react';

// 연속 부분 수열 합의 개수

const SeqPlusTheNumber = () => {
  const solution = (elements) => {
    // 수열을 추가할 배열
    const seqArr = [];
    // 반복문 실행 중 i + index가 elements의 길이를 넘어서면 elements의
    // 0번 인덱스부터 시작해야 하기 때문에 elements를 2개 붙여줍니다
    // ( i + index)의 최대 길이는 elements의 길이 * 2
    const arr = [...elements, ...elements];
    // 이중 반복문 실행
    elements.map((v, i) => {
      elements.map((valye, index) => {
        // 배열 arr의 index부터 index + i까지 배열을 자른 다음
        // reduce 함수를 통해 자른 배열 안에 값들을 전부 더해서 seqArr에 추가해 줍니다
        seqArr.push(
          arr.slice(index, index + i + 1).reduce((acc, v) => acc + v, 0)
        );
      });
    });
    // Set 함수로 seqArr의 중복을 제거 후 객체의 길이를 리턴
    return new Set(seqArr).size;
  };
  return <div></div>;
};

export default SeqPlusTheNumber;
