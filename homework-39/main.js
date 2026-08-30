// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

// Задача 1.
const person = {
	name: "kseniya",
	surname: "Ivanova",
	age: 32,
	hobby: "Котики",
	work: "programmer",
};

for (const key in person) {
	console.log(person[key]);
}

// console.log(person);

// Задача 2
const person = {
	name: "kseniya",
	surname: "Ivanova",
	age: 32,
	hobby: "Котики",
	work: "programmer",
};

function isEmpty(obj) {
	for (const key in obj) {
		return false;
	}
	return true;
}

console.log(isEmpty(person));

// Задача 3.
const task = {
	title: "Семья",
	description: "Дети",
	isCompleted: false,
};

function cloneAndModify(object, modifications) {
	return { ...object, ...modifications };
}

const updatedTask = cloneAndModify(task, {
	isCompleted: true,
});

for (const key in updatedTask) {
	console.log(`${key}: ${updatedTask[key]}`);
}


// Задача 4
