import React from 'react';

// 음양더하기

const AddYinAndYang = () => {
  const solution=(absolutes, signs)=> {
    let answer = 0;
    // absolutes 를 map 함수를 이용해 순회 하면서 i(index)를 이용해 signs[i]가 true 면 answer 에 v를 더하고 false 면 v를 뺍니다.
    absolutes.map((v,i) => signs[i] ? answer+=v : answer-=v);
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default AddYinAndYang;
