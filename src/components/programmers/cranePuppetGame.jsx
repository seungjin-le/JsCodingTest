import React from 'react';

// 크레인 인형뽑기 게임

const CranePuppetGame = () => {
  const solution = (board, moves) => {
    let answer = 0;
    let arr = [];
    let basket = []
    for(let a = 0; a < board.length; a++){
      arr[a] = board.map((v) => v[a])
    }
    for(let a = 0; a < moves.length; a++){
      for(let b = 0; b < arr.length; b++){
        if(arr[moves[a]-1][b]) {
          basket.push(arr[moves[a]-1][b])
          arr[moves[a]-1][b] = 0;
          b = arr.length
        }
      }
    }
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
