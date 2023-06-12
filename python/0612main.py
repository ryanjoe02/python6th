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

