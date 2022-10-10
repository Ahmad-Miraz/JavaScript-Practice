//let password = "abc123";
// let checkPass = /(?=\w{3,6})(?=\D*\d)/;
// checkPass.test(password);
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.

let sampleWord = "astronaut22";
let pwRegex = /(?=\w{5,})(?=\D+\d{2,})/; // Change this line
console.log(pwRegex.test(sampleWord));