import React from 'react';

// 오픈 채팅방

const OpenChatRoom = () => {
  const solution = (record) => {
    // 유저들의 기록을 담고 리턴할 배열
    let answer = [];
    // 유저의 정보를 담고 수정할 객체
    let obj = {};
    // 유저들의 정보와 기록이 담겨있는 배열을 이차원 배열로 변경
    record = record.map((v) => v.split(' '));
    // record = [
    //   [(Enter or Leave or Change), (id), (nickName)],
    //   [(Enter or Leave or Change), (id), (nickName)]
    // ]

    // 유저들의 정보가 담긴 이차원배열을 순회하면서 obj안에 유저id라는 객체를 만들고
    // 그안에 닉네임을 추가하거나 수정
    record.map(
      (v) =>
        (obj[v[1]] = {
          // 유저가 채팅방을 나가는 'Leave'는 유저의 행동과 id만 담겨있기 때문에
          // 이차원 배열 첫번째 값이 'Leave'일경우 이전값으로 넣습니다.
          nickName: v[0] === 'Leave' ? obj[v[1]].nickName : v[2],
          Enter: `${
            v[0] === 'Leave' ? obj[v[1]].nickName : v[2]
          }님이 들어왔습니다.`,
          Leave: `${
            v[0] === 'Leave' ? obj[v[1]].nickName : v[2]
          }님이 나갔습니다.`,
        })
    );
    // 객체안에 유저의 정보 등록, 수정이 끝나면
    // 유저의 정보가 담긴 이차원 배열을 순회하면서
    // 이차원 배열의 첫번째 값이 'Change' 아니라면 answer에 메시지를 push
    // v = [ v[0] = (Enter, Leave, Change), v[1] = id, v[2] = nickName ]
    record.map((v) => v[0] !== 'Change' && answer.push(obj[v[1]][v[0]]));
    console.log(answer);
    return answer;
  };
  return <div></div>;
};

export default OpenChatRoom;
