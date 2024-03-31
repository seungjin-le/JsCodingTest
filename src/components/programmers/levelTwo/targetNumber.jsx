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
//if(!next){
//             if(arr[0][0] <= life){
//               life -= arr[0][1]
//               count++
//               arr.splice(0,1);
//             }else if(arr[0][0] > life){
//               arr.splice(0,1);
//             }
//         }else{
//           arr.push(...arr.splice(0,1));
//         }
