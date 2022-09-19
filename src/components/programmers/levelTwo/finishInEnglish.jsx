import React from 'react';

// 영어 끝말잇기

const FinishInEnglish = () => {
  const solution = (n, words) => {
    let answer = [0,0];
    let arr = [];
    for(let a = 0, b = 0; a < words.length; a++){
      const lastText = arr[arr.length-1] && arr[arr.length-1].slice(-1)
      if(a % n === 0) b++
      if(lastText && lastText !== words[a][0] || arr.includes(words[a])){
        answer[0] = arr.length % n + 1;
        answer[1] = b
        return answer
      }else{
        arr.push(words[a]);
      }
    }
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default FinishInEnglish;
