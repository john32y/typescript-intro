"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/***
 * 2 ways for ts to add type
 * Implicit
 * Explicit
 */
//implicit
let fName = 'john';
//fName= 1234 // Failed
//Explicit
let lName = "Therlonge";
lName = 1234;
lName = false;
lName = undefined;
const typePractice_1 = require("./typePractice");
(0, typePractice_1.twoSum)({ num1: 5, num2: 9, message: 'test' });
