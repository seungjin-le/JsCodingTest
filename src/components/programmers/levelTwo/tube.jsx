import React from 'react';

// 튜플

const Tube = () => {
  // 비효율적
  const solution = (s) => {
    // s = "{{4,2,3},{3},{2,3,4,1},{2,3}}"

    let answer = [];
    // 문자열 s를 }, 를 기준으로 잘라 배열로 만들어 줍니다.
    s.split('},') // [ '{{4,2,3', '{3', '{2,3,4,1', '{2,3}}' ]
      // 배열로 만든 다음 replace를 이용해 중괄호를 제거해줍니다.
      .map((v) => v.replace(/{|}/g, '')) // [ '4,2,3', '3', '2,3,4,1', '2,3' ]
      // 중괄호를 제거한 다음 split를 이용해 ,(콤마)를 기준으로 나눠 배열로 만들어 줍니다.
      .map((v) =>
        v
          .split(',') // [ [ '4', '2', '3' ], [ '3' ], [ '2', '3', '4', '1' ], [ '2', '3' ] ]
          // 이제 이차원 배열을 순회하면서 원소들을 숫자로 변환
          .map((value) => parseInt(value))
      ) // [ [ 4, 2, 3 ], [ 3 ], [ 2, 3, 4, 1 ], [ 2, 3 ] ]
      // 숫자로 변환된 이차원 배열을 배열의 길이가 짧은순으로 정렬
      .sort((a, b) => a.length - b.length)
      // 정렬이 끝난후 다시 순회하면서 배열의 길이가 1이라면 answer에 push
      .map((v) => {
        if (v.length === 1) {
          answer.push(v[0]);
        } else {
          // 배열의 길이가 1이 아니라면 filter함수를 이용해
          // 이차원 배열안에 값이 answer안에 있다면 제거해주고
          // 나머지만 answer에 push
          answer.push(...v.filter((value) => !answer.includes(value)));
        }
      });
    return answer;
  };
  // 그나마 효율적인 코드
  const solution2 = (s) => {
    let answer = [];
    JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'))
      .sort((a, b) => a.length - b.length)
      .map((v) => {
        if (v.length === 1) {
          answer.push(v[0]);
        } else {
          answer.push(...v.filter((value) => !answer.includes(value)));
        }
      });
    return answer;
  };

  return <div></div>;
};

export default Tube;
