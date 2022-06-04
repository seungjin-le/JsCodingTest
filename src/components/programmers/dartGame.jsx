import React from 'react';

// 다트 게임

const DartGame = () => {
  const solution = (dartResult) => {
    let answer = 0;
    let score = []
    let arr = dartResult.split('')
    arr.map((v,i) => {
      if(+v){
        if(+v+arr[i+1] === '10'){
          if(arr[i+2] === 'S'){
            score.push(Math.pow(+v+arr[i+1],1))
          }else if(arr[i+2] === 'D'){
            score.push(Math.pow(+v+arr[i+1],2))
          }else if(arr[i+2] === 'T'){
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
        if(v === '#' || v === '*'){
          if(score.length === 1){
            v === '*' ? score[0] = score[0]*2 : score[0] = Number(-score[0])
          }else if(score.length === 2){
            v === '*' ? (score[0] = score[0]*2,score[1] = score[1]*2) : score[1] = Number(-score[1])
          }else if(score.length === 3){
            v === '*' ? (score[1] = score[1]*2,score[2] = score[2]*2) : score[2] = Number(-score[2])
          }
        }
      }
    })
    answer = score.reduce((prev, curr) => prev + curr);

    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default DartGame;
