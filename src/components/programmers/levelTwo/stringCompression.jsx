import React from 'react';

// 문자열 압축

const StringCompression = () => {
  const solution = (s) => {
    let answer = 0;
    let arr = []
    const counterFun = (arr) => {
      let count = 0
      let counter = []
      arr.map((v,i) => v === arr[i+1] &&
        counter[count].push(v)
      )
      console.log(counter)
      return[];
    }
    for(let q = 0,b=0,c=2; q< s.length-1/2; q++){
      let testArr = []
      for(let a = 0; a <= s.length-1/c; a++){
        testArr.push(s.substr(b,c));
        b+=c;
      }
      b=0,c++;
      arr.push(testArr.filter((v) => v))
    }
    arr = arr.filter((v) => v.length > 1);
    counterFun(arr[0])
    //console.log(arr)
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default StringCompression;
