# Python 6th

## 5월 26일

- CSS 실습
## 5월 30일

- Operator JS

        "10" < "5" -> true

    ```Lexicographic order``` (사전 순서) is a way of comparing strings that compares the characters in one at a time, from left to right.

- Evaluation JS

        let x = 16 + 4 + "Volvo";   -> 20Volvo
        let x = "Volvo" + 16 + 4;   -> Volvo164

- parseInt() function JS

        var num1 = parseInt(prompt("Enter first number : "));
    
    parseInt() function is to convert the user's input to an interger.

- Prefix VS Postfix
    
    i++ (i = i + 1) : 해당라인까지 i의 값이 증가되지 않고 해당라인이 끝난 뒤에 i의 값이 증가 (```Postfix```)

    ++i : i의 값을 먼저 증가 시킨 뒤 해당 i를 이용한 연산을 실행 (```Prefix```)

- OOP

    The C++ Programming Language book

- Operator System

## 5월 31일

- do - while Statement VS while Statement

    do-while loop will always execute the body of the loop at least once, even if the condition is false.

- Single quotes VS Double quotes

    - In C, single quotes are used to identify a single character, while double quotes creates a string literal.

- Bitwise operator

    - [bitwise](https://www.programiz.com/c-programming/bitwise-operators)

    - Check if number is even or odd
    
            def is_even(number):
                return number & 1 == 0

            def is_odd(number):
                return numb`er & 1 == 1
    
        check if the last bit of the number is 0 or 1 because the last bit of an odd number is always 1. (even number is always 0)

- class 

    - Class : A blueprint for an ```object```. It defines the data and behavior of an object.

    - Class instance : It is a specific object that is created from a class. 

    - ```new``` Keywoard : Create an object from a class

            const myCar = new Car(2023, "Tesla", "Model 3");
            
        Created a new object and assigns it to the variable ```myCar```. This object whill have the ```values``` (2023, Tesla, Model 3).


## 06월 01일 - 02일

- Bootstrip

- JSON.parse() function

    ```
    var data = JSON.parse(localstorage.getItem('todolist')); -> load data

    localstorage.setItem('todoList', JSON.Stringify(data)); -> save data
    ```
    'todolist' (key) is the specific key you want to retrieve from localStorage.
    The data stored in localStorage is typically stored as a ```string```.

- DOM

    ```
    document.addEventListener('DOMContentLoaded', function() {
        readTodo();
    })
    ```
    Simply, This code is to execute the 'readTodo()' function when the ```DOM (document Object Model)``` content has finished loading.

    ```DOMContentLoaded event``` is started when the initial HTML document has been completely loaded and parsed. 

- Optional chaining operator ('?')

    ```
    var note = "hello world";
    var noteSplit = note?.split(' ') || [];
    ```
    note variable안에 string value값이 저장되어 있으면 ' '을 기준으로 자른 값을 배열하고, 값이 없다면 (null or undefined) 빈 배열([])로 저장한다.

- slice() and indexOf() methodes
    ```
    var str = "hello, world";
    var index = str.indexOf(',');

    var beforeComma = str.slice(0, index);      //"hello,"
    var afterComma  = str.slice(index + 1);     //" world"
    ```

- forEach() method

    ```
    array.forEach(function(currentValue, index, arr));
    ```
    to execute a provided function once for each element in an array
    ```
    const arrayItems = ['item1', 'item2', 'item3'];
    const copyItems  = [];
    
    for (let i = 0; i < arrayItems.length; i++) {
        copyItems.push(arrayItems);
    }
    console.log(copyItems);
    // ['item1', 'item2', 'item3']

    const arrayItems = ['item1', 'item2', 'item3'];
    const copyItems  = [];
    
    arrayItems.forEach(item) {
        copyItems.push(item);
    }
    console.log(copyItems);
    // ['item1', 'item2', 'item3']
    ```
    
- map() function

    map()함수는 주어진 함수를 Array의 각 요소에 대해 호출하여 그 결과를 새로운 array를 생성한다.
    ```
    var numbers = [1,2,3,4,5];
    var squares= numbers.map(num => num * num);

    console.log(squares);
    //output : [1,4,9,16,25]
    ```

- reduce() function

    It is used to reduce an array to ```a single value```. Iterate over the elements of an array and accumulating a single result.
    ```
    var numbers = [1,2,3,4,5];

    var sum = numbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

    console.log(sum); // Output : 15
    ```
    The initial value of the accumulator is set to ```0```

- set() function

    It is a built-in data structure that allows you to store ```unique values``` of any type.
    ```
    var set = new set();
    ```
    set객체는 new 연산자와 함께 호출하여 객체(instance)를 생성하는 생성자```constructor``` 함수로 생성된다. 

    ```instance``` : constructor 함수에 의해 생성된 함수.
    
    ```this``` : 객체 자신의 property나 method를 reference하기 위한 참조 변수 (self-referencing variable)다. 
    
    ```binding``` : 바인딩이란 식별자와 값을 연결하는 과정
        
    - 변수선언읜 변수이름과 확보된 메모리 공간의 주소를 ```binding```하는 것이다

    - The binding of this : this와 this가 가리키는 객체를 ```binding```하는 것이다


## 6월 5일

    