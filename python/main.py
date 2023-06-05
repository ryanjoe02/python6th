# Initialize the variable
a = 10
b = 3.14
c = "Hello World!"
d = [1, 2, 3]
e = (4, 5 ,6)
f = {7, 8, 9}
g = {"apple": 1, "banana": 2, "orange": 3}
#key-value 선언 -> dictionary로 만들어줌

# data tyle
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
print(type(f))
print(type(g))

# Operation
# True and (표현식) = (표현식)
# True or (표현식)  =  Ture (어차피 or이고 맨 앞에 ture가 있으므로 뒤에가 무엇이든 결과는 ture이다.)
a = 4
b = 3
total = a + b

print(f"The sume of total is {total}")

def is_num(num):
    if (num & 1 == 1):
        print(f"{num} is odd num")
    else:
        print(f"{num} is even num")

is_num(a)
is_num(b)

#논리 연산자
a = 5
b = 2
c = 3

print(f"a > b and a < c : {a > b and a <c}")
print(f"not(a < b) : {not(a < b)}")

# 할당 (assign) 연산자 
m = 25

m **= 2
print(m)

m //= 10
print(m)

# bitwise operation
a = 10
b = 15

print(f"a : {bin(a)}")
print(f"b : {hex(b)}")
print(f"~a : {~a} and {bin(~a)}")
print(f"a<<2 {a<<2} and {bin(a<<2)}")

#membership operators
st1 = "welcome to likelion"

print("to" in st1)
print("TO" in st1)

st2 = "welcome top likelion"

print("to" in st2)
print("oo" not in st2)

# is operator
a = 10
b = 10

print(f"is operator : {a is b}")

b = '10'
print(a is b)
print(a is not b)


