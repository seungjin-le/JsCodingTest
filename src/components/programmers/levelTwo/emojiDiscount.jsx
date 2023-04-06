import React from 'react';

// 이모티콘 할인행사

const EmojiDiscount = () => {
  const solution = (users, emoticons) => {
    let answer = [];
    let discount = [];
    let arr = [];
    emoticons.map((value, index) => {
      discount[index] = [];
      for (let a = 1; a < 5; a++) {
        discount[index].push([a * 10, value - (a * value) / 10]);
      }
    });
    arr.push(discount.splice(0, 1)[0].map((v) => [v]));
    discount.map((v1, i1) => {
      arr[i1 + 1] = [];
      arr[i1].map((v2) => {
        v1.map((v3) => {
          arr[i1 + 1].push([...v2, v3]);
        });
      });
    });
    arr[arr.length - 1].map((v1) => {
      let counts = [0, 0];
      users.map((v2) => {
        let filter = v1.filter((v3) => v3[0] >= v2[0]);
        if (filter.length === 0) return;
        filter = filter.map((v) => v[1]).reduce((a, b) => a + b);
        filter >= 10000 || filter >= v2[1]
          ? counts[0]++
          : (counts[1] += filter);
      });
      answer.push(counts);
    });

    return answer.sort((a, b) =>
      a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]
    )[0];
  };

  return <div></div>;
};

export default EmojiDiscount;
