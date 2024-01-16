"use strict";
const animals = ['apa', 'orangutang', 'gorilla', 'get', 'giraff'];
console.log(animals);
const randomObj = {
    string: 'hello',
    number: 55,
    bool: false
};
console.log(randomObj);
const person = 'Robin';
function returnName(name) {
    return `hello ${name}`;
}
;
console.log(returnName(person));
animals.forEach(animal => {
    const result = returnName(animal);
    console.log(result);
});
