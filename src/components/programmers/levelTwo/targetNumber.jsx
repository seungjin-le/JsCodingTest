import React from 'react';

// 타겟 넘버

const TargetNumber = () => {
  const solution = (numbers, target) => {
    let answer = 0;
    // 함수 counts에 매개변수가 주어지지 않았을 경우 기본값 0
    const counts = (count = 0, sum = 0) => {
      // count가 numbers의 길이와 같아졌을경우
      if (count === numbers.length) {
        // 반복해서 더하고 뺀sum가 target과 같을경우 answer + 1 한다음 함수 종료
        if (target === sum) {
          answer++;
        }
        return;
      }
      // count가 numbers의 길이와 다를 경우 sum 과 numbers[count]를
      // 더하거나 빼도록 2개의 함수 실행
      counts(count + 1, sum + numbers[count]);
      counts(count + 1, sum - numbers[count]);
    };

    counts();
    return answer;
  };
  return <div></div>;
};

export default TargetNumber;

//var answer = [];
//     for(let a = 0; a < n * n; a++){
//         if(n <= a){
//             if(answer[a % n] >= answer[Math.floor(a / n)]){
//                 answer[a] = answer[a % n];
//             }else{
//                 answer[a] = answer[Math.floor(a / n)]
//             }
//
//         }else{
//             answer[a] = a + 1;
//         }
//     }
