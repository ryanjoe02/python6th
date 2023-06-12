from MyApp.Handlers.text_handler import handle_text

class Car:
    # class 속성 (모든 자동차의 바퀴는 4로 지정한다)
    wheels = 4

    def __init__(self, make, model, color):
        self.make = make
        self.model = model
        self.color = color

    # method
    @staticmethod
    def drive():
        return "The car is moving!"  # self를 안쓰고 static형태의 method

    def stop(self):
        return f"The car {self.make} has stopped" # make의 var에 따라서 return 값이 바뀐다

# 자동차 만들기
my_car = Car("Kia", "Morning", "Blue")

#속성 사용하기
print(my_car.make)
print(my_car.drive())
print(my_car.stop())

class Vehicle:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start_engine1(self):
        return "The engine is running!"

# child class
class Car(Vehicle):
    def start_engine(self):
        return super().start_engine1() + " It's a car engine."

# instance 생성
my_car = Car("Toyota", "Corolla", 2009)

# method 호출
print(my_car.start_engine())

# 다중상속
class Engine:
    def start(self):
        return "Engine started"
    def stop(self):
        return "Engine stopped"

class Wheels:
    def rotate(self):
        return "Wheels are rotating"

class Car(Engine, Wheels):
    pass

# instance 생성
my_car = Car()

print(my_car.start())
print(my_car.rotate())

# package practice / Added header line 1
input_text = "python package practice"
handle_text(input_text)

# try - except
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Error : Division by zero")

print("Program continues.")

try:
    number = int("Not a number")
except ValueError:
    print("value error")
except TypeError:
    print("type error")

try:
    number = 5 + "Not a number"
except ValueError:
    print("value error")
except TypeError:
    print("type error")

#
class CustomException(Exception):
    def __init__(self, message):
        self.message = message

try:
    raise CustomException("This is a custom exception.")
except CustomException as e:
    print(f"Error : {e.message}")