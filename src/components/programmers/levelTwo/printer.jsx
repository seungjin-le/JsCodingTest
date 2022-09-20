import React from 'react';

// 프린터

const Printer = () => {
  const solution = (priorities, location) => {
    let answer = 0;
    let documents = priorities.map((priority, documentLocation) => [
      documentLocation,
      priority,
    ]);
    let locationPrinted = false;
    while (!locationPrinted) {
      const shifted = documents.shift();
      let printAvailable = true;
      for (let i = 0; i < documents.length; i++) {
        if (shifted[1] < documents[i][1]) {
          printAvailable = false;
          break;
        }
      }
      if (printAvailable) {
        answer += 1;
        if (shifted[0] === location) locationPrinted = true;
      } else {
        documents.push(shifted);
      }
    }
    return answer;
  };
  return <div></div>;
};

export default Printer;
