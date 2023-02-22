import React from 'react';

// 햄버거 만들기

const MakingHamburgers = () => {
  // 정규식 (실패 : 메모리 부족)
  const solution = (ingredient) => {
    const len = ingredient.length;
    ingredient = ingredient.join('');
    while (ingredient.includes('1231')) {
      ingredient = ingredient.replace(/1231/, '');
    }
    return (len - ingredient.length) / 4;
  };

  // 정답
  const solution2 = (ingredient) => {
    const len = ingredient.length;
    for (let a = 0; a <= ingredient.length; a++) {
      //console.log(ingredient,a)
      if (
        ingredient[a] === 1 &&
        ingredient[a + 1] === 2 &&
        ingredient[a + 2] === 3 &&
        ingredient[a + 3] === 1
      ) {
        ingredient.splice(a, 4);
        a -= 4;
      }
    }

    return (len - ingredient.length) / 4;
  };
  return <div></div>;
};

export default MakingHamburgers;
