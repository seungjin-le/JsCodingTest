import React from 'react';

// 올바른 괄호

const CorrectParenthesis = () => {
  const solution = (s) => {
    // 괄호 개수 체크 [ '(', ')' ]
    let check = [0,0]
    // 문자열 s의 길이만큼 만복
    for(let a = 0; a < s.length; a++){
      // s의 a 번째 문자가 ' ( '일 경우 check[0] + 1
      if(s[a] === '('){
        check[0]++
      // s의 a 번째 문자가 ' ) '일 경우 check[0] 과 check[1]의 값이 같으면
      // false를 리턴하기 위해 check[1] = -9
      }else if(s[a] === ')' && check[0] === check[1]){
        check[1] = -9
      // else if의 조건에 맞지 않다면 check[1] + 1
      }else{
        check[1]++
      }
    }
    // check[0] 과 check[1]의 값이 같다며 true를 리턴 아니라면 false를 리턴
    return check[0] === check[1];
  }
  return (
    <div>

    </div>
  );
};

export default CorrectParenthesis;
