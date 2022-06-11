import React from 'react';

// 시저 암호

const CaesarCipher = () => {
  const solution = (s, n) => {
    let answer = [];
    for(let a = 0; a < s.length; a++){
      answer[a] = s.charCodeAt(a)
    }
    answer = answer.map((v) => {
      if(v >= 65 && v <= 90){
        return v + n > 90 ? (v+n)-26 : v+n
      }else if(v >= 97 && v <= 122){
        return v + n > 122 ? (v+n)-26 : v+n
      }else{
        return v
      }
    })
    answer = answer.map((v) => String.fromCharCode(v))
    return answer.join('');
  }
  return (
    <div>

    </div>
  );
};

export default CaesarCipher;
