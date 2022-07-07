// funkcija sudeti 2 reiksmes

// function add(num1: number, num2: number): number {
// const sum: number = num1 + num2;
//   console.log(sum);
//   return sum;
// }

// add(5, 10);

// add('5', 10);

// function signature
let greetMe: (myName: string) => void;

greetMe = (myName) => {
  console.log(`Hello my name is ${myName}`);
  return 1; //should be err but not
}

greetMe('James');