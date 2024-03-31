import React from "react";

// 신고 결과 받기

const UserReports = () => {
  function solution(idList, report, k) {
    let answer = [];
    // 유저가 신고당한 횟수를 담을 유저 이름의 객체.
    let reportCount = {};
    // 신고당한 횟수가 k 보다 많거나 같으면 정지당할 유저의 이름을 담을 배열.
    let stopUsers = [];
    // 중복신고는 안되니 배열안에 같은값을 정리해줍니다.
    let arrSet = [...new Set(report)];
    // 한 문자열안에 신고자와 신고당한자가 스페이스바로 나뉘어있어 나눈다음
    // 배열로 만들어 담을 2차원 배열
    let textArr = [];
    // reportCount 안에 모든 유저객체를 만들고 그안에 유저가 신고한 유저의 문자열을 담을 배열을 만들어줍니다.
    idList.map((v) => (reportCount[`${v}`] = { report: [] }));
    // 위에서 reportCount 안에 모든유저 객체를 만들어줬으니 객체 안에 해당유저의 신고당한 횟수를 담을 count를 만들어줍니다 초기값은 0으로 설정
    idList.map((v, i) => ((reportCount[`${v}`].count = 0), (answer[i] = 0)));
    // 이제 신고한유저와 신고당한 유저를 2차원 배열안에 답아줍니다.
    // 2차원 배열안에 신고한유저는 [0], 신고당한 유저는 [1]로 담아줍니다.
    for (let i = 0; i < arrSet.length; i++) {
      textArr.push(arrSet[i].split(" "));
    }
    // textArr 를 이용해 신고한유저를 찾고 객체안 배열에 신고당한 유저의 이름을 담아줍니다
    textArr.map((v) => reportCount[v[0]].report.push(v[1]));
    // 윗줄과 같은 방식으로 신고당한 유저의 객체를 찾고 신고당한 카운트에 횟수를 더해줍니다.
    textArr.map((v) => ++reportCount[v[1]].count);
    // 모든유저 리스트를 이용해 유저 객체속 신고당한 카운트가 k 보다 같거나 높으면 stopUsers배열에 유저 이름을 넣어줍니다.
    idList.map((v) => reportCount[v].count >= k && stopUsers.push(v));
    // 마지막으로 신고당한 횟수가 k보다 높은사람을 정지시켰으니 신고한사람에게 메일을 보내야하니
    // 모든 유저 리스트를 활용해 reportCount[v].report 안에 정지당한 유저가 있는지 확인하고
    // 있으면 idList속 신고자가 있는 index에 메일을 보낼횟수(answer)를 +1을 해줍니다.
    idList.map((v, i) =>
      stopUsers.map(
        (value) => reportCount[v].report.includes(value) && ++answer[i]
      )
    );
    return answer;
  }
  const idList = ["muzi", "frodo", "apeach", "neo"];
  const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
  ];
  const k = 2;
  solution(idList, report, k);
  return <div></div>;
};

export default UserReports;
