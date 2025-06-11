// const user = {
//     firstName: 'Ksenia',
//     lastName: 'Vinogradskaya',
//     age: 32,
//     sayHello(firstName) {
//         console.log(`Hello ${firstName}`)
//     } 
// }
// user.sayHello('Ksenia')

const users = [
    {
        firsName: 'Ksenia',
        lastName: 'Vinogradskaya',
        age: 32,
        isAdmin: true,
    },
    {
        firsName: 'Nikita',
        lastName: 'Ivanov',
        age: 32,
        isAdmin: false,
    },
    {
        firsName: 'Svetlana',
        lastName: 'Ivanov',
        age: 52,
        isAdmin: false,
    }
    
]

let ordinaryUsersCount = 0

for (i=0; i < users.length; i++) {
    if ( users[i].isAdmin !== true) {
        ordinaryUsersCount++;
    }
}

console.log (`Число обычных пользователей ${ordinaryUsersCount}`)