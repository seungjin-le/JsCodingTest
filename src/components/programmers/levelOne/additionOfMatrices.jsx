import React from 'react';

// 행렬의 덧셈

const AdditionOfMatrices = () => {
  const solution = (arr1, arr2) => {
    return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));;
  }
  return (
    <div>

    </div>
  );
};

export default AdditionOfMatrices;
