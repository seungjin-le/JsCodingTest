import React from "react";

const FailureRate = () => {
  function solution(N, stages) {
    let obj = [];
    let arr = [];
    let answer = [];
    Math.max(...stages) > N ? (N = Math.max(...stages) - 1) : N;
    for (let a = 0; a <= N; a++) {
      obj[a] = { count: 0, users: 0, percent: 0, stages: a };
    }
    obj[0].users = stages.length;
    for (let a = 1; a <= N; a++) {
      stages.map((v, i) => v === a && obj[a].count++);
      obj[a].users = obj[a - 1].users - obj[a].count;
      obj[a].percent = (obj[a].count / obj[a - 1].users) * 100;
      arr[a - 1] = isNaN(obj[a].percent) ? 0 : obj[a].percent;
    }

    arr = arr.filter((v) => v !== 0);
    for (let a = 0; a <= arr.length; a++) {
      console.log(a, arr.length);
      if (Math.max(...arr)) {
        answer[a] = Math.max(...arr);
        arr.splice(arr.indexOf(Math.max(...arr)), 1);
      }
    }
    answer.push(...arr);

    answer.map((v, i) =>
      obj.map(
        (value, index) =>
          answer[i] === value.percent &&
          ((answer[i] = value.stages), (value.percent = 0))
      )
    );

    stages = stages.filter((v) => v < N);
    stages.sort((a, b) => a - b);
    stages = [...new Set(stages)];
    obj.map((v) => answer.indexOf(v.stages) === -1 && answer.push(v.stages));
    answer = answer.filter((v) => v !== 0);
    console.log(answer);
    return answer;
  }
  return <div></div>;
};

export default FailureRate;
