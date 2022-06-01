import React from 'react';

// 가장 작은 숫자 제거

const RemoveSmallestNumber = () => {
  const solution = (arr) => {
    // 배열 arr의 가장 작은 숫자 추출
    let x = Math.min(...arr)
    // arr의 길이가 1이면 [-1] 리턴
    if(arr.length === 1){
      return [-1]
    }else{
      // arr.indexOf(x)로 arr의 가장 작은 숫자가 있는 인덱스값 찾아 삭제 후 리턴
      arr.splice(arr.indexOf(x),1)
      return arr
    }
  }
  return (
    <div>

    </div>
  );
};

export default RemoveSmallestNumber;
