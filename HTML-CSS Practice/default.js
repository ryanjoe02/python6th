document.write("hello world - default.js");
document.write("<h1>Welcome to JS program</h1>");
document.write("<h2>Welcome to JS program</h2>");

console.log("Welcome to JS program");
console.info("Welcome to JS program");
console.warn("Welcome to JS program");
console.error("Welcome to JS program");

//js가 위에서 부터 실행되는데 alert은 위에 코드가 그려지기 전에 먼저 실행된다.
alert('Welcome to JS program');

var a = prompt('Welcome to JS program');
console.log(a);

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

empty = null;
//빈 문자열: emptystring, 아무것도 넣지 않은 값: undefined, 값이 없다: null, NaN: 말이 안되는 값 (0으로 숫자를 나눈 결과)
console.log(typeof empty, empty);

//5교시 -----------------------------------------------------------------

var name = "이승훈";
var age = 29;
var cgpa = 3.92;
var lineBreak = "<br />";

document.write("이름 " + name + lineBreak);
document.write("나이 " + age + lineBreak);
document.write("학점 " + cgpa + lineBreak);
//앞에 "나이 "가 문자이기 때문에 age, cgpa가 문자로 변환되어서 뒤에 붙는다.

var lastName = "홍";
var firstName = "길동";

var fullName = lastName + firstName;
console.log(fullName);
console.log("Today is " + " a " + "beautiful day");
console.log("My name is " + fullName);

var num1 = 20;
var num2 = 30;
var sum = num1 + num2;
console.log("" + num1 + num2);
//먼저 ""문자와 num1의 숫자가 더해지면 앞에가 문자이기 때문에 string으로 된다. 출력결과 : 2030 (typecasting)
console.log(num1 + num2);
console.log(num1 + " + " + num2 + " = " + sum);

"asefaef" js는 문자열이 문자열로 저장되지 않고 객체(object) 로서 저장된다.
var text = prompt("Enter your name");
document.write("your name is " + text + "<br />");

var len = text.length;
//text라고 하는 문자열 객체가 여러가지 속성값을 가지고 있는데 그 중 length라는 property를 쓴다.
document.write("The number of characters is " + len + "<br />");

document.write(text.charAt(2) + "<br />");
//charAt 이러한 문자열을 camel case라고 부른다. charAt() 객체안에 있는 함수, method

document.write(text.toUpperCase() + "<br />");
document.write(text.toLowerCase() + "<br />");

var text1 = "hi, ";
var text2 = "bye";
var text3 = text1.concat(text2);
var text4 = text1 + text2;
document.write(text3 + "<br />");
document.write(text4 + "<br />");

var text5 = "hello";
var result = text5.slice(0,2)
//slice method, 첫번째로 받는 0(parameter) <= index < 2까지 출력
document.write(result + "<br />");

//6교시 -----------------------------------------------------------------
//OOP : 모든물건을 객제 (object)로 보는 시각

var num = "20";
num = num.toString();
console.log(typeof num);

var number = 20;
console.log(typeof number);

number = number.toString();
console.log(number, typeof number);
//아무 객체를 지정하지 않고도 함수 (toString) 를 사용할 수 있게 한다. JS의 특징이다.

var x = 2.56789;
console.log(x.toFixed(1), typeof x.toFixed(1));
console.log(x.toFixed(2));
//toFixed(1)은 둘째자리에서 반올림하여 첫째짜리까지 표현해주기.

console.log(x.toPrecision(1), typeof x.toPrecision(1));
console.log(x.toPrecision(2));
//toPrecision(1) 은 첫째자리에서 반올림 한 숫자를 보여준다.
//toPrecision() : method in JS formats a number to a specified length.

console.log(Number(true));
console.log(Number(false));
console.log(Number(" 10 "));
console.log(Number(" 10 "));
console.log(Number("10.25"));


var num1 = parseInt(prompt("Enter first number : "));
//var input1 = prompt("Enter first number : ");
//var num1 = parseInt(input1);

var num2 = parseInt(prompt("Enter second number : "));
var lineBreak = "<br />";
var result = num1 + num2;
document.write("The sum is : " + result + lineBreak);

result = num1 - num2;
document.write("The subtraction is : " + result + lineBreak);

result = num1 * num2;
document.write("The multiplication is " + result + lineBreak);

result = num1 / num2;
document.write("The division is " + result + lineBreak);

result = num1 % num2;
document.write("The remainder is " + result + lineBreak);

var base = parseFloat(prompt("enter base : "));
var height = parseFloat(prompt("enter perpendicular height : "));

var area = base * height * 0.5;
document.write("Area of a Triangle is : " + area);

//7교시 -----------------------------------------------------------------