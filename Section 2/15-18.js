/* eslint-disable */ 
const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();

const copiedPerson = { ...person };
console.log('Copied Person:', copiedPerson)

const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
    console.log("From loop: " + hobby);
}

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);

const copiedArray1 = hobbies.slice()
console.log('Copied Array Slice: ' + copiedArray1)

const copiedArray2 = [...hobbies]
console.log('Copied Array Spread: ' + copiedArray2)

hobbies.push('Programming');
console.log(hobbies);

const toArray = (...args) => args;
console.log('Rest: ' + toArray(1, 2, 3, 4))
