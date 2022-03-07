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

const ReverseString = (str) => {
	let arr = str.split('');
	let newArr = [];
	for (let i = arr.length - 1; i > -1; i--) {
		newArr.push(arr[i]);
	}
	// console.log(newArr);
	let rev = newArr.join('');
	console.log(rev);
	return rev;
};

ReverseString('Hello I am Rachel');
