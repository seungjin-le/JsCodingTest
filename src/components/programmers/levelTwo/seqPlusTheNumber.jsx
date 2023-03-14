import React from 'react';

// 연속 부분 수열 합의 개수

const SeqPlusTheNumber = () => {
  function solution(elements) {
    const set = [];
    const arr = [...elements, ...elements];
    elements.map((v, i) => {
      elements.map((valye, index) => {
        set.push(arr.slice(index, i + index).reduce((acc, v) => acc + v, 0));
      });
    });

    return new Set(set).size;
  }
  return <div></div>;
};

export default SeqPlusTheNumber;

//7 [ 7 ] [ 7, 9, 1, 1, 4 ] ,
// 9 [ 9 ] [ 7, 9, 1, 1, 4 ] ,
// 1 [ 1 ] [ 7, 9, 1, 1, 4 ] ,
// 1 [ 1 ] [ 7, 9, 1, 1, 4 ] ,
// 4 [ 4 ] [ 7, 9, 1, 1, 4 ] ,
// 16 [ 7, 9 ] [ 7, 9, 1, 1, 4 ] ,
// 10 [ 9, 1 ] [ 7, 9, 1, 1, 4 ] ,
// 2 [ 1, 1 ] [ 7, 9, 1, 1, 4 ] ,
// 5 [ 1, 4 ] [ 7, 9, 1, 1, 4 ] ,
// 11 [ 4, 7 ] [ 7, 9, 1, 1, 4 ] ,
// 17 [ 7, 9, 1 ] [ 7, 9, 1, 1, 4 ] ,
// 11 [ 9, 1, 1 ] [ 7, 9, 1, 1, 4 ] ,
// 6 [ 1, 1, 4 ] [ 7, 9, 1, 1, 4 ] ,
// 12 [ 1, 4, 7 ] [ 7, 9, 1, 1, 4 ] ,
// 20 [ 4, 7, 9 ] [ 7, 9, 1, 1, 4 ] ,
// 18 [ 7, 9, 1, 1 ] [ 7, 9, 1, 1, 4 ] ,
// 15 [ 9, 1, 1, 4 ] [ 7, 9, 1, 1, 4 ] ,
// 13 [ 1, 1, 4, 7 ] [ 7, 9, 1, 1, 4 ] ,
// 21 [ 1, 4, 7, 9 ] [ 7, 9, 1, 1, 4 ] ,
// 21 [ 4, 7, 9, 1 ] [ 7, 9, 1, 1, 4 ] ,
