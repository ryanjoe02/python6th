var cels = parseFloat(prompt("Enter the Celsius: "));
var fahrenheit = cels * (9 / 5) + 32;

document.write("Fahrenheit : " + fahrenheit);

var num1 = 20;
var num2 = 10;
var num3 = "10";
var num4 = 20;
var num5 = 15;

console.log(num1 > num2);
console.log(num1 >= num2)
console.log(num1 < num2);
console.log(num1 <= num2);

console.log('같은지 여부 확인');
console.log(num1 == num4, num1, '==', num4);
console.log(num1 != num4, num1, "!=", num4);

console.log('=== explain');
// '===' : data type compare
console.log(num1 === num3, num1, "===", num3);

console.log(num2 === num3, num2, "===", num3);
console.log(num2 == num3, num2, "==", num3);
//문자열("10") 숫자(10)가 달라도 숫자가 같으면 true가 출력된다. (유일한 다른점)

console.log('num1 > num2 && num1 < num5 : ', num1 > num2 && num1 < num5);
console.log('num1 > num2 || num1 < num5 : ', num1 > num2 || num1 < num5);

var num1 = parseInt(prompt('첫번째 숫자 임력 : '));
var num2 = parseInt(prompt('두번째 숫자 임력 : '));

if (num1 > num2) {
   console.log("큰 수는 num1 : ", + num1);
}
if (num1 < num2) {
   console.log('큰 수는 num2 : ' + num2);
}
//num1 num2, 두 수가 같으면 아무것도 실행히 되지 않는다.
if (num1 == num2) {
   console.log("same number");
}

if (num1 > num2) {
   console.log("큰 수는 num1 : ", + num1);
} else if (num1 < num2) {
   console.log("큰 수는 num2 : ", + num1);
} else {
   console.log("같은 수");
}

//3교시 --------------------------------------------------------------
var letter = prompt("Enter a letter : ");

letter = letter.toLowerCase();

if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
   console.log("Vowel");
} else {
   console.log("Consonant");
}

var digit = parseInt(prompt("Enter a digit : "));

switch (digit) {
   case 0:
       document.write("Zero");
       break;
   case 1:
   case 2:
   case 3:
       document.write("123 all number");
       break;
   case 4:
       document.write("Four");
       break;
   case 5:
       document.write("Five");
       break;
   case 6:
       document.write("Six");
       break;
   case 7:
       document.write("Seven");
       break;
   case 8:
       document.write("Eight");
       break;
   case 9:
       document.write("Nine");
       break;
   default:
       document.write("Not a digit");
       break;
}

var i = 1;

do {
   document.write("멋쟁이사자 : ", i++ + "<br />");
} while (i <= 10)

document.write("==========<br />");

var j = 1;
while (j <= 10) {
   document.write("멋쟁이사자 : ", j++ + "<br />");
}

//break와 continue 이해하기

for (var i = 1; i <= 100; i++) {
   if (i == 20) {
       break;
   }
   document.write(i + "<br />");
}

document.write("===========<br />");

for (var j = 1; j <= 100; j++) {
   if (j == 20) {
       continue;
   }
   document.write(j + "<br />");
}

//4교시 --------------------------------------------------------------

//parameter 가 없는 함수 생성
function message(){
   document.write("Hello, I am a function without parameter <br/>");
}

// parameter를 가진 함수 생성
function welcomeMessage(name) {
   document.write("Weclome " + name + "." + "<br />");
}

function addition(num1, num2) {
   var sum = num1 + num2;
   document.write("Addition is " + sum + "<br />");
}

//값을 반환하는 (return) 함수 생성
function square(num) {
   return (num * num);
}

message();
welcomeMessage("Joe");
addition(2,3);
document.write("The square of 5 is " + square(5) + "<br />");

// self-invoking function / 뒤에 ()로 묶고 parameter를 삽입

(function display(message) {
   console.log(message);
})('Joe');

var display = function displayMessage(msg) {
   console.log(msg);
}

display("I am message");

(function addNumber(a, b) {
   console.log(a + b);
})(3, 4);


// Object

var names = new Array(20);

names[0] = "지훈";
names[1] = "은영";

console.log(names[0])

//값을 가진 배열 생성
var students = ["지훈", "은영", "수진", "준호"];
console.log("Students = " + students);
console.log("index 2 = " + students[2]);
console.log("index 3 = " + students[3]);

//배열의 길이 찾기
console.log("The length : " + students.length);

students.push("정만");
console.log("push 후 학생 배열 : " + students);

//Array elements(요소) 삭제하기
//pop() function은 마지막 elements(요소)를 제거한다.
//splice()
students.pop();
console.log("pop 후 학생 배열 : " + students);
console.log("그리고 마지막 학생은 : " + students.pop());

//배열 연결하기
var numArray1 = [10, 20];
var numArray2 = [30, 40, 50];
var numArray = numArray1.concat(numArray2);

console.log("배열 이어주기(concatenation) : " + numArray);

console.log(numArray1 + numArray2);

//5교시 --------------------------------------------------------------

//생성되는 시간은 컴퓨터의 시간
var date = new Date();
console.log(date);

var year = date.getFullYear();

console.log(year);

var month = date.getMonth();
console.log(month);

var currentDate = date.getDate();
console.log(currentDate);

//요일 정보 받기, 수요일이면 3이 출력된다.
var currentDay = date.getDay();
console.log(currentDay);

var currentHour = date.getHours();
console.log(currentHour);

var currentMinutes = date.getMinutes();
console.log(currentMinutes);

//1970년 1월 1일 부터 시작해서 계속 시간이 증가하고 있다
console.log('getTime : ', + date.getTime());