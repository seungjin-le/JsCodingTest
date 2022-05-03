import React from "react";

const IdSuggestion = () => {
  const solution = (new_id) => {
    let answer = new_id
      .toLowerCase()
      .replace(/[`~!@#$%^&*()|+\=?;:'",<>\{\}\[\]\\\/ ]/gim, "")
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
