import React from 'react';

// K 번째 수

const KthNumber = () => {
  function solution(array, commands) {
    let answer = []
    const fnc = (arr,arr2) => {
      let copyArr = []
      if(arr2[0] === arr2[1]){
        copyArr.push(arr[arr2[0]-1])
      }else{
        copyArr = arr.slice(arr2[0]-1,arr2[1]);
        copyArr = copyArr.sort((a,b) => a-b)
      }

      return copyArr.length === 1 ? copyArr[0] : copyArr[arr2[2]-1]
    }
    commands.map((v) => answer.push(fnc(array,v)))
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default KthNumber;
