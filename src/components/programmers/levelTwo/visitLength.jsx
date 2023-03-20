import React from 'react';

// 방문 길이

const VisitLength = () => {
  const solution = (dirs) => {
    // 캐릭터가 이동한 위치를 담을 이차원 배열
    // arr의 요소인 배열은 캐릭터의 현제 위치,
    // ex ) [  X : 0, Y : 0 ]
    let arr = [[0, 0]];
    // 캐릭터가 움직임 길을 저장할 객체
    let obj = {
      x: [],
      y: [],
    };

    // 캐릭터가 지나간 좌표를 저장
    // ex ) 캐릭터가 위로 움직 였다면 X 축은 변화가 없기때문에
    // pos = [ 캐릭터가 이동해도 변화가 없는 위치( x ) ], line = [ 캐릭터가 이동하기전 위치( y ), 이동한 후 위치( y ) ]
    const str = (pos, line) => {
      // 한번 지나간 길은 다시 지나가도 카운트되지 않기 때문에
      // 이동한 길을 오름차순으로 정렬후 JSON문자열로 치환
      // ex ) [ x, (y = 0) => (y = 1) ]
      // ex ) [ y, (x = 0) => (x = 1)  ]
      return JSON.stringify([pos, ...line.sort((a, b) => a - b)]);
    };

    // 캐릭터의 이동 명령어인 문자열을 배열로 치환하여 순회
    dirs.split('').map((v) => {
      // 캐릭터의 현제 위치인 arr의 마지막 요소를 변수에 추가
      let start = arr[arr.length - 1];

      // 캐릭터가 이동한 위치를 담을 배열
      let end = [...start];

      // 이동명령어 배열의 요소인 v가 "U" 이고
      // 캐릭터의 현제 위치인 start의 Y좌표인 2번째 값이 5보다 작으면
      // end의 2번째값 + 1
      // ex ) start = [ X, Y ], end = [ X, Y + 1 ]
      if (v === 'U' && start[1] < 5) end[1]++;

      // end의 2번째 값 - 1
      // ex) start = [ X, Y ], end = [ X, Y - 1 ]
      if (v === 'D' && start[1] > -5) end[1]--;

      // end의 1번째 값 - 1
      // ex) start = [ X, Y ], end = [ X - 1, Y ]
      if (v === 'L' && start[0] > -5) end[0]--;

      // end의 1번째 값 + 1
      // ex) start = [ X, Y ], end = [ X + 1, Y ]
      if (v === 'R' && start[0] < 5) end[0]++;

      // 이동하기전 캐릭터의 위치와 이동한후 캐릭터의 위치가 같으면
      // 반복문 다음 순번으로 넘어감
      if (JSON.stringify(start) === JSON.stringify(end)) return null;

      // v가 "U"나 "D"라면 캐릭터가 Y축으로 움직인거니
      if (v === 'U' || v === 'D') {
        // str 함수를 이용해 JSON 문자열로 치환
        // ex) line = "X, Y(캐릭터가 이동하기 전 위치), Y(캐릭터가 이동한 위치)"
        const line = str(start[0], [start[1], end[1]]);

        // 캐릭터가 한번 지나간 길은 다시 지나가도 이동 횟수를 카운트하지 않으니
        // 이동한 Y 축을 str 함수로 오름차순으로 정렬 후
        // obj.x에 line라는 문자열이 있는지 확인 후
        // line랑 같은 값이 없다면 obj.x에 line 푸시
        !obj.x.includes(line) && obj.x.push(line);
      }

      // v가 "L"나 "R"라면 캐릭터가 X축으로 움직인 거니
      if (v === 'L' || v === 'R') {
        // ex) line = "Y, X(캐릭터가 이동하기 전 위치), X(캐릭터가 이동한 위치)"
        const line = str(start[1], [start[0], end[0]]);
        !obj.y.includes(line) && obj.y.push(line);
      }

      // 캐릭터가 이동한 후의 위치를 arr에 푸시
      arr.push(end);
    });

    // ex ) 테스트 문제 1번을 예시로 보면
    // obj = {
    //   x: [ '[0,0,1]', '[-1,1,2]', '[1,1,2]' ],
    //   y: [ '[1,-1,0]', '[2,-1,0]', '[2,0,1]', '[1,0,1]' ]
    // }
    // arr = 	[
    //   [ X( 0 ), Y( 0 ) ],  [ 0, 1 ],
    //   [ -1, 1 ], [ -1, 2 ],
    //   [ 0, 2 ],  [ 1, 2 ],
    //   [ 1, 1 ],  [ 0, 1 ],
    //   [ -1, 1 ], [ -1, 2 ]
    // ]

    // 반복문을 거치면서 캐릭터가 이동한 위치의 중복을 제거했으니
    // 캐릭터가 처음 지나간 길의 길이는 obj.x와 obj.y의 길이를 더하면 됩니다
    return obj.x.length + obj.y.length;
  };
  return <div></div>;
};

export default VisitLength;
