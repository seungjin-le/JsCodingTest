import React from 'react';

// 키패드 누르기

const KeypadPress = () => {
  function solution(numbers, hand) {
    const getDistance = (arr1, arr2) => {
      let result = Math.abs(arr1[0] - arr2[0]) + Math.abs(arr1[1] - arr2[1]);
      return result;
    }
    let answer = '';
    const left = [1,4,7]
    const right = [3,6,9]
    const keyPad = {
      1: [1,1], 2: [1,2], 3:[1,3],
      4: [2,1], 5: [2,2], 6:[2,3],
      7: [3,1], 8: [3,2], 9:[3,3],
      '*': [4,1], 0: [4,2], '#':[4,3]
    };
    let l = keyPad['*']
    let r = keyPad['#']
    for(let x = 0; x < numbers.length; x++){
      let numLocation = keyPad[numbers[x]]
      let fncL = getDistance(l, numLocation);
      let fncR = getDistance(r, numLocation);

      if (left.includes(numbers[x])){
        answer += 'L'
        l = numLocation
      }else if(right.includes(numbers[x])){
        answer += 'R';
        r = numLocation
      }else{
        if(fncL === fncR ){
          if(hand === "left"){
            l = numLocation;
            answer += 'L';
          }else{
            r = numLocation;
            answer += 'R';
          }
        }else if(fncL < fncR){
          l = numLocation;
          answer += 'L'
        }else{
          r = numLocation;
          answer += 'R';
        }
      }
    }
    return answer;
  }

  return (
    <div>

    </div>
  );
};

export default KeypadPress;
