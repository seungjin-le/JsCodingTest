import React from 'react';

// 김서방 찾기

const FindKimSeobang = () => {
  const solution = (seoul) => {
    var answer = '';
    seoul.map((v,i) => {
      if(v==='Kim'){
        answer = `김서방은 ${i}에 있다`
      }
    })
    return answer;
  }
  return (
    <div>
      
    </div>
  );
};

export default FindKimSeobang;
