import React from "react"

const MultiplyTheMatrix = () => {
  const solution = (arr1, arr2) => {
    // 행렬의 곱한 값을 담을 배열
    let answer = []

    // 이차원 배열 arr1 순회
    arr1.map((value, index) => {
      // 빈배열인 answer의 index번째 요소로 빈배열 추가
      answer[index] = []
      // arr2의 0번째 요소만큼 반복
      for (let a = 0; a < arr2[0].length; a++) {
        // 행열의 곱한 값을 더할 변수
        let b = 0
        // arr1의 index번째 요소인 배열을 순회
        value.map((v, i) => {
          // 이차원 배열 arr2의 i번째 배열의 a값을 
          // arr의 index번째 배열의 i번째 값인 v를 
          // 곱한값을 미리 선언했던 인스턴트 변수인 b에 더해줍니다
          b += v * arr2[i][a]
        })
        // value.map 함수가 끝나면 빈배열인 answer의 index번째에 
        // map함수에서 곱하고 더한값을 추가
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
