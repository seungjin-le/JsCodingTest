import React from 'react';

// 크레인 인형뽑기 게임

const CranePuppetGame = () => {
  const solution = (board, moves) => {
    let arr = [];
    let basket = []
    let answer = 0;
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
    const fun = (array, num = 0) => {
      for(let a = 0; a < array.length; a++){
        if(array[a] === array[a+1]){
          num +=2
          array.splice(a,2)
          a = -1;
        }
      }
      return num;
    }
    answer = fun(basket);
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default CranePuppetGame;
