import React from 'react';

// 스킬트리

const SkillTree = () => {
  const solution = (skill, skill_trees) => {
    // skill의 순서를 담을 객체
    let obj = {};
    // 문자열 skill을 배열로 치환하고 알파벳은 obj에 key 값으로 넣고
    // 알파벳의 인덱스 값을 value 값으로 obj에 추가
    // ex) { C : 0, B : 1, D : 2 }
    skill.split('').map((v, i) => {
      obj[v] = i;
    });
    // 스킬트리 배열 순회
    return (
      skill_trees
        .map((v) => {
          // 스킬트리의 요소인 문자열을 obj의 index값으로 치환하기 위한 배열
          let skill = [];
          // 스킬트리의 요소인 문자열을 배열로 치환후 순회
          v.split('').map((v) => {
            // obj 안에 v라는 key 값이 있다면 obj 안에 있는 인덱스 값을 skill에 추가
            // ex) "BACDE" => skill = [ 1, 0, 2 ]
            // ex) B = 1, C = 0, D = 2
            obj.hasOwnProperty(v) && skill.push(obj[v]);
          });

          // 배열 skill 리턴
          return skill;
        })
        // filter함수로 스킬트리 이차원 배열 다시 순회
        .filter((v) => {
          // 스킬 순서가 담긴 요소인 배열을 반복문을 통해서
          // 배열 안에 값이 오름차순인지 조건문을 통해 검사하고
          // 오름차순이 아니라면 해당 스킬은 배울 수 없으니 false 리턴
          // ex) v = [ 1, 0, 2 ], a = 0, v[a] = 1
          for (let a = 0; a < v.length; a++) {
            if (v[a] !== a) return false;
          }
          // filter 함수로 배울 수 있는 스킬만 걸러냈으니 해당 배열의 길이를 리턴
          return true;
        }).length
    );
  };
  return <div></div>;
};

export default SkillTree;
