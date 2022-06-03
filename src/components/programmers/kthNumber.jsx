import React from 'react';

// K 번째 수

const KthNumber = () => {
  function solution(array, commands) {
    let answer = []
    // 여러번 반복을 해야하기 때문에 함수를 하나 생성.
    const fnc = (arr,arr2) => {
      // array 의 매개 변수인 arr 의 잘라낸 값을 담을 배열
      let copyArr = []
      // slice (4,4)는 빈 배열을 반환 하기 때문에 arr2[0] 과 arr2[1] 값이
      // 같으면 arr[arr2[0]] 번째 값을 copyArr 에 넣어줌
      if(arr2[0] === arr2[1]){
        // Array 의 index 는 0번 부터 시작이라 -1
        copyArr.push(arr[arr2[0]-1])
      }else{
        // arr 의 arr2[0]번째 부터 arr2[1]번째 까지 잘라서 copyArr 안에 넣어줌
        copyArr = arr.slice(arr2[0]-1,arr2[1]);
        // 작은순으로 정렬
        copyArr = copyArr.sort((a,b) => a-b)
      }
      // copyArr의 길이가 1이면 copyArr[0]리턴 1이 아니면 copyArr[arr2[2]-1]리턴
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
