import React from "react";

// 공원 산책

const WalkInThePark = () => {

  const solution = (park, routes) => {
    // park를 문자열로 치환하고 S의 index검색
    const start = park.join('').indexOf('S')
    // park 요소의 길이
    const len = park[0].length;
    // 이동을 시작할 위치 [ Y 축 , X 축 ]
    let pos = [Math.floor(start / len), start % len]
    // park의 마지막 요소(Y축)의 마지막 위치(Y축)은 [-1,-1]로 리턴
    if (pos[0] === park.length && pos[1] === len) return [-1, -1]

    routes.map((v) => {
      // [방향, 거리]
      // ex ) [ "W", "3"]
      let arr = v.split(' ')
      // 이동할 방향이 수직인지 확인
      // ex ) true or false
      const vtc = arr[0] === 'N' || arr[0] === 'S';
      // 방향이 위쪽(N)이나 왼쪽(W)인지 확인
      // ex ) -1 or 1
      const dir = arr[0] === 'N' || arr[0] === 'W' ? -1 : 1;
      // 방향이 왼쪽과 위쪽이라면 거리를 음수로 변경해 반복문이 끝나면 pos에 더할 값으로 변경
      arr[1] = arr[0] === 'N' || arr[0] === 'W' ? Number(-arr[1]) : +arr[1]
      // 이동할 거리만큼 반복
      for (let a = 1; a <= Math.abs(arr[1]); a++) {
        // 이동할 방향이 수직이라면 한칸 이동한 X축 = park[현제 위치 + 한칸이동 * 방향이 N,W 라면 -1 아니라면 1]
        // 수직이 아니라면 현제 있는 X축 = park[pos[0]]
        // ex ) check = "OOOX" or undefined
        const check = vtc ? park[pos[0] + a * dir] : park[pos[0]]
        // 방향이 수직인 경우 이동후 값이 undefined 이거나 이동후 Y축이 "X"라면 반복문 중지
        if (!check || check[pos[1]] === 'X') return
        // (방향이 수직인가 ? X축의 pos[1]번째는 값이 있는가 : (X축의 pos[1] 번째위치에서 이동했을때 값이 있는가? || 이동했을때 값이 X인가? ))
        if ((vtc ? !check[pos[1]] : (!check[pos[1] + a * dir] || check[pos[1] + a * dir] === 'X'))) return;
      }
      // 이동 방향이 수직이라면 pos[0](Y축)에 이동한 거리 를 더해줍니다
      // 방향이 수평이라면 pos[1](X축)에 이동한 거리 를 더해줍니다
      vtc ? pos[0] += arr[1] : pos[1] += arr[1]
    })
    return pos;
  }

  // N = Up
  // S = Down
  // W = Left
  // E = Right
  return;
}

export default WalkInThePark

