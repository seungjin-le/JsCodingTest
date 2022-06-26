import React from 'react';

// 가장 큰 수

const BiggestNumber = () => {
  const solution = (numbers) => {
    let arr = numbers.map((v) => String(v))
    arr = arr.sort((a,b) => {
      if(+b[0] === +a[0]){
        if(+b === 0 && +a === 0){
          return false
        }
        for(let x = 1; x <= Math.max(a.length,b.length); x++){
          let l = 1
          let r = 1
          if(isNaN(+b[x]) || isNaN(+a[x])){
            if(isNaN(+b[x])){
              if(+b[x-l] !== +a[x]){
                return  +b[x-l] - +a[x]
              }
              l++
            }else if(isNaN(+a[x])){
              if(+b[x] !== +a[x-r]){
                return +b[x] - +a[x-r]
              }
              r++
            }
          }else{
            if(+b[x] !== +a[x]){
              return +b[x] - +a[x]
            }
          }
        }}
      return +b[0] - +a[0]
    })
    if(arr[0] === '0'){
      return '0'
    }
    return arr.join('');
  }
  return (
    <div>

    </div>
  );
};

export default BiggestNumber;
