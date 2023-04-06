import React from 'react';

// 이모티콘 할인행사

const EmojiDiscount = () => {
  const solution = (users, emoticons) => {
    var answer = [];
    let discount = [];
    let arr = [];

    emoticons.map((value, index) => {
      discount[index] = [];
      for (let a = 1; a < 5; a++) {
        discount[index].push(value - value * ((a * 10) / 100));
      }
    });
    arr.push(discount.splice(0, 1)[0].map((v) => [v]));
    discount.map((v1, i1) => {
      arr[i1 + 1] = [];
      arr[i1].map((v2, i2) => {
        v1.map((v3, i3) => {
          arr[i1 + 1].push([...v2, v3]);
        });
      });
    });
    arr = arr[arr.length - 1];

    console.log(arr);
    return answer;
  };
  return <div></div>;
};

export default EmojiDiscount;

//function solution(users, emoticons) {
//     var answer = [];
//     let obj = {}
//     let arr = []
//     let test = []
//     // for(let a = 1; a < 5; a++){
//     //   //arr[a-1] = []
//     //   !obj.hasOwnProperty(a*10) && (obj[a*10] = [],
//     //       obj[a*10].push(...emoticons.map((value,index) => {
//     //     //   arr[a-1].push(value - ( value * ( a*10 / 100)))
//     //       return value - ( value * ( a*10 / 100));
//     //     })))
//     // }
//
//     emoticons.map((value,index) => {
//         arr[index] = []
//         for(let a = 1; a < 5; a++){
//             arr[index].push(value - ( value * ( a*10 / 100)))
//         }
//     })
//     test.push(arr.splice(0,1)[0].map((v) => [v]))
//     arr.map((v1,i1) => {
//         test[i1 + 1] = []
//         test[i1].map((v2,i2) => {
//             v1.map((v3,i3) => {
//                 test[i1 + 1].push([...v2,v3])
//             })
//         })
//
//     })
//     test = test[test.length - 1]
// //     arr.map((v,i) => {
// //         let test = []
// //         v.map((v1,i1) => {
//
// //         })
// //     })
// //     arr[0].map((v1,i1) => {
//
// //     })
//     // arr.map((v1,i1) => {
//     //     let x = [...v1]
//     //     v1.map((v2,i2) =>{
//     //       arr.map((v3,i3) =>{
//     //        console.log(i1,i2,i3)
//     //       })
//     //     })
//     // })
//     // Object.entries(obj).forEach(([key, value]) => );
//     // console.log(arr)
//     // arr.map((v0,i0) => {
//     //     v0[i0]
//     // })
//     // arr[0].map((v1,i1) => {
//     //   arr[1].map((v2,i2) => {
//     //       i1 !== i2 && arr[2].map((v3,i3) => {
//     //           i1 !== i3 && i2 !== i3 && arr[3].map((v4,i4) => {
//     //             i1 !== i4 &&i2 !== i4 &&i3 !== i4 &&
//     //                 answer.push([v1,v2,v3,v4])
//     //           })
//     //       })
//     //   })
//     // })
//     console.log(obj,test)
//     return answer;
// }
// // var myArr = [
// //     ["a", "b", "c"],
// //     ["d", "e", "f"],
// //     ["g", "h", "i"]
// // ];
//
// // for (var el1 in myArr[0]) {
// //     for (var el2 in myArr[1]) {
// //         for (var el3 in myArr[2]) {
// //             console.log(myArr[0][el1]+', '+myArr[1][el2]+', '+myArr[2][el3]);
// //         }
// //     }
// // }
