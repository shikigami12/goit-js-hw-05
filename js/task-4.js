/**
 * Calculates the total balance for users of a specific gender.
 *
 * @param {Array} users - The array of user objects, where each object represents a user.
 * @param {string} gender - The gender to filter users by (e.g., 'male', 'female').
 * @returns {number} The total balance of all users matching the specified gender.
 */
const getTotalBalanceByGender = (users, gender) => users
    .filter(user => user.gender === gender)
    .reduce((total, user) => total + user.balance, 0);


const clients = [{
    name: 'Moore Hensley', gender: 'male', balance: 2811,
}, {
    name: 'Sharlene Bush', gender: 'female', balance: 3821,
}, {
    name: 'Ross Vazquez', gender: 'male', balance: 3793,
}, {
    name: 'Elma Head', gender: 'female', balance: 2278,
}, {
    name: 'Carey Barr', gender: 'male', balance: 3951,
}, {
    name: 'Blackburn Dotson', gender: 'male', balance: 1498,
}, {
    name: 'Sheree Anthony', gender: 'female', balance: 2764,
}, {
    name: 'test', balance: 2764000,
}];

console.log(getTotalBalanceByGender(clients, 'male')); // 12053

console.log(getTotalBalanceByGender(clients, 'female')); // 8863
console.log(getTotalBalanceByGender(clients, 'test')); // 0