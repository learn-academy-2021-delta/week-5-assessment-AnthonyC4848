// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest
// describe("", () => {
//     it("", () => {
//       expect().toEqual("")
//     })
//   })

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
//
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.
describe("wordToNum", () => {
var secretCodeWord1 = "Lackadaisical"
var secretCodeWord2 = "Gobbledygook"
var secretCodeWord3 = "Eccentric"
it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(wordToNum(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(wordToNum(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(wordToNum(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})
// // Expected output: "L4ck4d41s1c4l"

// Expected output: "G0bbl3dyg00k"

// Expected output: "3cc3ntr1c"



// b) Create the function that makes the test pass.
// create a function taking in a string as an array
//iterate 
//conditionals to see if letters match
//.replace letters with number.
//I have gone through slack and used the recources to try and get every letter to change but i was only able to get the letter a to change to 4. No other letters would switch..... I tried changing it into an array
// I tried many different ways. Im sorry i deleted them insted of commenting out but i left single examples commented(imagine they are on all)
// const wordToNum = (string) => {
    // let newString = string.split("")
    // newString.map(value => {
    //     if (value === 'a'|| 'A'){
    //         return value.replace(/[aA]/g, 4)
    //     }
    //     return newString.join("")
    // })
    // for (let x = 0; x < string.length; x++) {
        // return (string.replace(/[aA]/g, 4))
        // if (x = 'a') {
            //(x === 'a')
        //    return string.replace(/[aA]/g, 4)
        // } else if (x = 'e','E') {
            //return string[x].replace(/[eE])
            //return (string[0].replace(/[eE]))
        //     return string.replace(/[eE]/g, 3)
        // } else if (x = 'i') {
        //     return string.replace(/[iI]/g, 1)
        // } else if (x = 'o') {
        //     return string.replace(/[oO]/g, 0)
        // }
            
// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.
describe('only_letter', () => {
var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
    it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
        expect(only_letter(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"]),
        expect(only_letter(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})
    // Expected output: ["Apple", "Banana", "Orange"]
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.
//create a function taking in an array and string
//iterate with .filter
//see if the word contains specific letter
//use .toUpperCase() to match correct letter
const only_letter = (array, string) => {
    return array.filter(value => value.toUpperCase().includes(string.toUpperCase())
    )
}

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.
describe("fullHouse", () => {

var hand1 = [5, 5, 5, 3, 3]
var hand2 = [5, 5, 3, 3, 4]
var hand3 = [5, 5, 5, 5, 4]
it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})
// Expected output: true
// Expected output: false
// Expected output: false



// b) Create the function that makes the test pass.
//create function that takes in an array
//creating an empty object to hold the count of each value
// of will take in an array and return with no properties.
//define card to become the values in the empty object.
//iterate checking for matches
//I found this example on stack overflow with no explination. I personally used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of to learn about for..of.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values for information on Object.values() which i dont 100% understand yet.
const fullHouse = (arr) => {
  let nums = {}
  for(let x of arr){
    nums[x] = (nums[x] || 0) + 1;
  }
  let card = Object.values(nums);
  if((card[0] === 2 && card[1] === 3) || (card[1] === 2 && card[0] === 3)){
    return true;
  } else {
  return false;
  }
}