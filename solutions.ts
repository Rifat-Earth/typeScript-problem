// problem - 01 

function filterEvenNumbers(numbers: number[]): number[] {
    const evenNumber = numbers.filter((number) => number % 2 === 0)
    return evenNumber
}

// problem - 02

function reverseString(text: string): string {
    const newString = text.split('').reverse().join("")
    return newString
}

// problem - 03

type StringOrNumber = string | number

function checkType(value: StringOrNumber): string {
    if (typeof value === "string") {
        return "String";
    }
    return "Number";
}

// problem - 04 

const user = { id: 1, name: "John Doe", age: 21 };

function getProperty<T, k extends keyof T>(obj: T, key: k): T[k] {
    return obj[key]
}

// problem - 05

interface Book {
    title: string,
    author: string,
    publishedYear: number,
}

function toggleReadStatus(BookDetails: Book) {
    return {
        ...BookDetails,
        isRead: true
    }

}
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
// console.log(toggleReadStatus(myBook));

// problem - 06

class Person {
    name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

}

class Student extends Person {
    grade: string

    constructor(name: string, age: number, grade: string) {
        super(name, age)
        this.grade = grade
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }

}
const student = new Student("Alice", 20, "A");
// console.log(student.getDetails());

// problem - 07

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) =>{
    return arr2.includes(num)})
}

const newArray = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])

console.log(newArray);

