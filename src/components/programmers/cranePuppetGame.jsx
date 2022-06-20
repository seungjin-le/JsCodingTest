import React from 'react';

// 크레인 인형뽑기 게임

const CranePuppetGame = () => {
  const solution = (board, moves) => {
    let answer = 0;
    // 이차원(board) 배열의 같은 인덱스 끼리 묶어 새로운 배열 생성
    let arr = [];
    // 뽑은 인형을 담을 바구니 배열
    let basket = []
    // 이차원(board) 배열의 특정 인덱스 값(a)만 묶어서 arr 에 넣어줌
    for(let a = 0; a < board.length; a++){
      arr[a] = board.map((v) => v[a])
    }
    // 크레인 게임 로직
    for(let a = 0; a < moves.length; a++){
      for(let b = 0; b < arr.length; b++){
        if(arr[moves[a]-1][b]) {
          basket.push(arr[moves[a]-1][b])
          arr[moves[a]-1][b] = 0;
          b = arr.length
        }
      }
    }
    // 중복 찾기
    for(let a = 0; a < basket.length; a++){
      if(basket[a] === basket[a+1]){
        answer +=2
        basket.splice(a,2)
        a = -1;
      }
    }
    return answer;
  }
  
  return (
    <div>

    </div>
  );
};

export default CranePuppetGame;
