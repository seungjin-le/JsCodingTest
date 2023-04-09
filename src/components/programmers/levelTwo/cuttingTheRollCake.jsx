import React from 'react';

// 롤케이크 자르기

const CuttingTheRollCake = () => {
  function solution(topping) {
    let answer = 0;
    let set = [...new Set(topping)]
    let obj = {
      arr: topping.splice(0,topping.indexOf(set[Math.ceil(1/2)+1])),
      arrSize:0,
      toppingSize:0
    }
    let as = [[],[]]
    obj.arrSize = [...new Set(obj.arr)].length
    obj.toppingSize = [...new Set(topping)].length
    for(let a = 0 a < topping.length){
      as[0].push(topping.shift())
      as[1].push(topping.pop())
    }
    while(obj.arrSize <= obj.toppingSize){
      let a = topping.shift()
      if(!topping.includes(a)) obj.toppingSize--;
      if(!obj.arr.includes(a)) (obj.arrSize++,obj.arr.push(a));
      if(obj.arrSize === obj.toppingSize) answer++;
      if(obj.arrSize > obj.toppingSize) return answer;
    }

    return answer;
  }
  return <div></div>;
};

export default CuttingTheRollCake;
