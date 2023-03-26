import React from "react"

const MultiplyTheMatrix = () => {
  const solution = (arr1, arr2) => {
    let answer = []
    arr1.map((value, index) => {
      answer[index] = []
      for (let a = 0; a < arr2[0].length; a++) {
        let b = 0
        value.map((v, i) => {
          b += v * arr2[i][a]
        })
        answer[index].push(b)
      }
    })
    return answer;
  }


  // arr1 : [[1, 2, 3], [4, 5, 6]]

  // arr2 : [[1, 4], [2, 5], [3, 6]]

  // [ 1 * 1 + 2 * 2 + 3 * 3 , 1 * 4 + 2 * 5 + 3 * 3] = 
  // console.log([ 1 * 1 + 2 * 2 + 3 * 3 , 1 * 4 + 2 * 5 + 3 * 3] )
  // return : [[14, 32], [32, 77]]

  // 이거 한번 돌려보세요.

  // +) 두 행렬의 크기가 AxB, CxD인 행렬을 곱할려면 B와 C가 같아야 합니다.
  return <div></div>;
}

export default MultiplyTheMatrix;
