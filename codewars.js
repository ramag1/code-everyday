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
