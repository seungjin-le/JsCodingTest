import React from 'react';

// [1차] 뉴스 클러스터링

const NewsClustering_1st = () => {
  const solution = (str1, str2) => {
    // 리턴할때  (교집합 / 합집합)에 곱할 변수
    let answer = 65536;
    // 문자열에서 숫자, 특수문자를 제거할 정규식 변수
    const regExp = /[0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" ]/g;
    // 문자열을 나눈 배열, 교집합, 합집합을 담을 객체
    let obj = {
      a: [], // str1
      b: [], // str2
      empty: [],
      sum: [],
    };

    // str1과 str2중 길이가 더 긴 갚을 변수에 저장
    let len = (str1.length < str2.length ? str2.length : str1.length) - 1;

    // len만큼 반복문 실행
    for (let a = 0; a < len; a++) {
      // 문자열 str1과 str2를 a부터 a + 2까지 잘라서 배열로 치환한다음 순회 ex) [str1 = "FR", str2 = "fr" ]
      [str1.slice(a, a + 2), str2.slice(a, a + 2)].map((v, i) => {
        // 정규식으로 v에서 숫자, 특수문자를 삭제후 길이가 2라면
        v.replace(regExp, '').length === 2 &&
          // i는 길이가 2인 배열이라서 Object.keys 함수를 이용해 obj.a이나 obj.b에 대문자로 치환해서 추가해줍니다
          // Object.keys(obj)[i]는 i = 0 => obj.a, i = 1 => obj.b를 가리킵니다.
          obj[Object.keys(obj)[i]].push(v.toUpperCase());
      });
    }
    // obj.a와 obj.b가 둘다 빈 값이거나 같으면 answer리턴
    if (JSON.stringify(obj.a) === JSON.stringify(obj.b)) return answer;
    // 반복 횟수를 줄이기 위해 obj.a와 obj.b중 짧은 배열을 순회
    obj.empty = (
      obj.a.length <= obj.b.length
        ? obj.a.map((x) => {
            // obj.a의 요소가 obj.b에 같은 값이 있다면 obj.b에서 x의 첫 번째 인덱스를 찾아 obj.empty 안에 넣어줍니다.
            // 이렇게 되면 obj.a와 obj.b의 중복 값은 obj.empty에 추가됩니다.
            if (obj.b.includes(x)) return obj.b.splice(obj.b.indexOf(x), 1);
          })
        : obj.b.map((x) => {
            // obj.a와 obj.b의 위치만 바뀌고 위 코드와 같습니다.
            if (obj.a.includes(x)) return obj.a.splice(obj.a.indexOf(x), 1);
          })
    )
      // 조건문에 적합하지 않으면 obj.empty 안에 false 값이 들어가니 filter 함수로 제거
      .filter((v) => v);
    // 합집합은 중복을제거한 obj.a와 obj.b를 합치면 됩니다,
    obj.sum = [...obj.a, ...obj.b];
    // str1 = "FRANCE", str2 = "french"
    // obj = {
    //   a: [ 'FR', 'RA', 'AN', 'NC', 'CE' ],
    //   b: [ 'RE', 'EN', 'CH' ],
    //   diff: [ [ 'FR' ], [ 'NC' ] ],
    //   sum: [
    //     'FR', 'RA', 'AN',
    //     'NC', 'CE', 'RE',
    //     'EN', 'CH'
    //   ]
    // }
    return Math.floor((obj.empty.length / obj.sum.length) * answer);
  };

  return <div></div>;
};

export default NewsClustering_1st;
