import React from "react";

const UserReports = () => {
  function solution(idList, report, k) {
    let answer = [];
    let reportCount = {};
    let stopUsers = [];
    let arrSet = [...new Set(report)];
    let textArr = [];
    idList.map((v) => (reportCount[`${v}`] = { report: [] }));
    idList.map((v, i) => ((reportCount[`${v}`].count = 0), (answer[i] = 0)));
    for (let i = 0; i < arrSet.length; i++) {
      textArr.push(arrSet[i].split(" "));
    }
    textArr.map((v) => reportCount[v[0]].report.push(v[1]));
    textArr.map((v) => ++reportCount[v[1]].count);
    console.log(textArr);
    idList.map((v) => reportCount[v].count >= k && stopUsers.push(v));
    console.log(reportCount);
    idList.map((v, i) =>
      stopUsers.map(
        (value, index) => reportCount[v].report.includes(value) && ++answer[i]
      )
    );
    console.log(answer);
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
