import React from 'react';

// 택배 배달과 수거하기

const DeliveryAndPickUps = () => {
  function solution(cap, n, deliveries, pickups) {
    var answer = 0;
    let del = [0, 0];
    let arr = [[], []];
    let test = [];
    let obj = {
      del: [],
      pick: [],
    };
    deliveries.map((v, i) => {
      v !== 0 && arr[0].unshift([i + 1, v]);
      pickups[i] !== 0 && arr[1].unshift([i + 1, pickups[i]]);
    });
    console.log(arr);
    arr[0].map((v, i, arr2) => {
      let caps = cap;
      if (v[1] > cap) return obj.pick.push(v[0] * Math.ceil(del[0] / cap));
      if (v[1] === cap && v[1] > 0) return obj.pick.push(v[0]);

      for (let a = i; a < arr2.length; a++) {
        if (caps - arr2[a][1] === 0)
          return obj.pick.push(v[0]), (arr2[a][1] = 0);
        if (arr2[a][1] >= caps)
          return obj.pick.push(arr2[a][0]), (arr2[a][1] = 0);
        console.log(arr2[a], caps);
        if (caps - arr2[a][1] > 0) (arr2[a][1] = 0), (caps = caps - arr2[a][1]);
      }
    });

    console.log(obj, arr);
    return answer;
  }
  return <div></div>;
};

export default DeliveryAndPickUps;
