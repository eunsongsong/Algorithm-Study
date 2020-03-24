### >> 문제: programmers L1 [이름이 없는 동물의 아이디](https://programmers.co.kr/learn/courses/30/lessons/59039)
**동물 보호소에 들어온 동물 중, 이름이 없는 채로 들어온 동물의 ID를 조회하는 SQL 문을 작성해주세요.  
단, ID는 오름차순 정렬되어야 합니다.**

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
|A368930|Dog|2014-06-08 13:20:00|Normal|NULL|Spayed Female|
|A524634|Dog|2015-01-02 18:54:00|Normal|*Belle|Intact Female|
|A465637|Dog|2017-06-04 08:17:00|Injured|*Commander|Neutered Male|

### >> 정답
```sql
SELECT ANIMAL_ID
FROM ANIMAL_INS
WHERE NAME IS NULL
ORDER BY ANIMAL_ID
```
### >> 실행 결과
|ANIMAL_ID|
|:-:|
|A368930|

