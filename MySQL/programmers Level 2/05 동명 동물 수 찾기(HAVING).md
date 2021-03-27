### >> 문제: programmers L2 [동명 동물 수 찾기](https://programmers.co.kr/learn/courses/30/lessons/59041)
**동물 보호소에 들어온 동물 이름 중 두 번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하는 SQL문을 작성해주세요.  
이때 결과는 이름이 없는 동물은 집계에서 제외하며, 결과는 이름 순으로 조회해주세요.**   
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
|A396810|Dog|2016-08-22 16:13:00|Injured|Raven|Spayed|Female|
|A377750|Dog|2017-10-25 17:17:00|Normal|Lucy|Spayed|Female|
|A355688|Dog|2014-01-26 13:48:00|Normal|Shadow|Neutered|Male|
|A399421|Dog|2015-08-25 14:08:00|Normal|Lucy|Spayed|Female|

### >> 풀이
```mysql
SELECT NAME, COUNT(NAME) AS "COUNT"
FROM ANIMAL_INS
GROUP BY NAME
HAVING COUNT(NAME) >=2 
ORDER BY NAME;
```

### >> 실행 결과
|NAME|COUNT|
|:-:|:-:|
|Lucy|3|
|Raven|2|

