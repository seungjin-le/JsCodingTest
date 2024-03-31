import React from 'react';

// 가장 큰 수

const BiggestNumber = () => {
  const solution = (numbers) => {
    let arr = numbers.map((v) => String(v))
    arr = arr.sort((a,b) =>  parseInt( b + a ) - parseInt(a + b));
    return arr[0] === '0' ? '0' : arr.join('');
  }
  return (
    <div>

    </div>
  );
};

export default BiggestNumber;
