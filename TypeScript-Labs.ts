// lab-1
// let data = 100;          
// console.log(data + 50); 

// data = "Hello";         
// console.log(data + 50); 


//lab-2
// let age: number = 25;
// let name: string = "Raju";
// let age = "twenty five";  
// let name = 30;   

// console.log(age);
// console.log(name);


//lab-3

// let y: number = 10;
// console.log("y:", y);
// y = 20;  
// console.log("y after reassignment:", y);

// let z: string = "world";
// console.log("z:", z);
// z = "hello";
// console.log("z after reassignment:", z);

//lab-5
// Task 1
// function greetUser(name: string, title: string = "Mr./Ms."): string {
//   if (title) {
//     return `Hello, ${title} ${name}!`;
//   } else {
//     return `Hello, ${name}!`;
//   }
// }

// console.log(greetUser("Raju", "Dr."));
// console.log(greetUser("Alice"));       

// // Task 2
// type Operation = (a: number, b: number) => number;

// const add: Operation = (a, b) => a + b;
// const multiply: Operation = (a, b) => a * b;

// console.log("Add 5 + 3 =", add(5, 3));          
// console.log("Multiply 5 * 3 =", multiply(5, 3)); 


//lab-6
// Task 1
// function calculateSquare(num: number): number {
//   return num * num;
// }

// console.log("Square of 5:", calculateSquare(5));  
// console.log("Square of 10:", calculateSquare(10)); 

// // Task 2
// function isEven(num: number): boolean {
//   return num % 2 === 0;
// }

// console.log("Is 4 even?", isEven(4)); 
// console.log("Is 7 even?", isEven(7)); 


//lab-7
// Task 1: greetUser with optional parameter
// const greetUser = (name: string, title?: string): string => {
//   if (title) {
//     return `Hello, ${title} ${name}!`;
//   } else {
//     return `Hello, ${name}!`;
//   }
// };

// console.log(greetUser("Raju", "Dr.")); 
// console.log(greetUser("Alice"));      

// // Task 2: addNumbers as arrow function
// const addNumbers = (a: number, b: number): number => a + b;

// console.log("5 + 3 =", addNumbers(5, 3)); 
// console.log("10 + 15 =", addNumbers(10, 15)); 


//lab-8
// Task: Create type alias for Point
// type Point = {
//   x: number;
//   y: number;
// };

// // Function that takes a Point and logs it
// function printPoint(point: Point): void {
//   console.log(`Point coordinates: x = ${point.x}, y = ${point.y}`);
// }

// // Test the function
// const p1: Point = { x: 10, y: 20 };
// const p2: Point = { x: -5, y: 15 };

// printPoint(p1);
// printPoint(p2); 

//lab-9
// Task 1: move function
// type Direction = "up" | "down" | "left" | "right";

// function move(direction: Direction): void {
//   console.log(`Moving ${direction}`);
// }

// move("up");    
// move("left");  
// move("down");  
// move("right");  

// // Task 2: formatValue function
// function formatValue(value: string | number): void {
//   if (typeof value === "string") {
//     console.log("Uppercase string:", value.toUpperCase());
//   } else {
//     console.log("Rounded number:", Math.round(value));
//   }
// }

// formatValue("hello");  
// formatValue(12.7);     
// formatValue(3.14);     




//lab-10
// Task 1: User interface with readonly & optional properties
// interface User {
//   readonly id: number;  
//   name: string;
//   age?: number;         
// }

// // Create a User object
// const user1: User = {
//   id: 101,
//   name: "Raju",
//   age: 24,
// };

// console.log("User ID:", user1.id);
// console.log("User Name:", user1.name);
// console.log("User Age:", user1.age);



// // Task 2: Calculator interface
// interface Calculator {
//   add(a: number, b: number): number;
//   multiply(a: number, b: number): number;
// }


// const calc: Calculator = {
//   add(a, b) {
//     return a + b;
//   },
//   multiply(a, b) {
//     return a * b;
//   },
// };

// console.log("Add 5 + 3 =", calc.add(5, 3));           
// console.log("Multiply 5 * 3 =", calc.multiply(5, 3)); 


//lab-11
// Task 3: Interface with Arrays
// interface Student {
//   name: string;
//   marks: number;
// }

// const students: Student[] = [
//   { name: "Raju", marks: 85 },
//   { name: "Alice", marks: 92 },
//   { name: "Bob", marks: 78 },
// ];

// students.forEach(student => {
//   console.log(`Name: ${student.name}, Marks: ${student.marks}`);
// });

// // Task 4: Interface vs Type & Combined Practice
// type PointType = {
//   x: number;
//   y: number;
// };

// interface PointInterface {
//   x: number;
//   y: number;
// }

// function printPoint(point: PointType | PointInterface): void {
//   console.log(`x: ${point.x}, y: ${point.y}`);
// }

// const pt1: PointType = { x: 10, y: 20 };
// const pt2: PointInterface = { x: 5, y: 15 };

// printPoint(pt1);
// printPoint(pt2);


//lab-12
//Task 1
// ================= Task 1: Enums =================
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// enum Status {
//   PENDING = "PENDING",
//   SUCCESS = "SUCCESS",
//   FAILED = "FAILED"
// }

// function printStatusOrDirection(value: Direction | Status): void {
//   if (typeof value === "number") {
//     console.log(`Direction enum value: ${Direction[value]} (${value})`);
//   } else {
//     console.log(`Status enum value: ${value}`);
//   }
// }

// printStatusOrDirection(Direction.Up);
// printStatusOrDirection(Status.SUCCESS);

// const dir: Direction = Direction.Left;
// const stat: Status = Status.FAILED;

// console.log(`Assigned Direction: ${Direction[dir]} (${dir})`);
// console.log(`Assigned Status: ${stat}`);

// // ================= Task 2: DOM Type Assertions =================
// const inputEl = document.getElementById("username") as HTMLInputElement | null;
// const btnEl = document.getElementById("btn") as HTMLButtonElement | null;

// function printInputValue(): void {
//   if (inputEl) {
//     console.log("Input value:", inputEl.value);
//   }
// }

// if (btnEl) {
//   btnEl.addEventListener("click", printInputValue);
// } else {
//   console.error("Button element not found!");
// }



//lab-13
// Task 1
// class Student {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const student1 = new Student("Raju", 24);
// console.log("Name:", student1.name); 
// console.log("Age:", student1.age);   

// //Task 2
// class Student2 {
//   public name: string;     
//   private rollNo: number; 

//   constructor(name: string, rollNo: number) {
//     this.name = name;
//     this.rollNo = rollNo;
//   }


//   showRollNo(): void {
//     console.log("Roll No:", this.rollNo);
//   }
// }

// const student2 = new Student2("Raju", 101);

// console.log("Name (public):", student2.name); 


// student2.showRollNo(); 



//lab-14
//Task 3
class Student {
  readonly id: number; 
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;  
    this.name = name;
    this.age = age;
  }
}

// Create instance
const st = new Student(101, "Raju", 24);

console.log("Student Details:");
console.log("ID:", st.id);
console.log("Name:", st.name);
console.log("Age:", st.age);

//Task 4

// Parent class
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log(`${this.name} makes a sound`);
  }
}

// Child class
class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); 
    this.breed = breed;
  }

  // Override parent method
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const genericAnimal = new Animal("Generic Animal");
genericAnimal.makeSound(); 

const buddy = new Dog("Buddy", "Labrador");
buddy.makeSound(); 
console.log(`${buddy.name} is a ${buddy.breed}`); 

