import React from 'react';

// 할인 행사

const DiscountEvent = () => {
  const solution = (want, number, discount) => {
    // 구매해야 하는 과일 개수를 담을 객체
    let obj = {};
    // 과일을 전부 구매할 수 있는 날을 담을 이차원 배열
    let arr = [];
    // 구매할 과일을 담은 배열 want 순회
    // 빈 객체인 obj에 v라는 key 값으로 number의 i 번째 값을 추가
    // *배열 number는 want의 개수를 순서대로 담겨있습니다.
    want.map((v, i) => (obj[v] = number[i]));

    // 과일 할인하는 날이 담긴 배열 dusciunt순회
    discount.map((v, i) => {
      // 10일 동안 가입할 수 있으므로 i부터 i + 10까지 잘라서
      // arr에 push
      arr.push(discount.slice(i, i + 10));
    });
    // i 일부터 i + 10일까지 판매하는 과일 배열이 담긴 이차원배열 arr을
    // filter함수로 순회
    arr = arr.filter((v, i) => {
      // 필요한 과일 개수가 담긴 객체 obj를 얕은 복사
      let wants = { ...obj };
      // i 일부터 i + 10일까지 판매하는 과일 리스트 배열 순회
      v.map((value) => {
        // wants의 valye라는 key 값을 가진 변수가 0이 아니라면 -1
        if (wants[value] > 0) wants[value]--;
      });
      // 필요한 과일 개수가 담긴 객체 wants를 순회하면서
      // value 값이 0이라면 해당 객체에서 변수 삭제
      Object.entries(wants).forEach(
        ([key, value]) => value === 0 && delete wants[key]
      );
      // 필요한 과일을 모두 샀다면 wants에서 모든 변수가 삭제되었으니
      // wnats의 길이가 0이라면 return 값이 turn 값이 되고
      // arr.filter 함수를 통해 arr에 추가되고
      // wants의 길이가 0이 아니라면 arr에 추가되지 않습니다.
      return Object.keys(wants).length === 0;
    });
    // filter 함수를 통해서 모든 과일을 살수 있는 날만
    // arr에 추가되었으므로 arr의 길이를 return
    return arr.length;
  };
  return <div></div>;
};

export default DiscountEvent;
