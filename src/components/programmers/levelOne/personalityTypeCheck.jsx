import React from "react";

const PersonalityTypeCheck = () => {
  const solution = (survey, choices) => {
    // 성격 유형을 담을 빈 문자열
    let answer = "";
    // 점수를 담을 성격 유형
    let obj = {
      R: 0,
      T: 0,
      C: 0,
      F: 0,
      J: 0,
      M: 0,
      A: 0,
      N: 0,
    };
    choices.map((v, i) => {
      // RT, CF ... 순서가 다를수 있으니 모르겠음( 4 )와 같으면 null 4보다 크면 RT(예시) 의 뒷자리 작으면 앞자리에 점수를 더해줍니다.
      if (v !== 4) {
        if (v < 4) {
          obj[survey[i][0]] += 4 - v;
        } else {
          obj[survey[i][1]] += v - 4;
        }
      }
    });
    // 점수 계산이 끝나면 성격 유형 지표 1번부터 비교
    answer += obj.R < obj.T ? "T" : "R";
    answer += obj.C < obj.F ? "F" : "C";
    answer += obj.J < obj.M ? "M" : "J";
    answer += obj.A < obj.N ? "N" : "A";
    return answer;
  };
  return <div></div>;
};

export default PersonalityTypeCheck;
