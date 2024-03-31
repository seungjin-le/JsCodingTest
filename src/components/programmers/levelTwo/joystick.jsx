import React from 'react';

// 조이스틱

const Joystick = () => {
  const solution = (name) => {
    let changeAlphabet = 0;
    let minMoves = name.length - 1;

    for (let i = 0; i < name.length; i++) {
      let index = i + 1;
      let changeNum = name.charCodeAt(i);
      changeAlphabet += changeNum < 78 ? changeNum - 65 : 91 - changeNum;

      while (index < name.length && name[index] === 'A') index++;
      minMoves = Math.min(minMoves, i * 2 + name.length - index);
      minMoves = Math.min(minMoves, (name.length - index) * 2 + i);
    }

    return changeAlphabet + minMoves;
  };
  return <div></div>;
};

export default Joystick;
