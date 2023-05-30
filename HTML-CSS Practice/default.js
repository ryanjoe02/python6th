//document.write("hello world - default.js");
//document.write("<h1>Welcome to JS program</h1>");
//document.write("<h2>Welcome to JS program</h2>");
//
//console.log("Welcome to JS program");
//console.info("Welcome to JS program");
//console.warn("Welcome to JS program");
//console.error("Welcome to JS program");
//
////js가 위에서 부터 실행되는데 alert은 위에 코드가 그려지기 전에 먼저 실행된다.
//alert('Welcome to JS program');
//
//var a = prompt('Welcome to JS program');
//console.log(a);

//data type -------------------------------------------------------------

console.log(123, typeof 123);
console.log( typeof 123.5);
console.log(typeof "123");
console.log(true, typeof true);
console.log(typeof false);

var car;
//값도 undefined, typeof도 undefined.
console.log(typeof car);

var car = "";
console.log(typeof car);

var person = {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"};
console.log(typeof person, person);

ex = null;
//빈 문자열: emptystring, 아무것도 넣지 않은 값: undefined, 값이 없다: null, NaN: 말이 안되는 값 (0으로 숫자를 나눈 결과)
console.log(typeof ex, ex);

//5교시 -----------------------------------------------------------------
