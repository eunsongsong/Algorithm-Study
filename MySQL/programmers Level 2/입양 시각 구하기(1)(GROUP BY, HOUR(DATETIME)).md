### >> 문제: programmers L2 [입양 시각 구하기(1)](https://programmers.co.kr/learn/courses/30/lessons/59412)
**보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다.  
9시부터 19시까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요.  
이때, 결과는 시간대 순으로 정렬해야 합니다.**

* ANIMAL_OUT 테이블의 구조  
ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 각각  
동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다.  

|NAME|TYPE|NULLABLE|
|:---:|:---:|:---:|
|ANIMAL_ID|VARCHAR(N)|FALSE| 
|ANIMAL_TYPE|VARCHAR(N)|FALSE|
|DATETIME|DATETIME|FALSE|
|NAME|VARCHAR(N)|TRUE|
|SEX_UPON_INTAKE|VARCHAR(n)|FALSE|

### >> 정답
```sql
SELECT HOUR(DATETIME) AS "HOUR", COUNT(ANIMAL_ID) AS "COUNT"
FROM ANIMAL_OUTS
WHERE HOUR(DATETIME) BETWEEN 9 AND 19
GROUP BY HOUR(DATETIME)
```

### >> 실행 결과
|HOUR|COUNT|
|:-:|:-:|
|9|1|
|10|2|
|11|13|
|12|10|
|13|14|
|14|9|
|15|7|
|16|10|
|17|12|
|18|16|
|19|2|

