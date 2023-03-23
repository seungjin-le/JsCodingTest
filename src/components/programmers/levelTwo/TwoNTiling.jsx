const TwoNTiling= () => {
  const solution = (n) => {
    let arr = [0,1,2]
    if(n <= 3) return n
    for(let i = 2; i < n; i++){
      arr[0] = (arr[1] + arr[2]) % ( 10** 9 + 7);;
      arr[1] = arr[2];
      arr[2] = arr[0];
    }
    return arr[0];
  }
  // 1->1
  // 2->2
  // 3->3
  // 4->5
  // 5->8
  // 6->13
  // 7->21
  // 8->34
  // 9->55
  // 10->59
  // 11->144
  // 12->233
  // 52->316290802
  return TwoNTiling
}
export default TwoNTiling

