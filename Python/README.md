# 힙(Heap)
* **최댓값, 최솟값**을 빠르게 찾기 위해 고안된 완전이진트리  
(완전이진트리: 왼쪽 하단부터 차례로 노드를 채우는 트리)
* 최대 힙(Max Heap): 부모 노드의 값이 자식 노드의 값보다 크다
* 최소 힙(Min Heap): 부모 노드의 값이 자식 노드의 값보다 작다

# import heapq
heapq 모듈은 최소 힙(Min Heap) 자료구조를 제공한다
* **heapq.heapify(x)**:기존 리스트 x를 heap으로 변환  
* **heapq.heappush(heap,item)**: item 값을 heap으로 push한다
* **heapq.heappop(heap)**: heap에서 최솟값을 pop한다  
(heap이 비어 있으면 IndexError 발생)  
(pop하지 않고 가장 작은 항목에 엑세스하려면 heap[0]을 사용)  
* **heapq.heappushpop(heap, item)**: heap에 item을 **push한 후**, heap에서 최솟값을 pop한다
* **heapq.heapreplace(haep,item)**: heap에서 최솟값을 **pop한 후**, item을 push한다  
(heap이 비어 있으면 IndexError 발생)
* **heapq.nlargest(n,iterable,key=None)**:  
iterable에 의해 정의된 데이터 집합에서 n개의 가장 큰 요소로 구성된 리스트를 반환
* **heapq.nsmallest(n,iterable,key=None)**:  
iterable에 의해 정의된 데이터 집합에서 n개의 가장 작은 요소로 구성된 리스트를 반환  

```python
import heapq
a = [9,3,1,5,6,7,2,8,4]
heapq.heapify(a)
heapq.nlargest(3,a)
print(a)
```
> [1, 3, 2, 4, 6, 7, 9, 8, 5]



# 특정 문자 찾기

### find(찾을 문자, 찾기 시작할 위치)
문자열 위치를 반환 

```python
s = "abcd abcdefg"
print(s.find("b"))
print(s.find("b", 3))
```
> 1  
> 6

### startswith(시작하는 문자, 시작할 위치)
true/false 값을 반환

```python
s = "abcd abcdefg"
print(s.startswith("a"))
print(s.startswith("b"))
print(s.startswith("a",2))
print(s.startswith("a",s.find("a")))
```
> True
> False
> False
> True

### endswith(끝나는 문자, 시작할 위치, 마지막 위치)
```python
s = "abcd abcdefg"
print(s.endswith("a"))
print(s.endswith("g"))
print(s.endswith("g",1,4))
print(s.endswith("d",1,4))
```
> False
> True
> False
> True  



# zip(*iterable)
zip(*iterable)은 동일한 개수로 이루어진 자료형을 묶어 주는 역할을 하는 함수이다.  
(여기서 사용한 *iterable은 반복 가능(iterable)한 자료형 여러 개를 입력할 수 있다는 의미이다.)

```python
list(zip([1, 2, 3], [4, 5, 6]))
```
> [(1, 4), (2, 5), (3, 6)]

```python
list(zip([1, 2, 3], [4, 5, 6], [7, 8, 9]))
```
> [(1, 4, 7), (2, 5, 8), (3, 6, 9)]

```python
list(zip("abc", "def"))
```
> [('a', 'd'), ('b', 'e'), ('c', 'f')]

```python
a = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print([i for i in zip(*a)])
```
> [(1, 4, 7), (2, 5, 8), (3, 6, 9)]

```python
a = [[[1,2],[3,4]], [[5,6],[7,8]], [[9,10],[11,12]]]
print([i for i in zip(*a)])
```
> [([1, 2], [5, 6], [9, 10]), ([3, 4], [7, 8], [11, 12])]




# map
map(f,iterable)은 함수(f)와 반복 가능한(iterable) 자료형을 입력으로 받아,  
입력받은 자료형의 각 요소를 함수 f가 수행한 결과를 묶어서 돌려주는 함수이다  
```python
a = [1.1, 2.2, 3.3, 4.4, 5.5]
print(list(map(int,a)))
```
> [1, 2, 3, 4, 5]  

```python
def two_times(x):
    return x*2
print(list(map(two_times,[1,2,3,4,5])))
```
> [2, 4, 6, 8, 10]  



# lambda
lambda는 함수를 생성할 때 사용하는 예약어로 def와 동일한 역할을 한다  
보통 함수를 한줄로 간결하게 만들 때 사용한다  

###  lambda 매개변수1, 매개변수2, ...: 매개변수를 이용한 표현식
lambda 예약어로 만든 함수는 return 명령어가 없어도 결괏값을 돌려준다
```python
add = lambda a,b: a+b
print(add(3,4))
```
> 7

### 자릿수를 맞추어 정렬할 수 있다
```python
numbers = [1,11,111,1111,10,100,101,110,1101,1110]

print(' '.join(sorted((map(str, numbers)), key=lambda x:x*1))) # 1자릿수까지 맞춤
print(' '.join(sorted((map(str, numbers)), key=lambda x:x*2))) # 2자릿수까지 맞춤
print(' '.join(sorted((map(str, numbers)), key=lambda x:x*3))) # 3자릿수까지 맞춤
print(' '.join(sorted((map(str, numbers)), key=lambda x:x*4))) # 4자릿수까지 맞춤
```
> 1 10 100 101 11 110 1101 111 1110 1111  
> 100 10 101 1 110 1101 1110 11 111 1111  
> 100 10 101 110 1101 1 1110 11 111 1111  
> 100 10 101 110 1101 1110 1 11 111 1111  
```python
numbers = ['0','01','001','0011','0101','011','1','11','111','1111','10','100','101','110','1101','1110']

print(' '.join(sorted(numbers, key=lambda x:x*1))) # 1자릿수까지 맞춤
print(' '.join(sorted(numbers, key=lambda x:x*2))) # 2자릿수까지 맞춤
print(' '.join(sorted(numbers, key=lambda x:x*3))) # 3자릿수까지 맞춤
print(' '.join(sorted(numbers, key=lambda x:x*4))) # 4자수까지 맞춤
```
> 0 001 0011 01 0101 011 1 10 100 101 11 110 1101 111 1110 1111  
> 0 001 0011 01 0101 011 100 10 101 1 110 1101 1110 11 111 1111  
> 0 001 0011 01 0101 011 100 10 101 110 1101 1 1110 11 111 1111  
> 0 001 0011 01 0101 011 100 10 101 110 1101 1110 1 11 111 1111  

### 첫 번째, 두 번째, 세 번째 순으로 정렬 조건을 줄 수 있다
```python
# 첫 번째 인자를 기준으로 오름차순 정렬 후,
# 그 안에서 두 번째 인자를 기준으로 내림차순 정렬 후,
# 그 안에서 세 번째 인자를 기중르오 오름차순 정렬
a = [(1, 9, 2), (3, 3, 2), (5, 9, 2), (1, 9, 7), (3, 7, 5), (1, 5, 5), (3, 7, 1)]
print(sorted(a, key = lambda x : (x[0], -x[1], x[2])))
```
> [(1, 9, 2), (1, 9, 7), (1, 5, 5), (3, 7, 1), (3, 7, 5), (3, 3, 2), (5, 9, 2)]



# import itertools, 순열, 조합, 곱집합
```python
import itertools
```
### 순열(permutations)
```python
items = ['A', 'B', 'C', 'D'] 
print(list(map(''.join, itertools.permutations(items, 2))))
```
> ['AB', 'AC', 'AD', 'BA', 'BC', 'BD', 'CA', 'CB', 'CD', 'DA', 'DB', 'DC']  
```python
items = [['A','B'],['1','2'],['@','#']]
print(list(itertools.permutations(items, 2)))
```
> [(['A', 'B'], ['1', '2']), (['A', 'B'], ['@', '#']), (['1', '2'], ['A', 'B']), (['1', '2'], ['@', '#']), (['@', '#'], ['A', 'B']), (['@', '#'], ['1', '2'])]  
### 조합(combinations) 
```python
items = ['A', 'B', 'C', 'D'] 
print(list(map(''.join, itertools.combinations(items, 2))))
```
> ['AB', 'AC', 'AD', 'BC', 'BD', 'CD']
```python
items = [['A','B'],['1','2'],['@','#']]
print(list(itertools.combinations(items, 2)))
```
> [(['A', 'B'], ['1', '2']), (['A', 'B'], ['@', '#']), (['1', '2'], ['@', '#'])]
### 중복조합(combinations_with_replacement)
```python
items = ['A', 'B', 'C', 'D'] 
print(list(map(''.join, itertools.combinations_with_replacement(items, 2))))
```
> ['AA', 'AB', 'AC', 'AD', 'BB', 'BC', 'BD', 'CC', 'CD', 'DD']  
### 곱집합(product)
```python
items = ['A', 'B', 'C', 'D'] 
print(list(map(''.join, itertools.product(items, repeat=2))))
print(list(map(''.join, itertools.product(*items))))
```
> ['AA', 'AB', 'AC', 'AD', 'BA', 'BB', 'BC', 'BD', 'CA', 'CB', 'CC', 'CD', 'DA', 'DB', 'DC', 'DD']  
> ['ABCD']  
```python
items = [['A','B','C'],['1','2','3'],['@','#','%']]
print(list(itertools.product(items, repeat=2)))
print(list(itertools.product(*items)))
```
> [(['A', 'B', 'C'], ['A', 'B', 'C']), (['A', 'B', 'C'], ['1', '2', '3']), (['A', 'B', 'C'], ['@', '#', '%']), (['1', '2', '3'], ['A', 'B', 'C']), (['1', '2', '3'], ['1', '2', '3']), (['1', '2', '3'], ['@', '#', '%']), (['@', '#', '%'], ['A', 'B', 'C']), (['@', '#', '%'], ['1', '2', '3']), (['@', '#', '%'], ['@', '#', '%'])]  
>   
> [('A', '1', '@'), ('A', '1', '#'), ('A', '1', '%'), ('A', '2', '@'), ('A', '2', '#'), ('A', '2', '%'), ('A', '3', '@'), ('A', '3', '#'), ('A', '3', '%'), ('B', '1', '@'), ('B', '1', '#'), ('B', '1', '%'), ('B', '2', '@'), ('B', '2', '#'), ('B', '2', '%'), ('B', '3', '@'), ('B', '3', '#'), ('B', '3', '%'), ('C', '1', '@'), ('C', '1', '#'), ('C', '1', '%'), ('C', '2', '@'), ('C', '2', '#'), ('C', '2', '%'), ('C', '3', '@'), ('C', '3', '#'), ('C', '3', '%')]  
```python
item1 = 'AB' 
item2 = '12' 
item3 = '@#' 
list(itertools.product(item1, item2, item3))
```
> [('A', '1', '@'),
 ('A', '1', '#'),
 ('A', '2', '@'),
 ('A', '2', '#'),
 ('B', '1', '@'),
 ('B', '1', '#'),
 ('B', '2', '@'),
 ('B', '2', '#')]  



# reduce  
누적 집계를 내기 위해 사용한다  
reduce(집계 함수, 순회 가능한 데이터, 초기값)  
```python
from functools import reduce 
```
**ex) reduce()를 사용하여 리스트의 곱을 구할 수 있다**
```python
a = [1,2,3,4,5]
print(reduce(lambda x, y: x*y, a))
print(reduce(lambda x, y: x*y, a, 100)) # 초기값을 줄 수 있다
```
> 120  
> 12000  

**ex) reduce()를 사용하여 최댓값을 구할 수 있다**
```python
findMax = lambda x, y: x if x > y else y
print(reduce(findMax, [1,9,4,2,5]))
```
> 9    



# Counter
동일한 값의 자료가 몇개 있는지 파악하기 위해 사용한다 
```python
from collections import Counter
``` 
- **collections.Counter()는 요소의 개수가 많은 것부터 출력한다**
```python
a = ['A', 'B', 'B', 'C', 'A', 'A']
print(Counter(a))
```
> Counter({'A': 3, 'B': 2, 'C': 1})  
- **입력은 값 = 갯수"의 형태로!!**
- **elements()는 딕셔너리 형태의 Counter값을 풀어서 반환한다(단, 0이하의 값은 반환하지 않음)**
- **update()는 값을 갱신할 수 있다**
```python
b = Counter(E = 2, F = 3, G = -1)
print(b)
print(list(b.elements()))
print(b.update({'E' : 5, 'H' : 1}))
```
> Counter({'F': 3, 'E': 2, 'G': -1})  
> ['E', 'E', 'F', 'F', 'F']  
> Counter({'E': 7, 'F': 3, 'H': 1, 'G': -1})  
- **문자열에도 사용 가능하다**
- **빈도수가 높은 n개의 요소를 튜플 형태로 반환할 수 있다**
- **subtract()로 요소를 뺄 수 있다(요소가 없는 경우는 음수 값이 출력됨)**
```python
a = Counter('aaaaabbbccd')
b = Counter('aaabbbzzz')
print('a: ', a, 'b: ', b)
print(a.most_common(2))
print(a.subtract(b))
```
> a: Counter({'a': 5, 'b': 3, 'c': 2, 'd': 1}) b: Counter({'a': 3, 'b': 3, 'z': 3})  
> [('a', 5), ('b', 3)]  
> Counter({'a': 2, 'c': 2, 'd': 1, 'b': 0, 'z': -3})  
- **덧셈, 뺄셈, 교집합, 합집합**
```python
a = Counter('aaaaabbbccd')
b = Counter('aaabbbzzz')

print('덧셈:   ', a + b)
print('뺄셈:   ', a - b)
print('교집합: ', a & b)
print('합집합: ', a | b)
```
> 덧셈:    Counter({'a': 8, 'b': 6, 'z': 3, 'c': 2, 'd': 1})  
> 뺄셈:    Counter({'a': 2, 'c': 2, 'd': 1})  
> 교집합:  Counter({'a': 3, 'b': 3})  
> 합집합:  Counter({'a': 5, 'b': 3, 'z': 3, 'c': 2, 'd': 1})  



# 문자열 자릿수 맞추기(zfill, rjust, format)  
```python
a = '1'

print(a.zfill(3))
print(a.rjust(5,'0'))
print(a.ljust(5,'0'))
print('%07d' % int(a))
print("{0:=^10}".format("hi"))
print("{0:*<10}".format("hi"))
print("{0:*>10}".format("hi"))
```
> 001  
> 00001  
> 10000  
> 0000001  
> ====hi====  
> hi********  
> ********hi  



