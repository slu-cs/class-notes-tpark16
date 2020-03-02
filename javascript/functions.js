// Function syntax

// Function definition
const avg = function(a,b) {
  return (a + b) / 2;
};

// Another definition
const print = function(a,b) {
  console.log(`a=${a}, b=${b}`);
};

// undefined values
const result = print(7,8);
console.log(result);
print(9);
print();

const labs = [
  {location: 'Bewkes 107', seats: 15},
  {location: 'Bewkes 109', seats: 25},
  {location: 'Bewkes 144', seats: 7}
];

const seat = console.log(labs.filter(x => x.seats > 10));

const sorted = console.log(labs.sort(function(a, b){
  return a - b;
}));
