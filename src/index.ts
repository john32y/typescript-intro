/***
 * 2 ways for ts to add type
 * Implicit
 * Explicit
 */
//implicit
let fName = 'john'


//fName= 1234 // Failed

//Explicit
let lName: string | number | boolean | undefined = "Therlonge"

lName = 1234
lName = false
lName = undefined

import { twoSum } from "./typePractice"
twoSum({num1: 5, num2: 9, message: 'test'})