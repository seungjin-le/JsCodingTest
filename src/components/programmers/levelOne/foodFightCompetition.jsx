import React from 'react';

// 푸드 파이트 대회

const FoodFightCompetition = () => {
  const solution = (food) => {
    let answer = '';
    // 배열 food를 순회하며서 요소가 홀수이고 0이 아니라면 요소를 -1 해주고
    // 요소가 0이라면 그대로 반환
    food = food.map((v, i) =>
      i === 0 ? v : v % 2 === 0 && v !== 0 ? v : v - 1
    );
    // 배열을 선언하면서 배열 food를 순회
    answer += Array.from(food, (x, i) => {
      // 배열을 선언하고 배열의 길이는 [ food의 요소 / 2 ]이고 값으 해당 요소의 인덱스 값
      // ex ) food = [ 2,6,8 ]
      // return [0,1,1,1,2,2,2,2]
      return Array.from({ length: x / 2 }, () => i);
    }) // 이렇게 바환된 값은 이차원 배열이며 이 배열을 문자열로 치환하기 위해 비열을 순회
      // [[],[1,1,1],[2,2,2,2]]
      .map((v) => {
        // 이차원 배열을 문자열로 치환
        // ex) ,111,2222
        return v.join('');
      })
      // 문자열을 다시 join해서 쉼표 제거
      // ex 1112222
      .join('');
    // 문자열 + '0' + 뒤집은 문자열을 리턴
    return answer + '0' + answer.split('').reverse().join('');
  };
  return <div></div>;
};

export default FoodFightCompetition;
