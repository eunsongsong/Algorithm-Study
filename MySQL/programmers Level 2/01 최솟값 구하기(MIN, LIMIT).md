### >> 문제: programmers L2 [최솟값 구하기](https://programmers.co.kr/learn/courses/30/lessons/59038)
**동물 보호소에 가장 먼저 들어온 동물은 언제 들어왔는지 조회하는 SQL 문을 작성해주세요.**   
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
|SEX_UPON_INTAKE|VARCHAR(N)|FALSE|

* ANIMAL_INS 테이블

|ANIMAL_ID|ANIMAL_TYPE|DATETIME|INTAKE_CONDITION|NAME|SEX_UPON_INTAKE|
|:-:|:-:|:-:|:-:|:-:|:-:|
|A399552|Dog|2013-10-14 15:38:00|Normal|Jack|Neutered|Male|
|A379998|Dog|2013-10-23 11:42:00|Normal|Disciple|Intact|Male|
|A370852|Dog|2013-11-03 15:04:00|Normal|Katie|Spayed|Female|

### >> 풀이

###### MIN

```mysql
SELECT MIN(DATETIME) AS "시간"
FROM ANIMAL_INS;
```

###### SUB QUERY

```mysql
SELECT DATETIME as "시간"
FROM ANIMAL_INS
WHERE DATETIME = (SELECT MIN(DATETIME) FROM ANIMAL_INS);
```

### >> 다른 풀이

###### LIMIT

```mysql
SELECT DATETIME
FROM ANIMAL_INS
ORDER BY DATETIME
LIMIT 1;
```

### >> 실행 결과
|시간|
|:-:|
|2013-10-14 15:38:00|

