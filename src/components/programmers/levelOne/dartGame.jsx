import React from 'react';

// 다트 게임

const DartGame = () => {
  const solution = (dartResult) => {
    let answer = 0;
    // 점수를 담을 배열
    let score = []
    // dartResult 한글자씩 잘라서 담을 새로운 배열.
    let arr = dartResult.split('')
    arr.map((v,i) => {
      if(+v){
        // v 가 1일경우 v 가 10일수도 있으니 arr[i+1]로 10인지 확인
        if(+v+arr[i+1] === '10'){
          if(arr[i+2] === 'S'){
            // arr[i+2]가 S 면 Math.pow 메소드로 1을 제곱후 score 에 push
            score.push(Math.pow(+v+arr[i+1],1))
          }else if(arr[i+2] === 'D'){
            // arr[i+2]가 S 면 Math.pow 메소드로 2을 제곱후 score 에 push
            score.push(Math.pow(+v+arr[i+1],2))
          }else if(arr[i+2] === 'T'){
            // arr[i+2]가 S 면 Math.pow 메소드로 3을 제곱후 score 에 push
            score.push(Math.pow(+v+arr[i+1],3))
          }
        }else{
          if(arr[i+1] === 'S'){
            score.push(Math.pow(+v,1))
          }else if(arr[i+1] === 'D'){
            score.push(Math.pow(+v,2))
          }else if(arr[i+1] === 'T'){
            score.push(Math.pow(+v,3))
          }
        }
      }else{
        +v === 0 && +arr[i-1] !== 1 && score.push(+v)
        // 스타상이나 야차상 일 경우 조건문 실행
        if(v === '#' || v === '*'){
          if(score.length === 1){
            // 위 조건문을 통과 했으니 v는 스타상이나 야차상 둘중 하나라는 것이니 *이면 score * 2 아닐경우 -로 치환
            v === '*' ? score[0] = score[0]*2 : score[0] = Number(-score[0])
          }else if(score.length === 2){
            v === '*' ? (score[0] = score[0]*2,score[1] = score[1]*2) : score[1] = Number(-score[1])
          }else if(score.length === 3){
            v === '*' ? (score[1] = score[1]*2,score[2] = score[2]*2) : score[2] = Number(-score[2])
          }
        }
      }
    })
    // reduce 함수로 배열의 값들을 전부 더해 answer 에 담아서 리턴
    answer = score.reduce((prev, curr) => prev + curr);

    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default DartGame;
