/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function (base,height){
    value = base * height 
    return value 
}
area(2,5)
console.log(area(2,5))
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazysum = function (a1,a2) {
     if (a1===a2) {
        multisum= (a1 +a2) * 3
     } else {
         multisum= a1 +a2}

     return multisum
}
console.log(crazysum(15,15))

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
let absoluteResult
const crazyDiff = function (givenNumber) {
   if (givenNumber > 19 ) {
       absoluteResult = ( givenNumber - 19) *3
   } else { 
    if ((givenNumber - 19) <0 ) {
        absoluteResult = (givenNumber - 19) * (-1) 
   } else  { absoluteResult = givenNumber - 19 }
   }
    return absoluteResult
}
console.log(crazyDiff(-150))

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = function (n) {
    let boolean
     if ((n > 20 && n <= 100 ) || n === 400 ) {
        boolean = true
     } else {
         boolean= false }
    return boolean
}
console.log(boundary(400))
/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
const strivify = function (string) {
    let data
    if (string.indexOf("Strive")===0) {
       data = string
    } else { 
        data = "Strive " + string }
    return data
    }

console.log(strivify("Strive School"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

const check3and7 = function (posn) {
    let mop
    if (posn >= 0) {
    let multi3 = posn % 3
    let multi7= posn % 7
           if  (multi3=== 0 || multi7===0)  {
            mop = true
            } else {
            mop = false
            }
    }
    else { mop = " Your number is not positive :/"}
    return mop

}
console.log(check3and7(5))
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

const reverseString = function (string1) {
    let stringtoarray = string1.split("")
    let reversedarray=[]
    let lengthofstring1 = stringtoarray.length
    for (let i = 1 ; i<=stringtoarray.length; i++ ) {
     reversedarray.push(stringtoarray[stringtoarray.length-i])
     }
let stringagain= reversedarray.join("")
return stringagain

}
console.log(reverseString("Hello Strive School!!!"))
/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/