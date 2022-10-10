//For Single string search
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);

//for multiple string search
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // wildCard character
let answer = petRegex.test(petString);
console.log(answer);

//when case is insensitive by using "i";
let MyString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // wildCard character
let output = fccRegex.test(MyString);
console.log(output)

//String search with .match()
//"Hello world".match(/world/);
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // wildCard character
let Output = extractStr.match(codingRegex); // Change this line
console.log(Output);

//for multiple string search
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // wildCard character//using g for multiple string here g stands for global string
console.log(twinkleStar.match(starRegex)); // Change this line

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un|.un|.un|.un|.un|.un/; // wildCard character
console.log(unRegex.test(exampleStr));

//Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
console.log(quoteSample.match(vowelRegex)); // Change this line

//Inside a character set, you can define a range of characters to match using a hyphen character: -.Match Numbers and Letters of the Alphabet.
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
console.log(quoteSample.match(myRegex)); // Change this line

//by using "^" this sign the string or number should be negated
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
console.log(quoteSample.match(myRegex)); // Change this line

//when a character is used one or more times in a same string or same word it counts both
let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
console.log(difficultSpelling.match(myRegex));

//when a character used double or zero times in a string 
let chewieQuote="Aaaaaaaaaaaaaaaaaaaaaaaargh!"
let chewieRegex = /Aa*/; 
console.log(chewieQuote.match(chewieRegex));

//Using lazy character "?"
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // ? is a lazy character
console.log(text.match(myRegex));

//Use the shorthand character class \w to count the number of alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
console.log(quoteSample.match(alphabetRegexV2).length);

//Use the shorthand character class \W to count the number of non-alphanumeric characters in various quotes and strings.
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
console.log(quoteSample.match(nonAlphabetRegex).length);

//Use the shorthand character class \d to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;

//For non digit character use \D
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/; // Change this line
let result = movieName.match(noNumRegex).length;

//Usernames can only use alpha-numeric characters.

//The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

//Username letters can be lowercase and uppercase.

//Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/ig; // Change this line
let result = userCheck.test(username);

//for white space count use \s and count everything except whitespace is \S.