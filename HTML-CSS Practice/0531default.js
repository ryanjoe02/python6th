//var cels = parseFloat(prompt("Enter the Celsius: "));
//var fahrenheit = cels * (9 / 5) + 32;
//
//document.write("Fahrenheit : " + fahrenheit);

//var num1 = 20;
//var num2 = 10;
//var num3 = "10";
//var num4 = 20;
//var num5 = 15;
//
//console.log(num1 > num2);
//console.log(num1 >= num2)
//console.log(num1 < num2);
//console.log(num1 <= num2);
//
//console.log('같은지 여부 확인');
//console.log(num1 == num4, num1, '==', num4);
//console.log(num1 != num4, num1, "!=", num4);
//
//console.log('=== explain');
//// '===' : data type compare
//console.log(num1 === num3, num1, "===", num3);
//
//console.log(num2 === num3, num2, "===", num3);
//console.log(num2 == num3, num2, "==", num3);
////문자열("10") 숫자(10)가 달라도 숫자가 같으면 true가 출력된다. (유일한 다른점)
//
//console.log('num1 > num2 && num1 < num5 : ', num1 > num2 && num1 < num5);
//console.log('num1 > num2 || num1 < num5 : ', num1 > num2 || num1 < num5);

//var num1 = parseInt(prompt('첫번째 숫자 임력 : '));
//var num2 = parseInt(prompt('두번째 숫자 임력 : '));
//
//if (num1 > num2) {
//    console.log("큰 수는 num1 : ", + num1);
//}
//if (num1 < num2) {
//    console.log('큰 수는 num2 : ' + num2);
//}
////num1 num2, 두 수가 같으면 아무것도 실행히 되지 않는다.
//if (num1 == num2) {
//    console.log("same number");
//}
//
//if (num1 > num2) {
//    console.log("큰 수는 num1 : ", + num1);
//} else if (num1 < num2) {
//    console.log("큰 수는 num2 : ", + num1);
//} else {
//    console.log("같은 수");
//}

////3교시 --------------------------------------------------------------
//var letter = prompt("Enter a letter : ");
//
//letter = letter.toLowerCase();
//
//if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
//    console.log("Vowel");
//} else {
//    console.log("Consonant");
//}

//var digit = parseInt(prompt("Enter a digit : "));
//
//switch (digit) {
//    case 0:
//        document.write("Zero");
//        break;
//    case 1:
//    case 2:
//    case 3:
//        document.write("123 all number");
//        break;
//    case 4:
//        document.write("Four");
//        break;
//    case 5:
//        document.write("Five");
//        break;
//    case 6:
//        document.write("Six");
//        break;
//    case 7:
//        document.write("Seven");
//        break;
//    case 8:
//        document.write("Eight");
//        break;
//    case 9:
//        document.write("Nine");
//        break;
//    default:
//        document.write("Not a digit");
//        break;
//}

//var i = 1;
//
//do {
//    document.write("멋쟁이사자 : ", i++ + "<br />");
//} while (i <= 10)
//
//document.write("================<br />");
//
//var j = 1;
//while (j <= 10) {
//    document.write("멋쟁이사자 : ", j++ + "<br />");
//}

////break와 continue 이해하기

//for (var i = 1; i <= 100; i++) {
//    if (i == 20) {
//        break;
//    }
//    document.write(i + "<br />");
//}
//
//document.write("===========<br />");
//
//for (var j = 1; j <= 100; j++) {
//    if (j == 20) {
//        continue;
//    }
//    document.write(j + "<br />");
//}

////4교시 --------------------------------------------------------------

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




////5교시 --------------------------------------------------------------





































