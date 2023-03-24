// 큰 수 만들기

const MakingBigNumber = () => {
	// 테스트 케이스 9, 10 런타임 에러
	const solution = (number, k) => {
		let answer = [];
		let arr = [...number];
		while (arr.length && k > 0) {
			answer.push(arr.shift());
			while (answer[answer.length - 1] < arr[0] && k > 0) {
				answer.pop();
				k--;
			}
		}

		answer.push(...arr);
		return k !== 0 ? answer.slice(0, -k).join('') : answer.join('');
	};

	const test = (number, k) => {
		let stack = [];
		let arr = number.split('').reverse();
		while (arr.length && k > 0) {
			stack.push(arr.pop());
			while (stack[stack.length - 1] < arr[arr.length - 1] && k > 0) {
				stack.pop();
				k = k - 1;
			}
		}
		if (k !== 0) stack = stack.slice(0, -k);
		return stack.join('') + arr.reverse().join('');
	};
	return;
};

export default MakingBigNumber;
