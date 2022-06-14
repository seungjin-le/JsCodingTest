import React from 'react';

// 체육복

const GymSuit = () => {
  function solution(n, lost, reserve) {
    let answer = n - lost.length;
    const filterFun = (arr1, arr2) => {
      return arr1.filter((v) => !arr2.includes(v)).sort();
    }
    let lostFilter = filterFun(lost,reserve)
    let reserveFilter = filterFun(reserve, lost)

    answer += lost.length - lostFilter.length;

    lostFilter.forEach((a)=>{
      if(reserveFilter.length === 0 ){
        return;
      }else if(reserveFilter.includes( a - 1 )){
        reserveFilter=reserveFilter.filter((v) => v!== a - 1);
        answer++;
      } else if(reserveFilter.includes( a + 1 )){
        reserveFilter=reserveFilter.filter((v) => v!== a + 1);
        answer++;
      }

    })
    return answer
  }
  return (
    <div>

    </div>
  );
};

export default GymSuit;
