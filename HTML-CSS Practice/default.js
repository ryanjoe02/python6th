document.write("hello world - default.js");
document.write("<h1>Welcome to JS program</h1>");
document.write("<h2>Welcome to JS program</h2>");

console.log("Welcome to JS program");
console.info("Welcome to JS program");
console.warn("Welcome to JS program");
console.error("Welcome to JS program");

//js가 위에서 부터 실행되는데 alert은 위에 코드가 그려지기 전에 먼저 실행된다.
//alert('Welcome to JS program');
var a = prompt('Welcome to JS program');
console.log(a);