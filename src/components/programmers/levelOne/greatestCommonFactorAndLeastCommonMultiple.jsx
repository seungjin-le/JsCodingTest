import React from 'react';

// 최대공약수와 최소공배수

const GreatestCommonFactorAndLeastCommonMultiple = () => {
  const solution = (n, m) => {
    let answer = [];
    const max = Math.max(n, m);
    const min = Math.min(n,m);
    answer[0] = gcd(min , max);
    answer[1] = lcm(min , max);
    return answer;
  }
  function gcd(min, max){
    return (min % max) === 0 ? max : gcd(max, min % max);
  }

  function lcm(min, max){
    return min * max / gcd(min, max);
  }
  return (
    <div>

    </div>
  );
};

export default GreatestCommonFactorAndLeastCommonMultiple;
