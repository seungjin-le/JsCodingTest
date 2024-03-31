import React from 'react';

// 과제 진행하기

const TaskProgress = () => {
  const solution = (plans) => {
    var answer = [];
    let hash = {};
    let obj = {};
    const getMin = (date) => {
      const min = date.split(':');
      return +min[0] * 60 + +min[1];
    };
    plans.map((v) => (obj[getMin(v[1])] = [v[0], +v[2]]));
    console.log(obj, 'obj');

    // plans를 순회하며 hash에 {시작시간:[과제시간,과목명]}으로 삽입.
    // 시작시간의 경우 분으로 단위를 통합.
    plans.forEach((el) => {
      el[1] = convertTime(el[1]);
      el[2] = Number(el[2]);
      hash[el[1]] = [el[2], el[0]];
    });
    console.log(hash);
    // 시작시간기준으로 오름차순 정렬
    plans.sort((a, b) => a[1] - b[1]);

    // 시작시간부터 1분씩 증가하는 반복문시작.
    let startTime = plans[0][1];
    let stack = [];
    let finish = 0; // 과제를 마친 과목의 갯수를 카운팅하는 변수
    while (finish < plans.length) {
      // 과제를 다할떄까지 반복.

      // stack에 top인 요소의 과제시간을 1분씩 깎는다.
      // 과제시간이 0분이 된 경우 정답에 추가하고 stack.pop() , finish++
      if (stack.length) {
        stack[stack.length - 1][0]--;
        if (stack[stack.length - 1][0] === 0) {
          answer.push(stack[stack.length - 1][1]);
          stack.pop();
          finish++;
        }
      }

      // 과제 시작시간인 과목이 있을경우 스택에 [과제시간,과목명]추가.
      if (hash[startTime]) stack.push(hash[startTime]);
      startTime++;
    }

    // 분으로 통합하는 함수
    function convertTime(str) {
      let [h, m] = str.split(':').map(Number);
      return h * 60 + m;
    }

    return answer;
  };
  return <div></div>;
};

export default TaskProgress;

// while(plans.length > 0 || plans.length <= answer.length){
//   console.log(plans[count])
//   if(!plans[count + 1]) return [...answer,...plans.reverse().map((v) => v[0])]
//   let value = plans[count][1] + plans[count][2]
//   let nextValue = plans[count+1][1]
//   value <= nextValue ?
//     answer.push(plans.splice(count,1)[0][0]) :
//     count++
//
// }
//
