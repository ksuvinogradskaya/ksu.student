// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// Пример работы:
// console.log(calculateFinalPrice(100, 10, 0.2)); // 108
// console.log(calculateFinalPrice(100, 10, 0)); // 90

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// Пример работы:
// console.log(findFirstEven(1, 10)); // 2
// console.log(findFirstEven(9, 9)); // "Чётных чисел нет"

// Задача 1
function calculateFinalPrice1(productPrise, discountPercentage, taxRate) {
	const discountAmount = productPrise * (discountPercentage / 100);
	const priceDiscount = productPrise - discountAmount;
	const tax = priceDiscount * taxRate;
	return finalPrise = priceDiscount + tax;
}

console.log(calculateFinalPrice1(100, 10, 0.2));

const calculateFinalPrice = (productPrise, discountPercentage, taxRate) => {
	const discountAmount = productPrise * (discountPercentage / 100);
	const priceDiscount = productPrise - discountAmount;
	const tax = priceDiscount * taxRate;
	return finalPrise = priceDiscount + tax;
}

console.log(calculateFinalPrice(100, 10, 0));

//Задача 2.
function checkAccess1(userName, userPassword) {
	if (userName === "admin" && userPassword === "123456") {
		return "Доступ разрешен";
	} else {
		return "Доступ запрещен";
	}
}

console.log(checkAccess1("admin", "123456"));

function checkAccess2(userName, userPassword) {
	return userName === "admin" && userPassword === "123456"
		? "Доступ разрешен"
		: "Доступ запрещен";
}

console.log(checkAccess2("admin", "1234562"));

const checkAccess3 = (userName, userPassword) =>
	userName === "admin" && userPassword === "123456"
		? "Доступ разрешен"
		: "Доступ запрещен";

console.log(checkAccess3("admins", "123456"));

// Задача 3

function getTimeOfDay(currentTime) {
	switch (true) {
		case currentTime >= 0 && currentTime <= 5:
			return "Ночь";
			break;
		case currentTime >= 6 && currentTime <= 11:
			return "Утро";
			break;
		case currentTime >= 12 && currentTime <= 17:
			return "День";
			break;
		case currentTime >= 18 && currentTime <= 23:
			return "Вечер";
			break;
		default:
			return "Некорректное время";
	}
}

console.log(getTimeOfDay(15));

const getTimeOfDay1 = (currentTime) => {
	switch (true) {
		case currentTime >= 0 && currentTime <= 5:
			return "Ночь";
			break;
		case currentTime >= 6 && currentTime <= 11:
			return "Утро";
			break;
		case currentTime >= 12 && currentTime <= 17:
			return "День";
			break;
		case currentTime >= 18 && currentTime <= 23:
			return "Вечер";
			break;
		default:
			return "Некорректное время";
	}
};

console.log(getTimeOfDay1(6));

// Задача 4
function findFirstEven(start, end) {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return "Чётных чисел нет";
}

console.log(findFirstEven(1, 10));

const findFirstEven1 = (start, end) => {
	for (let i = start; i <= end; i++) {
		if (i % 2 === 0) {
			return i;
		}
	}
	return "Чётных чисел нет";
};

console.log(findFirstEven1(5, 16));
