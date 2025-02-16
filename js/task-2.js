/**
 * Filters and returns a list of users who have a specific friend in their friends list.
 *
 * @function
 * @param {Array<Object>} users - An array of user objects. Each user object must have a 'friends' property which is an array of strings.
 * @param {string} friendName - The name of the friend to search for in the friends list of each user.
 * @returns {Array<Object>} - An array of user objects who have the specified friend's name in their friends list.
 */
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.includes(friendName));

const allUsers = [{
    name: 'Moore Hensley', friends: ['Sharron Pace'],
}, {
    name: 'Sharlene Bush', friends: ['Briana Decker', 'Sharron Pace'],
}, {
    name: 'Ross Vazquez', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
}, {
    name: 'Elma Head', friends: ['Goldie Gentry', 'Aisha Tran'],
}, {
    name: 'Carey Barr', friends: ['Jordan Sampson', 'Eddie Strong'],
}, {
    name: 'Blackburn Dotson', friends: ['Jacklyn Lucas', 'Linda Chapman'],
}, {
    name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker'],
}];

console.log(getUsersWithFriend(allUsers, 'Briana Decker'));
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Goldie Gentry'));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // []