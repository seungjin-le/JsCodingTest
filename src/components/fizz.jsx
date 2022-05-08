// FizzBuzz

const FizzBuzz = () => {
  function fizzBuzz(n) {
    let pizArr = [];
    for (let a = 1; a <= n; a++) {
      pizArr.push(
        a % 3 !== 0 || a % 5 !== 0
          ? a % 3 === 0
            ? "Fizz"
            : a % 5 === 0
            ? "Buzz"
            : a
          : "FizzBuzz"
      );
    }
    return pizArr;
  }
  const ns = 50;
  let arr = fizzBuzz(ns);
  return (
    <div>
      {arr?.map((v, i) => (
        <div key={i}>{v}</div>
      ))}
    </div>
  );
};
export default FizzBuzz;
