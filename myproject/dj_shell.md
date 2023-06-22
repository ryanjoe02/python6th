# Shell practice 06/22

## admin 사이트 안에 question 부분에 "what's new?" 추가하기
```
from polls.models import Question, Choice
from django.utils import timezone

q = Question(question_text="What's new?", pub_date=timezone.now())
q.save()
```
```
q2 = Question(question_text="test", pub_date=timezone.now())
q2.id
q2.question_text #output: 'test'

q2.pub_date #output: datetime.datetime(2023, 6, 22, 2, 24, 26, 712389, tzinfo=datetime.timezone.utc)
q2.save()
q2.id #output: 7

q2.delete() #output: (1, {'polls.Question': 1})
q2.id # nothing print out because q2 is deleted

q2.save() 
q2.id #output: 8, although save again, id will be changed (auto increment)
```
```
Question.objects.filter(id=1)
#output: <QuerySet [<Question: 테스트 질문입니다.>]>
```

## Difference between ```.filter(id=)``` and ```.get(pk=)```
```
Question.objects.filter(id=8)
#output: <QuerySet [<Question: test>]>
q = Question.objects.get(pk=1)
q #output: <Question: 테스트 질문입니다.>
```
### id=5 is empty because I deleted before
```
Question.objects.filter(id=5)
#output: <QuerySet []>
```
## Double underscore (```__startswith``` and ```__year```, etc)
```
Question.objects.filter(question_text__startswith='what')
#output: <QuerySet [<Question: What's up today?>]>

Question.objects.filter(pub_date__year=2022)
#output: <QuerySet [<Question: 두번째 테스트>]>

Question.objects.filter(pub_date__year=2023)
#output: <QuerySet [<Question: 테스트 질문입니다.>, <Question: 아무거나 넣어도 동작합니다.>, <Question: 네번째 질문입니다.>, <Question: What's up today?>, <Question: test>]>
```
### choice_set 

The ```reverse relation (역참조)``` on the Question model would be choice_set. It allows you <ins>to access all the related Choice objects</ins> for a particular Question object.
```
q.choice_set.all()
#output: <QuerySet [<Choice: 첫번째 선택지>, <Choice: 1>, <Choice: 2>]>
q.choice_set.count()
#output: 3
```