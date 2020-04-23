# 힙(Heap)
* **최댓값, 최솟값**을 빠르게 찾기 위해 고안된 완전이진트리  
(완전이진트리: 왼쪽 하단부터 차례로 노드를 채우는 트리)
* 최대 힙(Max Heap): 부모 노드의 값이 자식 노드의 값보다 크다
* 최소 힙(Min Heap): 부모 노드의 값이 자식 노드의 값보다 작다

# import heapq
heapq 모듈은 최소 힙(Min Heap) 자료구조를 제공한다
* **heapq.heappush(heap,item)**: item 값을 heap으로 push한다
* **heapq.heappop(heap)**: heap에서 최솟값을 pop한다  
(heap이 비어 있으면 IndexError 발생)  
(pop하지 않고 가장 작은 항목에 엑세스하려면 heap[0]을 사용)  
* **heapq.heappushpop(heap, item)**: heap에 item을 **push한 후**, heap에서 최솟값을 pop한다
* **heapq.heapify(x)**:기존 리스트 x를 heap으로 변환  
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



# import itertools, 순열, 조합

```python
import itertools
items = ['A', 'B', 'C', 'D'] 

print('순열: ', list(map(''.join, itertools.permutations(items, 2))))
print('조합: ', list(map(''.join, itertools.combinations(items, 2))))
```
> 순열 :  ['AB', 'AC', 'AD', 'BA', 'BC', 'BD', 'CA', 'CB', 'CD', 'DA', 'DB', 'DC']  
> 조합 :  ['AB', 'AC', 'AD', 'BC', 'BD', 'CD']
