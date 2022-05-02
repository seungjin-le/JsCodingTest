import React from "react";

const SecretMap = () => {
  const solution = (n, arr1, arr2) => {
    const stringAdd = (num) => {
      let text = "";
      for (let x = 0; x <= num - 1; x++) {
        text += " ";
      }
      return text;
    };
    const arrToString = (arr) => {
      return arr.map((v) => v.toString(2).replace(/1/gi, "#"));
    };
    const textChange = (arr) => {
      return arr.map((v) =>
        v.length < n
          ? (stringAdd(n - v.length) + v).replace(/0/gi, " ")
          : v.replace(/0/gi, " ")
      );
    };
    let answer = [];
    arr1 = arrToString(arr1);
    arr2 = arrToString(arr2);
    arr1 = textChange(arr1);
    arr2 = textChange(arr2);
    for (let a = 0; a < n; a++) {
      answer[a] = "";
      for (let b = 0; b < n; b++) {
        arr1[a][b] === "#" || arr2[a][b] === "#"
          ? (answer[a] += "#")
          : (answer[a] += " ");
      }
    }
    return answer;
  };
  solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
  return <div> ["#####", "# # #", "### #", "# ##", "#####"]</div>;
};

export default SecretMap;
