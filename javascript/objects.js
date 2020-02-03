// Object and array syntax

// Object literal
const point = {x:1, y:2}

// Changing properties
point.x = 3;

// Nested object literal
const circle = {
  center: point,
  radius: 4
};

// Access subproperties
console.log(circle.center.x);

// undefined subproperties
console.log(circle.color);

circle.color = 'blue';
console.log(circle);

//array
const languages = ['HTML', 'CSS', 'JS'];
console.log(languages);

// Accessing lenth and elements
for (let i=0; i< languages.length; i++){
  console.log(languages[i]);
}

// Changing elements
languages[2] = 'JavaScript';

// Adding elements
languages.push('MongoDB');

// Iterating over elements
for(const lang of languages) {
  console.log(lang)
}
