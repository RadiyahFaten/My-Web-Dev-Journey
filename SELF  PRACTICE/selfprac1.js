console.log(`Hello world!`);
console.log(`Welcome me to JS!`);

//window.alert(`I'm learning JS now!`);

 //document.getElementById("H1").textContent = "The Book Hypnotic";

 //VARIABLE: number, strings, boolean
let x = 124;
let n = "ShinyBugs";
console.log(`My name is ${n} and I like it`);
console.log(typeof x);

//user input: WindowPrompt
// let username = window.prompt("What's your username?");
// console.log(username);

//user input: HTML Textbox
let username;
document.getElementById("signup").onclick = function() {
    username = document.getElementById("username").value;
    // console.log(`Thank you for signing up, ${username}`);
    //document.getElementById("H1").textContent = `Thank you for signing up, ${username}`;
}