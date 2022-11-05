"use strict";
class Employee {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    ;
    dept() {
        console.log(`My ID is ${this.id}, and my name is ${this.name} and my city is ${this.city}`);
    }
}
;
const emp1 = new Employee('sdk23', 'talha', 'lahore');
console.log(emp1);
emp1.dept();
emp1.id = '4j32kl';
emp1.dept();
// shorter way
class Boss {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    dept() {
        console.log(`My ID is ${this.id}, and my name is ${this.name} and my city is ${this.city}`);
    }
}
;
const boss1 = new Boss('sdkfjkds23', 'TALHA', 'LHR');
console.log(boss1);
boss1.dept();
boss1.id = '4j32kl';
boss1.dept();
class guy {
    constructor(id, name, city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }
    dept() {
        console.log(`My ID is ${this.id}, and my name is ${this.name} and my city is ${this.city}`);
    }
}
;
class beastGuy extends guy {
    constructor(id, name, city, power) {
        super(id, name, city);
        this.power = power;
    }
    dept() {
        // city cannot be used as it is private
        console.log(`My ID is ${this.id}, and my name is ${this.name} and my city is ${this.name} and my power is ${this.power}`);
    }
}
const beastGuy1 = new beastGuy('sdkfjkds23', 'TALHA', 'LHR', 23432423);
console.log(beastGuy1);
beastGuy1.dept();
beastGuy1.id = '4j32kl';
beastGuy1.dept();
