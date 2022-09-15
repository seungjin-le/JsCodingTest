import React from 'react';

// 최솟값 만들기

const CreateAMinimum = () => {
  const solution = (A,B) => {
    let answer = 0;
    // 작은 순으로 정렬
    A = A.sort((a,b) => a - b)
    // 큰 순으로 정렬
    B = B.sort((a,b) => b - a)
    // A 와 B의 같은 인덱스끼리 곱한 숫자를 answer에 할당
    A.map((v,i) => answer += v * B[i]);
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default CreateAMinimum;
