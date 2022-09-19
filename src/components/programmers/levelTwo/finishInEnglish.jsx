import React from 'react';

// 영어 끝말잇기

const FinishInEnglish = () => {
  const solution = (n, words) => {
    // 초깃값
    let answer = [0,0];
    // 끝말잇기 텍스트를 담을 배열
    let arr = [];
    // 끝말잇기 배열 words의 길이만큼 반복
    for(let a = 0, b = 0; a < words.length; a++){
      // 이전 텍스트의 마지막 글자를 변수에 할당
      const lastText = arr[arr.length-1] && arr[arr.length-1].slice(-1)
      // 현제 반복 횟수인 a를 끝말잇기 하는 인원 n으로 나눳을때 0일시 모든 인원이 한번씩 말한 b++
      if(a % n === 0) b++
      // 이전 텍스트의 마지막 글자 lastText와 현제 텍스트 words[a][0]의 첫 번째 텍스트가 다르거나
      // 현제 텍스트 words[a][0]가 이전에 한번 나왔을 경우( arr.includes(words[a]) )
      // 순서와 차례를 리턴
      if(lastText && lastText !== words[a][0] || arr.includes(words[a])){
        // 현제 끝말잇기를 하는 인원의 순서
        answer[0] = arr.length % n + 1;
        // 현제 끝말잇기를 하는 인원을 왕복한 휫수
        answer[1] = b
        return answer
      }else{
        // 끝말잇기 하는 동안 아무도 틀리지 않았을 경우 현제 텍스트 words[a]를 arr에 push
        arr.push(words[a]);
      }
    }
    // 끝말잇기가 끝날 동안 아무도 틀리지 않았을 경우 초깃값 [ 0, 0 ] 리턴
    return answer;
  }
  return (
    <div>

    </div>
  );
};

export default FinishInEnglish;
answer += obj.arr.reduce((v,i) => v+i);
if(obj.arr.length === 1) return answer;
obj.arr.reduce((v,i) => {
  console.log(v,i,v*i)
  if(v) return answer += obj.arr[i+1] * v;
  return v+i;
});
