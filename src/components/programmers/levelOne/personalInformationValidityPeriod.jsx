import React from 'react';

// 개인정보 수집 유효기간

const PersonalInformationValidityPeriod = () => {
  const solution = (today, terms, privacies) => {
    let answer = [];
    // 약관 종류와 유효기간을 담을 객체
    let obj = {};
    // terms는 문자 배열이기 때문에 공백을 기준으로 나눠서 ["A 6", "B 12", "C 3"]
    // obj에 넣어줍니다.
    terms
      .map((v) => {
        return v.split(' ');
      })
      .map((v) => (obj[v[0]] = +v[1]));
    // 개인정보 privacies의 요소가 문자열이기 때문에 배열로 치환해줍니다. ex) ["2021.05.02 A", ...]
    privacies.map((v, i) => {
      let term = v
        // 순회하면서 요소를 공백을 기준으로 나눈후 ex) [["2021.05.02", "A"], ....]
        .split(' ')[0]
        // 나눈 배열의 0번째 인덱스를 (.)을 기준으로 또 배열로 치환해줍니다. ex) ["2021","05","02"]
        .split('.')
        // 이제 배열을 순회하면서 문자열을 숫자로 변환해 배열 term에 넣어줍니다.
        // ex ) term = [ 2021, 5, 2]
        .map((v) => +v);
      // 개인정보 유효기간은 privacies배열 요소의 하루 전까지만 유효하기 때문에 -1일 을 해줘야 합니다.
      // 만약 개인정보 수집 동의 일자의 일수(term[2])가 1일 이라면
      if (term[2] === 1) {
        // 문제 설명에서는 모든 달이 28일까지만 존재한다고 하므로
        // term[2] = 28
        term[2] = 28;
        // 그리고 월수 에서 -1해줍니다.
        term[1]--;
        // 월수 에서 -1을 했을때 0이라면 term[1] = 12
        if (term[1] === 0) {
          term[1] = 12;
          // 그리고 년수 에서 -1을 해줍니다.
          term[0]--;
        }
      } else {
        // 만약 개인정보 수집 동의 일자의 일수(term[2])가 1일 이 아니라면
        // 월수 -1
        term[2]--;
      }
      // new Date( 년수, 월수 + 약관의 유효기간, 일수 )
      const date = new Date(term[0], term[1] + obj[v[v.length - 1]], term[2]);

      const formatDate = [
        // 유효기간 만료일의 월수가 0이라면 년수에서 -1을 해주고 아니라면 그대로 배열에 담아줍니다.
        date.getMonth() === 0 ? date.getFullYear() - 1 : date.getFullYear(),
        // 유효기간 만료일의 월수가 0이라면 월수는 12월로 해주고 아니라면 그대로 문자열로 변환 한다음
        // padStart(2, '0')함수를 사용해서 문자열의 길이가 1이라면 문자열의 길이가 2가 되도록
        // 문자열 앞자리에 0을 추가해줍니다.
        String(date.getMonth() === 0 ? 12 : date.getMonth()).padStart(2, '0'),
        // 월수 처럼 문자열로 변환하면서 문자열의 길이가 1이라면 앞자리에 0을 추가.
        String(date.getDate()).padStart(2, '0'),
        // join()함수를 사용해서 이제 배열을 문자열로 변환 해줍니다.
      ].join('.');
      // formatDate보다 현재 날짜(today)가 크다면 answer에 privacies의 index + 1
      if (formatDate < today) return answer.push(i + 1);
    });
    return answer;
  };
  return <div></div>;
};

export default PersonalInformationValidityPeriod;
