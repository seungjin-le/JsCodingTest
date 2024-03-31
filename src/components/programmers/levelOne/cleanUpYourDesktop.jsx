import React from 'react';

// 바탕화면 정리

const CleanUpYourDesktop = () => {
  const solution = (wallpaper) => {
    // [ 시작 Y, 시작 X, 종료 Y, 종료 X ]
    let answer = [0, 0, 0, 0];
    // "#"이 있는 문자열의 첫 index와 마지막 index를 담을 배열
    let indexs = [];
    // wallpaper 문자 배열 순회
    wallpaper = wallpaper
      .map((v, i) => {
        // wallpaper의 요소인 문자열에서 첫뱐째 "#"의 index를 변수에 넣어줍니다.
        const index = v.indexOf('#');
        // wallpaper의 요소인 문자열에서 마지막 "#"의 index에 1을 더하고 변수에 넣어줍니다.
        const lastIndex = v.lastIndexOf('#') + 1;
        // 문자열에 "#"이 있는지 확인
        const check = v.includes('#');
        // 문자열에 "#"이 있다면 배열 indexs 안에 "#"의 첫번째와 마지막 index를 담아줍니다.
        if (check) indexs.push(index, lastIndex);
        // 문자열에 "#"이 있다면 현제 요소의 index를 리턴
        return check && i;
      })
      // 요소안에 "#"이 없었다면 false를 리턴하기 때문에 filter로 제거
      .filter((v) => v !== false);

    // 드래그를 시작하는 위치의 Y는 map 함수를 사용해서 리턴 한 index 값의 최솟값을 찾아 넣어줍니다.
    answer[0] = Math.min(...wallpaper);
    // 드래그를 시작하는 위치의 X는 map 함수를 사용해서 리턴 한 index 값의 최댓값을 찾아 1을 더하고 넣어줍니다.
    answer[2] = Math.max(...wallpaper) + 1;

    // 드래그를 끝내는 위치의 Y는 "#"의 index 값이 담긴 indexs의 최댓값을 찾아 넣어줍니다.
    answer[1] = Math.min(...indexs);
    // 드래그를 끝내는 위치의 X는 "#"의 index 값이 담긴 indexs의 최댓값을 찾아 넣어줍니다.
    answer[3] = Math.max(...indexs);

    return answer;
  };
  return <div></div>;
};

export default CleanUpYourDesktop;
