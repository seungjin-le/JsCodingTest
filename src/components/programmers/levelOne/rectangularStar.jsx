import React from 'react';

// 직사각형 별찍기

const RectangularStar = () => {
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    let c = ''
    for(let x = 0; x < b; x++){
      for(let q = 0; q < a; q++){
        c += `*`
      }
      c += `\n`
    }
    console.log(c)
  });
  return (
    <div>

    </div>
  );
};

export default RectangularStar;
