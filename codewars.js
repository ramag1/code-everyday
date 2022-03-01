// function maskify(str) {
// 	let arr = str.split(''); //split the string into an array
// 	console.log(arr);
// 	console.log(arr.length);
// 	let newArr = []; //set up new array to push characters to
// 	console.log(`new arr ${newArr}`);

// 	if (arr.length <= 4) {
// 		return arr.join('');
// 	} else {
// 		for (let i = 0; i < arr.length; i++) {
// 			if (arr[i].index < arr.length - 3) {
// 				newArr.push('#');
// 				console.log(newArr);
// 			} else {
// 				newArr.push(arr[i]);
// 				console.log(`new array ${newArr}`);
// 			}
// 			let newStr = newArr.join('');
// 			console.log(` newstr ${newStr}`);
// 		}
// 	}
// }

// maskify('12334623465');

// function numberToString(num) {
//     return String(num)
// }

// numberToString(12345)

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


const areaOrPerimeter = function (l, w) {
	if (l === w) {
        return l * 4;
    } else {
        return l *w;
    }
};

console.log((areaOrPerimeter(4 , 4)));