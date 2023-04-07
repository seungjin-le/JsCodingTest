import React from 'react';

// 이모티콘 할인행사

const EmojiDiscount = () => {
  const solution = (users, emoticons) => {
    // 이모티콘 각각에 10% ~ 40% 할인을 적용했을 때 이모티콘 플러스 가입 여부와
    // 이모티콘 결제 금액의 경우의 수를 모두 담을 이차원 배열
    let answer = [];

    // 이모티콘 마다 10% ~ 40%의 할인된 가격을담은 이차원 배열
    // ex ) 	discount = [
    // 1번 이모티콘 =  [ [ 10, 1170 ], [ 20, 1040 ], [ 30, 910 ], [ 40, 780 ] ],
    // 2번 이모티콘 =  [ [ 10, 1350 ], [ 20, 1200 ], [ 30, 1050 ], [ 40, 900 ] ],
    // 3번 이모티콘 =  [ [ 10, 1440 ], [ 20, 1280 ], [ 30, 1120 ], [ 40, 960 ] ],
    // 4번 이모티콘 =  [ [ 10, 4410 ], [ 20, 3920 ], [ 30, 3430 ], [ 40, 2940 ] ]
    // ]
    let discount = [];

    // 이모티콘들의 할인된 가격들의 모든 경우의 수룰 조합할 이차원 배열
    let arr = [];

    // 이모티콘의 정상가가 담긴 배열을 순회
    emoticons.map((value, index) => {
      // discount의 index번째 요소를 빈배열로 선언
      discount[index] = [];
      // for문을 통해 4번 반복
      for (let a = 1; a < 5; a++) {
        // discount의 index 번째 배열에 [ 할인율( a * 10 ),  할인가( value - (a * value) / 10 ) ]를 추가
        // for 문을 통해 10% ~ 40%까지 discount[index]에 추가
        discount[index].push([a * 10, value - (a * value) / 10]);
      }
    });
    // arr에 discount의 첫번째 요소( 1번 이모티콘의 10% ~ 40%할인가가 담긴 배열 )을 추가
    arr.push(discount.splice(0, 1)[0].map((v) => [v]));

    // 2번째 이모티콘 할인가가 담긴 배열 discount순회
    discount.map((v1, i1) => {
      // arr의 마지막 요소와 discount의 조합을 담을 배열
      // ex ) arr[i1] = [ [ 10, 1170 ] ,[ 20, 1040 ] ,[ 30, 910 ] ,[ 40, 780 ] ]
      // ex ) v1 = 	[ [ 10, 1350 ], [ 20, 1200 ], [ 30, 1050 ], [ 40, 900 ] ]
      let combi = [];

      // arr의 i1번째 요소인 이차원 배열 순회
      arr[i1].map((v2) => {
        // 2번 이모티콘부터 할인가가 담긴 배열 v1순희
        v1.map((v3) => {
          // arr의 i1번째 요소에 v1의 요소들을 전부 조합
          // ex )
          //  v2 = [ 10, 1170 ]
          //  v1 = 	[ [ 10, 1350 ], [ 20, 1200 ], [ 30, 1050 ], [ 40, 900 ] ]
          //  combi = [
          //    [ 1번째 이모티콘의 할인가, 2번째 이모티콘의 할인가 ]
          //    [ [ 10, 1170 ], [ 10, 1350 ] ],
          //    [ [ 10, 1170 ], [ 20, 1200 ] ],
          //    [ [ 10, 1170 ], [ 30, 1050 ] ],
          //    [ [ 10, 1170 ], [ 40, 900 ] ]
          //  ]
          combi.push([...v2, v3]);
        });
      });

      // arr에 이모티콘들의 할인가를 조합한 combi 룰 추가
      arr.push(combi);
    });

    // arr의 마지막 요소는 모든 이모티콘들의 할인가의 조합이 담긴 요소이기 때문에
    // 마지막 요소인 이차원 배열 순회
    arr[arr.length - 1].map((v1) => {
      // counts = [ 모든 유저들의 이모티콘 플러스 가입인원, 모든 유저들의 이모티콘 구매비용 ]
      let counts = [0, 0];

      // 유저들의 정보가 담긴 배열 순회
      users.map((v2) => {
        // ex) v1 = [ 1번 이모티콘 [ 10, 1170 ], 2번 이모티콘 [ 10, 1350 ], 3번 이모티콘 [ 10, 1440 ], 4번 이모티콘 [ 10, 4410 ] ]
        // ex) v2 = [ 40( 특정 할인율 이상의 이모티콘만 구매 ), 2900( 유저의 소지 금액 ) ]
        // 1번 이모티콘부터 마지막 이모티콘의 할인가가 조합된 이차원 배열 v1을 filter 함수로 순회하면서
        // 유저가 정해둔 할인율( v2[0] )보다 큰 값만 추려내 변수 새로운 변수 filter 선언
        const filter = v1.filter((v3) => v3[0] >= v2[0]);

        // 유저가 정해둔 할인률보다 큰 값이 없을땐 다음 유저로 이동
        if (filter.length === 0) return;

        // filter의 임모티콘들의 가격을 전부 합산
        const price = filter.map((v) => v[1]).reduce((a, b) => a + b);

        // 합산한 가격이 유저의 소지 금액보다 클 시 이모티콘 플러스를 가입( counts[0]++ )
        // 유저의 자본보다 작을 시 모든 유저들의 이모티콘 구매 비용에 더해줍니다( counts[1] += price)
        price >= v2[1] ? counts[0]++ : (counts[1] += price);
      });
      // answer에 이모티콘들의 특정 할인을 적용했을 시 발생하는 이모티콘 플러스 가입인원과, 가입비용이 담긴 배열을 push
      answer.push(counts);
    });

    // answer을 이모티콘 플러스 가입자가 큰 수부터 내림차순으로 정렬하면서
    // 만약 이모티콘 플러스 가입자가 같으면 이모티콘 구입 비용이 큰 수부터 내림차순으로 정렬 후
    // 그중 마지막 요소를 리턴
    return answer.sort((a, b) =>
      b[0] === a[0] ? b[1] - a[1] : b[0] - a[0]
    )[0];
  };

  return <div></div>;
};

export default EmojiDiscount;
