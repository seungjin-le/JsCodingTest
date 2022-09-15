import React from 'react';

// 올바른 괄호

const CorrectParenthesis = () => {
  const solution = (s) => {
    // 괄호 개수 체크 [ '(', ')' ]
    let check = [0,0]
    // 문자열 s의 길이만큼 만복
    for(let a = 0; a < s.length; a++){
      if(s[a] === '('){
        check[0]++
      }else if(s[a] === ')' && check[0] === check[1]){
        check[1] = -9
      }else{
        check[1]++
      }
    }
    return check[0] === check[1];
  }
  return (
    <div>

    </div>
  );
};

export default CorrectParenthesis;
