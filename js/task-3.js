/**
 * A function that sorts an array of user objects in descending order based on the length of their `friends` array.
 *
 * @param {Object[]} users - An array of user objects to be sorted.
 * @param {Object} users[].friends - The array of friends associated with a user object.
 * @returns {Object[]} A new array where user objects are sorted by descending friend count.
 */
const sortByDescendingFriendCount = users => users.sort((a, b) => b.friends.length - a.friends.length);


console.log(sortByDescendingFriendCount([{
    name: 'Moore Hensley', friends: ['Sharron Pace'], gender: 'male',
}, {
    name: 'Sharlene Bush', friends: ['Briana Decker', 'Sharron Pace'], gender: 'female',
}, {
    name: 'Ross Vazquez', friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'], gender: 'male',
}, {
    name: 'Elma Head', friends: ['Goldie Gentry', 'Aisha Tran'], gender: 'female',
}, {
    name: 'Carey Barr', friends: ['Jordan Sampson', 'Eddie Strong'], gender: 'male',
}, {
    name: 'Blackburn Dotson', friends: ['Jacklyn Lucas', 'Linda Chapman'], gender: 'male',
}, {
    name: 'Sheree Anthony', friends: ['Goldie Gentry', 'Briana Decker'], gender: 'female',
}]));
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]