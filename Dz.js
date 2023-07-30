// DZ 1 - 5 строка
// DZ 2 - 44 строка
// DZ 3 - 122 строка

// DZ 1 

let min;
let max;
let avg;

let getArrayParams = (...arr) => {

	//   Вывести минимум
	for (let i = 0; i < arr.length; i++) {
		min = Math.min(...arr)
	}

	//   Вывод максимума
	for (let i = 0; i < arr.length; i++) {
		max = Math.max(...arr)
	}

	//   Вывод среднего знач
	let sumCount = 0;
	for (let i = 0; i < arr.length; i++) {
		sumCount += arr[i];
		avg = sumCount / arr.length;
	}

	return {
		min,
		max,
		avg
	}
}

getArrayParams(0, 1, 2, 3, 4, 5, 6, 7, 8);

let result = getArrayParams();
console.log(`Минимальное значение: ${result.min}`);
console.log(`Максимальное значение: ${result.max}`);
console.log(`Среднее значение: ${result.avg}`);

// DZ -2

// Сложение элементов
let summElementsWorker = (...arg) => {
	let summElement = 0;

	for (let i = 0; i < arg.length; i++) {
		summElement += arg[i]
	}


	if (!arg.length) {
		return 0
	} else {
		return summElement
	}
}

// Разница Макс - Мин
let differenceMaxMinWorker = (...arg) => {
	let min;
	let max;

	min = Math.min(...arg);
	max = Math.max(...arg);

	if (!arg.length) {
		return 0
	} else {
		return max - min;
	}
}

// разницы сумм чётных и нечётных
let differenceEvenOddWorker = (...arg) => {

	let evenSum = 0;
	let oddSum = 0;

	for (let i = 0; i < arg.length; i++) {
		if (arg[i] % 2 == 0) {
			evenSum += arg[i]
		} else {
			oddSum += arg[i]
		}
	}
	if (!arg.length) {
		return 0
	} else {
		return evenSum - oddSum;
	}
}

// среднее значение чётных элементов
let averageEvenElementsWorker = (...arg) => {

	let evenSum = 0;
	let eventCount = 0;

	for (let i = 0; i < arg.length; i++) {
		if (arg[i] % 2 == 0) {
			evenSum += arg[i];
			eventCount++
		}
	}

	if (!arg.length) {
		return 0
	} else {
		return evenSum / eventCount
	}
}

console.log("Сложение элементов: " + summElementsWorker());
console.log("Разница Макс - Мин: " + differenceMaxMinWorker(1, 2, 3, 4, 5));
console.log("Разницы сумм чётных и нечётных: " + differenceEvenOddWorker(1, 2, 3, 4, 5));
console.log("Среднее значение чётных элементов: " + averageEvenElementsWorker(1, 2, 3, 4, 5));

// DZ 3

let arr = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 17]
]

let maximumArr = (array, func) => {

	let maximum = func(...array[0]);

	for (let i = 1; i < array.length; i++) {
		const funcRes = func(...array[i])
		if (funcRes > maximum) {
			maximum = funcRes;
		}
	}

	return maximum;
}



console.log(maximumArr(arr, differenceMaxMinWorker));
