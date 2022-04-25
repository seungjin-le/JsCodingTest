import React from "react";

const UserReports = () => {
  function solution(idList, report, k) {
    let answer = {};
    let reportCount = {};
    idList.map((v) => (reportCount[`${v}`] = []));
    idList.map((v) => (reportCount[`${v}`].count = 0));
    let arrSet = [...new Set(report)];
    let textArr = [];
    let textObj = {};
    for (let i = 0; i < arrSet.length; i++) {
      textArr.push(arrSet[i].split(" "));
    }

    textArr.map((v) => reportCount[v[0]].push(v[1]));
    textArr.map((v) => ++reportCount[v[1]].count);
    console.log(reportCount);
    answer = reportCount;
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

  return (
    <div>
      asdㄹㄴㄹ
      <div>asdasd</div>s
    </div>
  );
};

export default UserReports;
