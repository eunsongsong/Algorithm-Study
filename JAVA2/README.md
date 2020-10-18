## 배열
#### 배열 선언
```java
// 배열 선언 시 []에 크기를 지정하면 안된다
int intArray[];
int [] intArray;
```
#### 배열 생성
```java
intArray = new int[5];
int intArray = new int[5];
```
#### 배열 초기화
```java
int intArray[] = {1, 2, 3, 4};
char [] num = {'4', '1', '2'};
```

## ArrayList
#### ArrayList 생성
a는 문자열만 삽십하고 검색할 수 있는 ArrayList 객체이다  
ArrayList는 스스로 용량을 조절하기 때문에 용량에 대해 신경 쓸 필요가 없다
```java
ArrayList<String> a = new ArrayList<String>();
ArrayList<String> a = new ArrayList<>();  // Java 7
var a = new ArrayList<String>();          // Java 10
```
> []  

#### ArrayList에 요소 삽입
```java
a.add("Hello");
a.add(null);     // null 삽입 가능
a.add(2, "Hi");  // 인덱스 2의 위치에 "Hi"를 삽입
System.out.println(a);
```
> [Hello, null, Hi]  

#### ArrayList 내의 요소 알아내기
```java
String s = a.get(2);  // 인덱스 2의 위치에 있는 요소 리턴
System.out.println(s);
```
> Hi  

#### ArrayList의 크기 알아내기
```java
int len = a.size();
System.out.println(len);
```
> 3  

#### ArrayList에서 요소 삭제
```java
a.remove(1);  // 인덱스 1의 위치에 있는 요소 삭제
System.out.println(a);
```
> [Hello, Hi]  

```java
// 객체 레퍼런스를 이용하여 remove()를 호출할 수도 있다
String str = new String("bye");
a.add(str);
System.out.println(a);
a.remove(str);
System.out.println(a);
```
> [Hello, Hi, bye]  
> [Hello, Hi]  

```java
a.clear();  // ArrayList에 있는 모든 요소 삭제
System.out.println(a);
```
> []  

#### 배열을 ArrayList로 바꾸기
```java
String[] arr = {"A", "B", "C"};
ArrayList<String> arrList= new ArrayList<>(Arrays.asList(arr));
System.out.println(arrList);
```
> [A, B, C]  

#### ArrayList 자르기
ArrayList.subList(fromIndex, toIndex)
```java
System.out.println(arrList.subList(1, 3));
```
> [B, C]  
