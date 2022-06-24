import React from 'react';

// 로또의 최고 순위와 최저 순위

const LotteryRanking = () => {
  const solution = (lottos, win_nums) => {
    // lottos의 0의 개수 길이
    const x =lottos.filter(v => v === 0).length;
    // lotts와 win_nums의 합집합 의 길이
    const diff = lottos.filter(v => win_nums.includes(v)).length;
    // lottos의 틀린 숫자 개수 길이
    const a = 6-diff-x;
    // 로또 등수 배열
    console.log(x,diff,a)
    const ranking = [6,5,4,3,2,1];
    // 첫번째 요소는 틀린 숫자의 길이가 6이라면 ranking의 첫번째 요소인 6을 반환하고 숫자의 길이가 6이 아니라면 0의 갯수와 합집합의 길이를 더하고 -1로 반환
    // 두번째 요소는 0의 갯수가 6이거나 0의 갯수와 틀린 갯수를 더했을때 값이 6이라면 (6 - 틀린갯수 - 0의 갯수) 값을 ranking
    // 배열에서 찾고 아니라면 (6 - 틀린갯수 - 0의 갯수 - 1)값을 ranking 배열 안에서 찾습니다
    return [ranking[a === 6 ? 0 :diff+x-1],ranking[x === 6 || x+a === 6? 6-a-x : 6-a-x-1 ]];
  }
  return (
    <div>
      
    </div>
  );
};

export default LotteryRanking;
