const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

//
//
const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "camperCat", age: 10 },
];

const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});
console.log(usersObj);
