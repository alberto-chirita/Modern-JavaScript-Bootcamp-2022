// Challenge 1
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

// function isValidPassword(password, username) {
//   return (
//     password.length >= 8 &&
//     password.indexOf(" ") === -1 &&
//     password.indexOf(username) === -1
//   );
// }

// console.log(isValidPassword("89Fjj1nms", "dogLuvr")); //true
// console.log(isValidPassword("dogLuvr123!", "dogLuvr")); //false
// console.log(isValidPassword("hello1", "dogLuvr")); //false

// Challenge 2
// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

// v1
// function avg(array) {
//   let sum = 0;
//   for (let num of array) {
//     sum += num;
//   }
//   const avg = sum / array.length;
//   return avg;
// }

// v2
// function avg(array) {
//   return array.reduce((sum, num) => (sum += num)) / array.length;
// }

// console.log(avg([0, 50])); //25
// console.log(avg([75, 76, 80, 95, 100])); //85.2

// Challenge 3
// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// v1
// function isPangram(sentence) {
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   for (let i = 0; i < alphabet.length; i++) {
//     if (!sentence.toLowerCase().includes(alphabet[i])) return false;
//   }
//   return true;
// }

// v2
// function isPangram(sentence) {
//   const lowerCased = sentence.toLowerCase();
//   const alphabet = "abcdefghijklmnopqrstuvwxyz";
//   for (let char of alphabet) {
//     if (!lowerCased.includes(char)) return false;
//   }
//   return true;
// }

// console.log(isPangram("The five boxing wizards jump quickly")); //true
// console.log(isPangram("The five boxing wizards jump quick")); //false

// Challenge 4
// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

function pick(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

function getCard() {
  const values = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const randomValue = pick(values);
  const randomSuite = pick(suits);
  const card = new Card(randomValue, randomSuite);
  return card;
}

console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
console.log(getCard());
