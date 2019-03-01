class Person {
    constructor(name = 'Anonymous', age = 0) {
        // this refers to a class instance
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return "Hi, I'm ${this.name}";
    }

    getDescription() {
        return "${this.name} is ${this.age} year(s) old"
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor () {
        // use this technique to define a boolean based on a string value
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description+= "Their major is ${this.major}"; + 
        }
        return 'testing';
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super (name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greed = super.getGreeting(); 
        if (this.homeLocation) {
            greed += "I'm visiting from ${this.homeLocation}";
        }
    }    
}

//const me = new Person('Mariano', 54);
const me = new Student('Mariano', 54, 'Computer Science');

