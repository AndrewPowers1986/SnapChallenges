console.log('hello world')
let name = 'Sue'
console.log(name)
let age = 18
console.log(age)

// arrays start with index number 0
let people = ['Marty', 'Anais', 'Jonathan', 'Andrew']
console.log(people)
console.log(people[2])

// objects
let person = {
    name: 'Anais',
    status: 'bootcamper',
    hobby: 'cooking',
    code: function() {console.log('develop website')}
}

console.log(person)
console.log(person.status)
person.code()
console.log('')

class Person {
    constructor(name, status, hobby) {
        this.name = name;
        this.status = status;
        this.hobby = hobby;
    }

    introduction() {
        console.log('My name is ' + this.name);
    }

    declaration() {
        console.log('I am a(n) ' + this.status);
    }

    likes() {
        console.log('I enjoy ' + this.hobby);
    }

    code() {
        console.log('develop website');
    }
}

let person1 = new Person('Anais', 'bootcamper', 'cooking');
let person2 = new Person('Marty', 'instructor', 'snowboarding');
let person3 = new Person('Jonathan', 'bootcamper', 'hiking');
let person4 = new Person('Andrew', 'bootcamper', 'boardgaming');
let bootcamp = [person1, person2, person3, person4];

for(let i = 0; i < 4; i++) {
    bootcamp[i].introduction();
    bootcamp[i].declaration();
    bootcamp[i].likes();
    console.log('');
}