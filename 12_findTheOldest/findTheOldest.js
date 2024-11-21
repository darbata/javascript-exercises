const findTheOldest = function(people) {
  const CURRENT_YEAR = 2024;
  let num = people.length;
  let oldestPerson = people[0];
  let oldestAge = 0;
  if (typeof people[0].yearOfDeath !== "undefined") {
    oldestAge = people[0].yearOfDeath - people[0].yearOfBirth;
  } else {
    oldestAge = CURRENT_YEAR - people[0].yearOfBirth;
  }
  console.log(oldestPerson.name);
  for (let i = 1; i < num; i++) {
    console.log(oldestPerson.name);
    if (typeof people[i].yearOfDeath !== "undefined") {
      if ((people[i].yearOfDeath - people[i].yearOfBirth) > oldestAge) {
        oldestAge = people[i].yearOfDeath - people[i].yearOfBirth;
        oldestPerson = people[i];
        console.log(oldestPerson.name);
      }
    } else {
      if ((CURRENT_YEAR - people[i].yearOfBirth) > oldestAge) {
        oldestAge = CURRENT_YEAR - people[i].yearOfBirth;
        oldestPerson = people[i];
        console.log(oldestPerson.name);
      }
    }
  }
  return oldestPerson;
};
const people = [
  {
    name: "Carly",
    yearOfBirth: 2018,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
]
console.log(findTheOldest(people).name);
//# Exercise 12 - Find the Oldest
//
//Given an array of objects representing people with a birth and death year, return the oldest person.
//
//Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.
//
//## Hints
//- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
//- There are many ways of doing this using built-in array methods like `reduce`, or even chaining multiple! 
//- One of the tests checks for people with no death-date.. use JavaScript's Date function to get their age as of today.
// Do not edit below this line
module.exports = findTheOldest;
