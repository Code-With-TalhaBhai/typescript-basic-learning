"use strict";
// Data types
const str = "abdvsdkls";
console.log(str);
const num = 234;
console.log(num);
const bool = true;
console.log();
const arr = [23, 4324, 53252];
console.log(arr);
const unionStr = '23';
console.log(unionStr);
const unionNum = 23;
console.log(unionNum);
const nul1 = null;
console.log(nul1);
let nul2;
const UnDefined = undefined;
console.log(UnDefined);
// Set of related Values
var Author;
(function (Author) {
    Author["Book"] = "Think & Grow Rich";
    Author[Author["Pages"] = 234] = "Pages";
})(Author || (Author = {}));
Author.Book; //Think & Grow Rich
console.log(Author.Book);
console.log(Author.Pages);
// Special kind of array all data types inside array already defined
const Tuples = ['check', 234, false];
console.log(Tuples);
const literal = 'Right';
console.log(literal);
let dynamic = 'jfdksla';
dynamic = true;
console.log(dynamic);
let object;
object = {
    name: 'fjdksl',
    age: 234
};
console.log(object);
function sum(a, b) {
    return Number(a) + Number(b);
}
;
console.log(sum('432', '654'));
console.log(sum('fdsl', 'jkflds'));
const obj = {
    Name: 'bhai',
    gender: 'F',
    Age: 23,
    func1: function (a, b) {
        return a + b;
    },
    func2: (a, b) => {
        return a + b;
    }
};
console.log(obj);
console.log(obj.func1('fdsk', '43543'));
console.log(obj.func2(234, 432));
const animal = {
    name: 'Jack'
};
console.log();
const dog = {
    name: 'Dog',
    maxAge: 234
};
console.log(dog);
