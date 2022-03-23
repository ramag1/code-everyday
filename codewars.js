// function maskify(str) {
// 	let newArr = str.split('');

// 	let maskArr = [];
// 	for (i = 0; i < newArr.length; i++) {
// 		if (i < newArr.length - 4) {
// 			maskArr[i] = '#';
// 		} else {
// 			maskArr[i] = newArr[i];
// 		}
// 	}
// 	let mask = maskArr.join('');
// 	return mask;
// }

// console.log(maskify('123344578098698665587'));

// function numberToString(num) {
//     return String(num)
// }

// console.log(numberToString(12345))

// function remainder(n, m) {
// 	if (n > m) {
//         return n % m;
//     } else {
//         return m % n;
//     }
// }

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"

// function hello(name) {
// 	if (name !== '') {
// 		return (
// 			'Hello, ' +
// 			name.charAt(0).toUpperCase() +
// 			name.slice(1).toLowerCase() +
// 			'!'
// 		);
// 	} else {
// 		return 'Hello, World!';
// 	}
// }
// console.log(hello('asdflLASDKLIONG'));

// const areaOrPerimeter = function (l, w) {
// 	if (l === w) {
//         return l * 4;
//     } else {
//         return l *w;
//     }
// };

// console.log((areaOrPerimeter(4 , 4)));

// const ReverseString = (str) => {
// 	let arr = str.split('');
// 	let newArr = [];
// 	for (let i = arr.length - 1; i > -1; i--) {
// 		newArr.push(arr[i]);
// 	}
// 	// console.log(newArr);
// 	let rev = newArr.join('');
// 	console.log(rev);
// 	return rev;
// };

// ReverseString('Hello I am Rachel');

// takes 2 parameters, arr1, arr2
// join 2 arrays
// implement bubble sort - While Loop
// 	Sorted = True
// 	start at idx 0, compare to current idx + 1
// 	if current idx < next idx, slide down to the next idx position, Sorted = true
// 	if current idx > next idx, current idx data and move to the next position
// 	slide down to the next idx Sorted = false
// 	As long as sorted is false, continue to loop
// 	Once loop completes and sorted stays true, break loop
// return the final array

// function mergeSortedArrays(arr1, arr2) {
// 	let sortedArr = arr1 + arr2;
// 	console.log(sortedArr);
// }


// mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]);

// function twoSum(numbers, target) {
// 	for (var i = 0; i < numbers.length - 1; i++) {
// 		for (var j = i + 1; j < numbers.length; j++) {
// 			if (numbers[i] + numbers[j] === target) return [i, j];
// 		}
// 	}
// }

// function returnRecurring(input) {
// 	let map = {};
// 	for (let i = 0; i < input.length; i++) {
// 		if (map[input[i]] !== undefined) {
// 			return input[i]
// 		} else {
// 			map[input[i]] = i
// 		}
// 		console.log(map);
// 	}
// 	return undefined;
// }

// returnRecurring([1, 2, 4, 3, 1, 5, 3, 4]);
// function firstRecurringCharacter(input) {
// 	for (let i = 0; i < input.length; i++) {
// 		for (let j = i + 1; j < input.length; j++) {
// 			if (input[i] === input[j]) {
// 				return input[i];
// 			}
// 		}
// 	}
// 	return undefined;
// }
// console.log(firstRecurringCharacter([1, 5, 5, 1, 3, 4, 6]));

// function firstRecurringCharacter2(input) {
// 	let map = {};
// 	for (let i = 0; i < input.length; i++) {
// 		console.log()
// 		if (map[input[i]] !== undefined) {
// 			return input[i];
// 		} else {
// 			map[input[i]] = i;
// 		}
// 	}
// 	return undefined;
// }
// console.log(firstRecurringCharacter2([1, 5, 5, 1, 3, 4, 6]));


// function powersOfTwo(n) {
// 	let answerArray = [1];
// 	for (let i = 1; i <= n; i++) {
// 		answerArray.push(2 ** i);
// 	}
// 	return answerArray;
// }

//function takes 1 input, a number
//create a for loop that iterates up to the value of input
//for each iteration, push 2^i to the array
//return the array


// function lovefunc(flower1, flower2) {
// 	let flow1;
// 	let flow2;
// 	if (flower1 % 2 === 0) {
// 		flow1 = true
// 	} else {
// 		flow1 = false
// 	} 
// 	if (flower2 % 2 === 0) {
// 		flow2 = true;
// 	} else {
// 		flow2 = false;
// 	} 
// 	if (flow1 === flow2) {
// 		return false
// 	} else {
// 		return true
// 	}
// }

// function solution(digits) {
// 	let biggestnum = [];
// 	for (let i = 0; i < digits.length - 4; i++) {
// 		let elements = [
// 			parseInt(digits[i]),
// 			parseInt(digits[i + 1]),
// 			parseInt(digits[i + 2]),
// 			parseInt(digits[i + 3]),
// 			parseInt(digits[i + 4]),
// 		];
// 		let joined = elements.join('');
// 		biggestnum.push(parseInt(joined));
// 	}
// 	biggestnum.sort();
// 	return biggestnum[biggestnum.length - 1];
// }

// function partlist(arr) {
//   let listArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     listArr.unshift(arr.splice(i, (arr.length - (i-1)),))
//     console.log(listArr)
//     // listArr.push(arr.slice(i))
//     // console.log(listArr)
//   }
//   console.log(listArr)
// }

// console.log(partlist(["az", "toto", "picaro", "zone", "kiwi"]))

// function filter_list(l) {
// 	return l.filter(Number.isInteger);
// }

// function shortcut(str) {
// 	const newStrArr = str.split('');
// 	const vowels = ['a', 'e', 'i', 'o', 'u'];
// 	const vowelFreeArr = [];
// 	console.log(newStrArr);
// 	for (let i = 0; i < newStrArr.length; i++) {
// 		if (!vowels.includes(newStrArr[i])) {
// 			vowelFreeArr.push(newStrArr[i]);
// 		}
// 	}
// 	console.log(vowelFreeArr);
// 	return vowelFreeArr.join('');
// }

// function shortcut (string) {
// 	let newStr;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === 'a' || 'e' || 'i' || 'o' || 'u') {
//       newStr = string.substr(i)
//       console.log(newStr)
//     }
// 	return newStr
//   }
// }
// console.log(shortcut("hello"))

// function shortcut(string) {
// 	const noVowels = string.replace(/[aeiou]/gi, ''); // open an dclosing slashes indicate beginning and end of regular expression. the [] brackets are called a character class that serves as the criteria for what we are looking for, the g means global flag so that it does not stop at just the first occurance, and the i flag makes this non case sensitive
// 	return noVowels;
// }

// function swap(str) {
// 	let newTxt = '';
// 	str.split('').map((e) => {
// 		//grab string, split to array, then map
// 		if (e == e.toUpperCase()) {
// 			//if each is equal to upper
// 			newTxt += e.toLowerCase(); //add it to newTxt string as lowercase
// 		} else {
// 			newTxt += e.toUpperCase(); //reverse from above
// 		}
// 	});
// 	return newTxt; //return the new string
// }

// console.log(swap('Hello THERE! We Have A GREAT DaY!'));

// function vowelChange(str, vow) {
// 	let replace = str.replace(/[aeiou]/gi, vow);
// 	return replace;
// }

// console.log(
// 	vowelChange(
// 		'Hannah Hannah bo-bannah Banana fanna fo-fannah Fee, fy, mo-mannah. Hannah!',
// 		'i'
// 	)
// );

function spacify(str) {
	let arr = str.split('');
	let spaceStr = arr.join(' ');
	return spaceStr;
}

console.log(spacify('hello there'));