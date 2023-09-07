const findTheOldest = function (people) {
  const getAge = (person) =>
    (person.yearOfDeath ?? new Date().getFullYear()) - person.yearOfBirth;

  return people.reduce(
    (oldest, person) => (getAge(person) > getAge(oldest) ? person : oldest),
    people[0]
  );
};

// Do not edit below this line
module.exports = findTheOldest;
