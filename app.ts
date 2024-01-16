const animals: string [] = ['apa', 'orangutang', 'gorilla', 'get', 'giraff'];

console.log(animals);

type RandomObjType = {
    string: string;
    number: number;
    bool: boolean;
}

const randomObj: RandomObjType = {
    string: 'hello',
    number: 55,
    bool: false
};

console.log(randomObj);

const person: string = 'Robin'

function returnName(name: string): string{
    return `hello ${name}`
};

console.log(returnName(person));

animals.forEach(animal => {
    const result = returnName(animal);
    console.log(result);
});