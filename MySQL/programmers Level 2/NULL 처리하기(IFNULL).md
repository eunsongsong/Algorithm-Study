### >> 문제: programmers L2 [NULL 처리하기](https://programmers.co.kr/learn/courses/30/lessons/59410)
**입양 게시판에 동물 정보를 게시하려 합니다.  
물의 생물 종, 이름, 성별 및 중성화 여부를 아이디 순으로 조회하는 SQL문을 작성해주세요.  
이때, 프로그래밍을 모르는 사람들은 NULL이라는 기호를 모르기 때문에  
이름이 없는 동물의 이름은 No name으로 표시해 주세요.**   
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
|A350276|Cat|2017-08-13 13:50:00|Normal|Jewel|Spayed|Female|
|A350375|Cat|2017-03-06 15:01:00|Normal|Meo|Neutered|Male|
|A368930|Dog|2014-06-08 13:20:00|Normal|NULL|Spayed|Female|

### >> 풀이
```sql
SELECT ANIMAL_TYPE, IFNULL(NAME, "No name") AS NAME, SEX_UPON_INTAKE
FROM ANIMAL_INS
ORDER BY ANIMAL_ID
```

### >> 실행 결과
|ANIMAL_TYPE|NAME|SEX_UPON_INTAKE|
|:-:|:-:|:-:|
|Cat|Jewel|Spayed Female|
|Cat|Meo|Neutered Male|
|Dog|No name|Spayed Female|

