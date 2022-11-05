
// Data types
const str:string = "abdvsdkls";
console.log(str)

const num:number = 234;
console.log(num)

const bool:boolean = true;
console.log()

const arr:number[] = [23,4324,53252];
console.log(arr)

const unionStr:string | number = '23';
console.log(unionStr)
const unionNum:string | number = 23; 
console.log(unionNum)


const nul1:null = null;
console.log(nul1)

let nul2:null;



const UnDefined:undefined = undefined;
console.log(UnDefined)


// Set of related Values
enum Author {
    Book = 'Think & Grow Rich',
    Pages = 234
}

Author.Book; //Think & Grow Rich
console.log(Author.Book)
console.log(Author.Pages)


// Special kind of array all data types inside array already defined
const Tuples : [string,number,boolean] = ['check',234,false];
console.log(Tuples)



const literal : 'Right' | 'Left' = 'Right';
console.log(literal)


let dynamic: any = 'jfdksla';
    dynamic = true;
    console.log(dynamic)




let object : {
    name: string;
    age: number;
}

object = {
    name: 'fjdksl',
    age: 234
};
console.log(object)


function sum(a:string,b:string):number{
    return Number(a)+Number(b);
};
console.log(sum('432','654'));
console.log(sum('fdsl','jkflds'));


interface obj {
    Name: String;
    gender: 'M' | 'F';
    Age: Number;
    func1(a:string,b:string): string;
    func2: (a:number,b:number)=>number;

}


const obj:obj = {
    Name: 'bhai',
    gender: 'F',
    Age: 23,
    func1: function (a,b){
        return a+b;
    },
    func2: (a,b)=>{
        return a+b
    }
};
console.log(obj);
console.log(obj.func1('fdsk','43543'));
console.log(obj.func2(234,432));


interface animal {
    name: string;
}


interface Dog extends animal {
    maxAge: number;
}



const animal: animal = {
    name: 'Jack'
}
console.log()


const dog:Dog = {
    name: 'Dog',
    maxAge: 234
}
console.log(dog)