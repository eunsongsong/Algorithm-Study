### >> 문제: programmers L1 [여러 기준으로 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/59404)
**동물 보호소에 들어온 모든 동물의 아이디와 이름, 보호 시작일을 이름 순으로 조회하는 SQL문을 작성해주세요.  
단, 이름이 같은 동물 중에서는 보호를 나중에 시작한 동물을 먼저 보여줘야 합니다.**   
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
|A349996|Cat|2018-01-22 14:32:00|Normal|Sugar|Neutered Male|
|A350276|Cat|2017-08-13 13:50:00|Normal|Jewel|Spayed Female|
|A396810|Dog|2016-08-22 16:13:00|Injured|Raven|Spayed Female|
|A410668|Cat|2015-11-19 13:41:00|Normal|Raven|Spayed Female|

### >> 풀이
```mysql
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC;
```
### >> 실행 결과
|ANIMAL_ID|NAME|DATETIME
|:-:|:-:|:-:|
|A350276|Jewel|2017-08-13 13:50:00|
|A396810|Raven|2016-08-22 16:13:00|
|A410668|Raven|2015-11-19 13:41:00|
|A349996|Sugar|2018-01-22 14:32:00|

