import React from 'react';

// 주차 욕금 계산

const ParkingFee = () => {
  const solution = (fees, records) => {
    const getTime = (hour, min) => {
      const startTime = new Date('2023/01/01 00:00').getTime();
      return (
        (new Date(`2023/01/01 ${hour}:${min}`).getTime() - startTime) /
        (60 * 1000)
      );
    };
    var answer = [];
    let obj = {};

    records.map((v) => {
      const car = v.split(' ');
      const date = getTime(...car[0].split(':'));
      const min = car[2] === 'IN' ? -date : date;
      obj.hasOwnProperty(car[1])
        ? obj[car[1]].push(min)
        : (obj[car[1]] = [min]);
    });

    Object.entries(obj).forEach(([key, value]) => {
      if (value.length % 2 !== 0) value.push(getTime(23, 59));
      let min = value.reduce((a, v) => a + v);
      if (min <= fees[0]) return answer.push([key, fees[1]]);
      answer.push([
        key,
        fees[1] + Math.ceil((min - fees[0]) / fees[2]) * fees[3],
      ]);
    });

    return answer.sort((a, b) => +a[0] - +b[0]).map((v) => v[1]);
  };
  return <div></div>;
};

export default ParkingFee;
