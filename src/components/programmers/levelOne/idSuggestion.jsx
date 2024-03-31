import React from "react";

// 카카오 아이디 추천

const IdSuggestion = () => {
  const solution = (new_id) => {
    let answer = new_id
      .toLowerCase()
      .replace(/[`~!@#$%^&*()|+=?;:'",<>{}[\]\\/ ]/gim, "")
      .replace(/\.+/g, ".")
      .replace(/^\.|\.$/g, "")
      .replace(/^$/, "a")
      .slice(0, 15)
      .replace(/\.$/, "");
    console.log(answer);
    return answer.padEnd(3, answer[answer.length - 1]);
  };
  return <div></div>;
};

export default IdSuggestion;
