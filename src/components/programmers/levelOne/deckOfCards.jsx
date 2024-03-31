import React from 'react';

// 카드 뭉치

const DeckOfCards = () => {
  const solution = (cards1, cards2, goal) => {
    let answer = true;
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    const sorter = (a) => [...a].sort((a, b) => a - b);

    goal.map((v, i) => {
      cards1.includes(v)
        ? (cards1[cards1.indexOf(v)] = i)
        : (cards2[cards2.indexOf(v)] = i);
    });

    if (!equals(cards1, sorter(cards1)) || !equals(cards2, sorter(cards2))) {
      answer = false;
    }
    return answer ? 'Yes' : 'No';
  };
  return <div></div>;
};

export default DeckOfCards;
