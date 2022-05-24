import React from 'react';

// 완주하지 못한 선수

const AthletesWhoDidNotFinish = () => {
  const solution = (participant, completion) => {
    // 효율성에서 떨어짐
    //completion.map((v) => participant.splice(participant.indexOf(v),1));
    //return participant[0];

    // 각 배열 정렬
    participant = participant.sort()
    completion = completion.sort()

    // 문제 설명중 participant 는 completion 보다 길이가 1길다고 함.
    // 각 배열을 정렬해서 서로 비교하다가 아니면 participant[a] 반환
    for(let a = 0; a < participant.length; a++){
      if(participant[a] !== completion[a]){
        return participant[a]
      }
    }
  }
  return (
    <div>
      
    </div>
  );
};

export default AthletesWhoDidNotFinish;
