### >> 문제: programmers L3 [오랜 기간 보호한 동물(1)](https://programmers.co.kr/learn/courses/30/lessons/59044)

**아직 입양을 못 간 동물 중,  
가장 오래 보호소에 있었던 동물 3마리의 이름과 보호 시작일을 조회하는 SQL문을 작성해주세요.  
이때 결과는 보호 시작일 순으로 조회해야 합니다.**   
*출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges*   

* ANIMAL_INS 테이블의 구조  
  ANIMAL_ID, ANIMAL_TYPE, DATETIME, INTAKE_CONDITION, NAME, SEX_UPON_INTAKE는 각각  
  동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.  

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
| INTAKE_CONDITION | VARCHAR(N) |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_INTAKE  | VARCHAR(N) |  FALSE   |

* ANIMAL_OUT 테이블의 구조  
ANIMAL_ID, ANIMAL_TYPE, DATETIME, NAME, SEX_UPON_OUTCOME는 각각  
동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다.  

|NAME|TYPE|NULLABLE|
|:---:|:---:|:---:|
|ANIMAL_ID|VARCHAR(N)|FALSE|
|ANIMAL_TYPE|VARCHAR(N)|FALSE|
|DATETIME|DATETIME|FALSE|
|NAME|VARCHAR(N)|TRUE|
|SEX_UPON_OUTCOME|VARCHAR(N)|FALSE|

### >> 풀이

```mysql
SELECT I.NAME, I.DATETIME
FROM ANIMAL_INS I LEFT OUTER JOIN ANIMAL_OUTS O USING(ANIMAL_ID)
WHERE O.DATETIME IS NULL
ORDER BY I.DATETIME
LIMIT 3;
```

### >> 실행 결과

|  NAME  |      DATETIME       |
| :----: | :-----------------: |
| Shelly | 2015-01-29 15:01:00 |
| Jackie | 2016-01-03 16:25:00 |
| Benji  | 2016-04-19 13:28:00 |



