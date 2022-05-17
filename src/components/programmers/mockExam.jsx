import React from 'react';

// 모의고사

const MockExam = () => {
  const solution = (answers) => {
    // 1,2,3 번의 학생이 맞춘 횟수를 카운터
    let answer = [0,0,0];
    /// 1,2,3 번의 찍기 패턴
    let one = [1,2,3,4,5]
    let two = [2,1,2,3,2,4,2,5]
    let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    // 1,2,3 번중 한사람이라도 찍는 패턴의 길이가 문재의 길이보다 적을시 같은배열을 뒤에 더해주는 반복문
    while(answers.length > one.length ||
      answers.length > two.length ||
      answers.length > three.length
      ){
      if(answers.length > one.length){
        one.push(...one)
      }
      if(answers.length > two.length){
        two.push(...two)
      }
      if(answers.length > three.length){
        three.push(...three)
      }
    }
    // 문제 배열을 map함수를 이용해 1,2,3 번의 정답을 체크하고 정답이라면 ++answer
    answers.map((v,i) =>
      (
        v === one[i] && ++answer[0],
        v === two[i] && ++answer[1],
        v === three[i] && ++answer[2]
      ))
    // 가장 많이 맞춘 횟수 추출
    let maxNum = Math.max(...answer);
    // 1,2,3 번의 맞춘횟수를 카운트한 배열을 순회하며 가장많이 맞춘 횟수와 카운트의 원소 값이 같으면
    // index+1을 반환
    answer = answer.map((v,i) => v === maxNum && i+1)
    // && 조건부 연산자를 사용해서 answer 안에 false 가 있으니 filter 함수로 제거
    answer = answer.filter((v,i) => v);
    return answer;
  }
  return (
    <div>
      
    </div>
  );
};

export default MockExam;
