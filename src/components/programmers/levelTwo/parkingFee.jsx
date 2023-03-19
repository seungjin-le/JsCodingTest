import React from 'react';

// 주차 요금 계산

const ParkingFee = () => {
  const solution = (fees, records) => {
    // 입차 시간과 출차 시간을 분으로 계산해주는 함수
    const getTime = (time) => {
      // 시간과 분을 millisecond( 밀리 초, 1/1000 )로 계산
      // 하루의 시작인 00시 00분을 밀리초로 계산하여 변수 선언
      const startTime = new Date('2023/01/01 00:00').getTime();

      // 매개 변수인 주차 시간과 분을 밀리세컨드로 계산후
      // startTime 으로 뺀후 분으로 계산( 1초 = 1000 * 1분 = 60초 )
      return (
        (new Date(`2023/01/01 ${time}`).getTime() - startTime) / (1000 * 60)
      );
    };
    // 주차 요금을 담을 배열
    let answer = [];

    // 차 번호별로 입차, 출차 시간을 담을 객체
    let obj = {};

    // 모든 자동차의 자동차 번호와, 시간, 입차 출차 기록이 담긴 배열 순회
    records.map((v) => {
      // 입차 출차 기록은 공백을 기준으로 문자열로 되어있어서 split함수를 사용해
      // 공백을 기준으로 배열로 치환
      // ex) v = "05:34 5961 IN" => car = ["05:34", "5961", "IN"]
      const car = v.split(' ');

      // 배열로 치환한 기록의 이용 시간인 0번째요소를 getTime함수로 분으로 계산
      const time = getTime(car[0]);

      // 이용 기록이 입차( 'IN' ) 라면 입차 시간을 음수로 변환
      const min = car[2] === 'IN' ? -time : time;

      // 객체 obj안에 car의 2번째 요소인 자동차 번호가 있다면
      // obj[ 자동차 번호 ] 에 분으로 계산한 값을 push
      // 자동차 번호가 없다면 obj[ 자동차 번호 ]의 첫번째 요소로 분으로 계산한 값 추가
      obj.hasOwnProperty(car[1])
        ? obj[car[1]].push(min)
        : (obj[car[1]] = [min]);
    });

    // 테스트 문제 1번을 예시로 보면
    //  음수 = 입차, 양수 = 출차
    //	obj = {
    //   '5961': [ -334, 479, -1379, 1380 ],
    //   '0000': [ -360, 394, -1139 ],
    //   '0148': [ -479, 1149 ]
    //  }

    // obj 순회
    // key = 자동차 번호, value = 분으로 계산한 입차, 출차 시간
    Object.entries(obj).forEach(([key, value]) => {
      // 자동차 번호별로 입차 출차 시간이 담긴 배열 value의 길이가 짝수가 아니라면
      // 입차후 출차 기록이 없는 것이므로 해당 배열에 마지막 요소로 23시 59분을 분으로 계산 후 추가
      if (value.length % 2 !== 0) value.push(getTime('23:59'));

      // value를 reduce함수를 통해 배열의 모든 값을 더해서 최종값을 변수에 추가
      let min = value.reduce((a, v) => a + v);

      // 만약 이용 시간이 요금표의 기본 시간(분)보다 작을시 answer에 [ 차량번호, 기본요금 ]을 추가
      if (min <= fees[0]) return answer.push([key, fees[1]]);

      // 요금 계산
      // 이용 시간(min)에서 기본 이용 시간(fess[0])을 뺀 후 단위시간(fess[2])으로 나눴을 때 결괏값 이 소수점이라면
      // 주차장 이용 시간을 초과했다는 뜻이므로 Math.ceil을 사용해 결괏값을 올림
      // ex) Math.ceil(( 이용 시간(min) - 기본 이용 시간(fees[0]) ) / 단위 시간(fees[2]))
      // ex) 기본요금(fess[1]) + Math.ceil 결괏값 * 단위 요금 fess[3]

      // answer.push([자동차 번호, 주차 이용금액])
      answer.push([
        key,
        fees[1] + Math.ceil((min - fees[0]) / fees[2]) * fees[3],
      ]);
    });

    // 자동차 번호가 작은 순으로 리턴해야 하기 때문에
    // sort 함수를 사용해 이차원 배열 요소들의 첫 번째 값만 비교해서 정렬 후
    // map 함수를 사용해 이차원 배열의 두 번째 요소만 리턴
    // ex ) 테스트 문제 1번을 예시로 보면
    // answer = [ [ '5961', 5000 ], [ '0000', 14600 ], [ '0148', 34400 ] ]
    // answer.sort((a, b) => +a[0] - +b[0]) > [ [ '0000', 14600 ], [ '0148', 34400 ], [ '5961', 5000 ] ]
    // answer.map((v) => v[1]) > [ 14600, 34400, 5000 ]
    return answer.sort((a, b) => +a[0] - +b[0]).map((v) => v[1]);
  };
  return <div></div>;
};

export default ParkingFee;
