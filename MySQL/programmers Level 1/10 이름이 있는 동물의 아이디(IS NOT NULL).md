### >> 문제: programmers L1 [이름이 있는 동물의 아이디](https://programmers.co.kr/learn/courses/30/lessons/59407)
**동물 보호소에 들어온 동물 중, 이름이 있는 동물의 ID를 조회하는 SQL 문을 작성해주세요.  
단, ID는 오름차순 정렬되어야 합니다.**   
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
|A434523|Cat|2015-11-20 14:18:00|Normal|NULL|Spayed|Female|
|A562649|Dog|2014-03-20 18:06:00|Sick|NULL|Spayed|Female|
|A524634|Dog|2015-01-02 18:54:00|Normal|*Belle|Intact|Female|
|A465637|Dog|2017-06-04 08:17:00|Injured|*Commander|Neutered|Male|

### >> 풀이
```mysql
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NOT NULL
ORDER BY ANIMAL_ID;
```

### >> 실행 결과
|NIMAL_ID|
|:-:|
|465637|
|524634|

