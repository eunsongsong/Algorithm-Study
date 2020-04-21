### >> 문제: programmers L2 [고양이와 개는 몇 마리 있을까](https://programmers.co.kr/learn/courses/30/lessons/59040)
**동물 보호소에 들어온 동물 중 고양이와 개가 각각 몇 마리인지 조회하는 SQL문을 작성해주세요.  
이때, 고양이가 개보다 먼저 조회해주세요.**   
*출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges*   

* ANIMAL_INS 테이블의 구조  
ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각  
동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.  

|NAME|TYPE|NULLABLE|
|:---:|:---:|:---:|
|ANIMAL_ID|VARCHAR(N)|FALSE| 
|ANIMAL_TYPE|VARCHAR(N)|FALSE|
|DATETIME|DATETIME|FALSE|
|INTAKE_CONDITION|VARCHAR(N)|FALSE|
|NAME|VARCHAR(N)|TRUE|
|SEX_UPON_INTAKE|VARCHAR(n)|FALSE|

* ANIMAL_INS 테이블

|ANIMAL_ID|ANIMAL_TYPE|DATETIME|INTAKE_CONDITION|NAME|SEX_UPON_INTAKE|
|:-:|:-:|:-:|:-:|:-:|:-:|
|A373219|Cat|2014-07-29 11:43:00|Normal|Ella|Spayed|Female|
|A377750|Dog|2017-10-25 17:17:00|Normal|Lucy|Spayed|Female|
|A354540|Cat|2014-12-11 11:48:00|Normal|Tux|Neutered|Male|

### >> 풀이
```sql
SELECT ANIMAL_TYPE, COUNT(ANIMAL_TYPE) as "count"
FROM ANIMAL_INS
GROUP BY ANIMAL_TYPE
```

### >> 실행 결과
|ANIMAL_TYPE|count|
|:-:|:-:|
|Cat|2|
|Dog|1|

