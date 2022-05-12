import React from 'react';

// 음양더하기

const AddYinAndYang = () => {
  const solution=(absolutes, signs)=> {
    let answer = 0;
    absolutes.map((v,i) => signs[i] ? answer+=v : answer-=v);
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default AddYinAndYang;
