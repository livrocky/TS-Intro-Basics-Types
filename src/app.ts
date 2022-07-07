// Basic typs ========

let favColor: any = 'green';
favColor = 0;
favColor = true;
favColor = undefined;



// implicit type
let username: string = 'James';
// explicit type
let lastName: string = 'Bond';
// lastName = 5;

let age: number;
// age = '28';

let isAdmin: boolean = false;
// isAdmin = 0;

let password: null = null;
// password = 0;

let email: undefined = undefined;

let user1: boolean | string = false;
user1 = "Mike";

// Reference type ======

// array type
const colors: string[] = ['red', 'green', 'yellow'];
// colors.push(5);
const nums: number[] = [1, 2, 3];

// Union type - vienas arba kitas - string | number
const things: (string | number)[] = ['red', 'green', 'yellow', 1, 0]