import React from 'react';

// 다리를 지나는 트럭
const TruckCrossingTheBridge = () => {
  function solution(bridge_length, weight, truck_weights) {
    let obj = {
      countArr: [],
      time: bridge_length,
    };
    while (truck_weights.length !== 0) {
      let v = truck_weights.splice(0, 1);
      let weights = 0;
      if (obj.countArr.length !== 0) {
        weights = obj.countArr.reduce((v, i) => v + i);
      }
      if (obj.countArr.length + 1 > bridge_length) {
        obj.time += obj.countArr.length;
        return obj.countArr.shift();
      }
      if (weights + v <= weight) {
        obj.countArr.push(...v);
      } else if (weights + v > weight) {
        obj.countArr.shift();
      }
      obj.time++;
    }
    console.log(bridge_length, weight, truck_weights);
    return obj.time;
  }
  return <div></div>;
};

export default TruckCrossingTheBridge;
