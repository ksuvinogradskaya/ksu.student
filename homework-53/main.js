// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

//Задание 1.
const users = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
];

users.push(
	{
		name: "Ann",
		age: 19,
		isAdmin: false,
	},
	{
		name: "Jack",
		age: 43,
		isAdmin: true,
	},
);

console.log(users);

// Задание 2.
const users1 = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
];

function getUserAverageAge(users1) {
	let sum = 0;
	for (let i = 0; i < users1.length; i++) {
		sum += users1[i].age;
	}
	return (average = sum / users1.length);
}

console.log(getUserAverageAge(users1));

//Задача 3.
const users3 = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
];

function forEach(array, callback) {
	for (let i = 0; i < array.length; i++) {
		callback(array[i]);
	}
}

function getAllAdmins(users) {
	const admins = [];
	forEach(users, function (user) {
		if (user.isAdmin === true) {
			console.log(`Найден админ ${user.name}`);
			admins.push(user);
		}
	});
	return admins;
}

const result = getAllAdmins(users3);
console.log("Итоговый массив админов:", result);

// Задача 4
const users4 = [
	{ name: "Alex", age: 24, isAdmin: false },
	{ name: "Bob", age: 13, isAdmin: false },
	{ name: "John", age: 31, isAdmin: true },
	{ name: "Jane", age: 20, isAdmin: false },
	{ name: "Ann", age: 19, isAdmin: false },
	{ name: "Jack", age: 43, isAdmin: true },
];

function first(arr, n) {
	if (n == 0) {
		return [];
	}
	if (n == undefined) {
		return [arr[0]];
	}
	if (n > arr.length) {
		console.error(`${n} не может быть больше длинны массива:${arr.length}`);
	}

	const result1 = [];

	for (let i = 0; i < arr.length; i++) {
		result1.push(arr[i]);
	}

	return result1;
}

console.log(first(users4, 8));
